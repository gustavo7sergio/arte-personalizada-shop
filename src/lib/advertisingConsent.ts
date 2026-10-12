export const CONSENT_KEY = "gs-advertising-consent";
export const CONSENT_CHANGED = "gs-advertising-consent-changed";
export const OPEN_COOKIE_SETTINGS = "gs-open-cookie-settings";
export const NOTICE_VERSION = "2026-10-12-v1";
export const CONSENT_NOTICE = "Usamos cookies necessários para manter seu carrinho. Com sua autorização, o Meta Pixel compartilha com a Meta visitas, produtos visualizados, adições ao carrinho e cliques de orçamento pelo WhatsApp, além de dados técnicos como IP, navegador e identificadores de cookies, para medir e otimizar anúncios. Não enviamos mensagens, nome, e-mail ou telefone de clientes. Você pode aceitar ou recusar a publicidade e mudar sua escolha em Configurações de cookies.";
export const CONSENT_SUMMARY = "Utilizamos recursos essenciais para o funcionamento do site e do carrinho. Com sua autorização, usamos cookies de marketing para entender quais produtos despertam interesse e melhorar nossos anúncios.";

interface ConsentDecision {
  advertising: boolean;
  at: string;
  noticeVersion: typeof NOTICE_VERSION;
  notice: string;
  choices: string[];
  bannerNotice?: string;
}
export interface ConsentRecord {
  visitorId: string;
  decisions: ConsentDecision[];
}

export function readConsent(): ConsentRecord | null {
  try {
    const record = JSON.parse(localStorage.getItem(CONSENT_KEY) ?? "null") as ConsentRecord | null;
    if (!record || typeof record.visitorId !== "string" || !Array.isArray(record.decisions)) return null;
    if (!record.decisions.every((d) => typeof d.advertising === "boolean" && typeof d.at === "string" && d.noticeVersion === NOTICE_VERSION && d.notice === CONSENT_NOTICE)) return null;
    return record;
  } catch { return null; }
}

export function advertisingChoice(): boolean | undefined {
  const decisions = readConsent()?.decisions;
  return decisions?.[decisions.length - 1]?.advertising;
}

export function saveConsent(advertising: boolean): boolean {
  const previous = readConsent();
  const record: ConsentRecord = {
    visitorId: previous?.visitorId ?? crypto.randomUUID(),
    decisions: [...(previous?.decisions ?? []), {
      advertising, at: new Date().toISOString(), noticeVersion: NOTICE_VERSION,
      notice: CONSENT_NOTICE, choices: ["Aceitar", "Recusar", "Personalizar"],
      bannerNotice: CONSENT_SUMMARY,
    }],
  };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
    window.dispatchEvent(new Event(CONSENT_CHANGED));
    return true;
  } catch { return false; }
}

export function requiresConsent(): boolean {
  // GS Cartões requires explicit marketing acceptance worldwide.
  return true;
}

export function advertisingAllowed(): boolean {
  const choice = advertisingChoice();
  const privacy = navigator as Navigator & { globalPrivacyControl?: boolean };
  if (choice === false || privacy.globalPrivacyControl || navigator.doNotTrack === "1") return false;
  return choice === true;
}

export function resolveAdvertisingRegion(): Promise<void> {
  // Kept as a readiness hook for existing consumers; geography cannot grant consent.
  return Promise.resolve();
}

export function subscribeConsent(callback: () => void): () => void {
  const storage = (event: StorageEvent) => {
    if (event.key === CONSENT_KEY || event.key === null) callback();
  };
  window.addEventListener(CONSENT_CHANGED, callback);
  window.addEventListener("storage", storage);
  return () => {
    window.removeEventListener(CONSENT_CHANGED, callback);
    window.removeEventListener("storage", storage);
  };
}