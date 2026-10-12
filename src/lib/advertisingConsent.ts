export const CONSENT_KEY = "gs-advertising-consent";
export const CONSENT_CHANGED = "gs-advertising-consent-changed";
export const OPEN_COOKIE_SETTINGS = "gs-open-cookie-settings";
export const NOTICE_VERSION = "2026-10-12-v1";
export const CONSENT_NOTICE = "Usamos cookies necessários para manter seu carrinho. Com sua autorização, o Meta Pixel compartilha com a Meta visitas, produtos visualizados, adições ao carrinho e cliques de orçamento pelo WhatsApp, além de dados técnicos como IP, navegador e identificadores de cookies, para medir e otimizar anúncios. Não enviamos mensagens, nome, e-mail ou telefone de clientes. Você pode aceitar ou recusar a publicidade e mudar sua escolha em Configurações de cookies.";

interface ConsentDecision {
  advertising: boolean;
  at: string;
  noticeVersion: typeof NOTICE_VERSION;
  notice: string;
  choices: string[];
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
    }],
  };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
    window.dispatchEvent(new Event(CONSENT_CHANGED));
    return true;
  } catch { return false; }
}

// Conservative consent regions, including Brazil; unresolved locations also require consent.
const CONSENT_COUNTRIES = new Set("BR AT BE BG HR CY CZ DK EE FI FR DE GR HU IS IE IT LV LI LT LU MT NL NO PL PT RO SK SI ES SE GB CH AD MC SM VA AX FO GL GG JE IM CA AU NZ ZA JP KR IN TH SG TR IL AR CO PE CL EC MX UY".split(" "));
let region: string | undefined;
let regionRequest: Promise<void> | undefined;

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
  regionRequest ??= (async () => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 2000);
    try {
      const response = await fetch("/cdn-cgi/trace", { signal: controller.signal, credentials: "same-origin", cache: "no-store" });
      if (response.ok) region = (await response.text()).match(/^loc=([A-Z]{2})$/m)?.[1];
    } catch { /* Unknown region: consent required. */ }
    finally { window.clearTimeout(timeout); }
  })();
  return regionRequest;
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