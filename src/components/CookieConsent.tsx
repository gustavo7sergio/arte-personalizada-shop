import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { advertisingChoice, CONSENT_NOTICE, OPEN_COOKIE_SETTINGS, readConsent, requiresConsent, resolveAdvertisingRegion, saveConsent, subscribeConsent } from "@/lib/advertisingConsent";

export default function CookieConsent() {
  const decisions = readConsent()?.decisions;
  const lastDecision = decisions?.[decisions.length - 1];
  const [visible, setVisible] = useState(false);
  const [settings, setSettings] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    let active = true;
    const update = () => { if (active) setVisible(requiresConsent() && advertisingChoice() === undefined); };
    const open = () => setSettings(true);
    const openPrivacy = () => setPrivacy(true);
    const unsubscribe = subscribeConsent(update);
    void resolveAdvertisingRegion().then(update);
    window.addEventListener(OPEN_COOKIE_SETTINGS, open);
    window.addEventListener("gs-open-privacy", openPrivacy);
    return () => { active = false; unsubscribe(); window.removeEventListener(OPEN_COOKIE_SETTINGS, open); window.removeEventListener("gs-open-privacy", openPrivacy); };
  }, []);
  const choose = (accepted: boolean) => {
    if (!saveConsent(accepted)) { setError(true); return; }
    setError(false); setVisible(false); setSettings(false);
  };
  const choices = <div className="flex flex-wrap gap-3">
    <Button onClick={() => choose(false)} variant="outline" className="flex-1">Recusar publicidade</Button>
    <Button onClick={() => choose(true)} className="flex-1">Aceitar publicidade</Button>
  </div>;
  return <>
    {visible && !settings && !privacy && <section role="region" aria-label="Consentimento de cookies" className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background p-5 shadow-lg">
      <div className="mx-auto max-w-4xl space-y-3 font-body">
        <h2 className="text-lg font-display text-foreground">Sua privacidade</h2>
        <p className="text-sm text-muted-foreground">{CONSENT_NOTICE}</p>
        <Button variant="link" className="h-auto p-0" onClick={() => setPrivacy(true)}>Política de privacidade</Button>
        {choices}
        {error && <p role="alert" className="text-sm text-destructive">Não foi possível salvar sua escolha. A publicidade permanece bloqueada. Libere o armazenamento do navegador e tente novamente.</p>}
      </div>
    </section>}
    <Dialog open={settings} onOpenChange={setSettings}>
      <DialogContent className="max-h-[85dvh] w-[calc(100%_-_2rem)] overflow-y-auto rounded-lg">
        <DialogHeader><DialogTitle>Configurações de cookies</DialogTitle><DialogDescription>{CONSENT_NOTICE}</DialogDescription></DialogHeader>
        <p className="text-sm text-foreground">Cookies necessários: sempre ativos para guardar seu carrinho. Publicidade: {advertisingChoice() === true ? "autorizada" : advertisingChoice() === false ? "recusada" : "ainda não escolhida"}.</p>
        <p className="text-sm text-muted-foreground">Recusar também retira uma autorização anterior e impede novos envios. Fechar esta janela mantém sua escolha atual.</p>
        <Button variant="link" className="justify-start p-0" onClick={() => setPrivacy(true)}>Política de privacidade</Button>
        {choices}
        {error && <p role="alert" className="text-sm text-destructive">Não foi possível salvar sua escolha. Tente permitir o armazenamento no navegador.</p>}
      </DialogContent>
    </Dialog>
    <Dialog open={privacy} onOpenChange={setPrivacy}>
      <DialogContent className="max-h-[85dvh] w-[calc(100%_-_2rem)] max-w-2xl overflow-y-auto rounded-lg font-body">
        <DialogHeader><DialogTitle>Política de privacidade e cookies</DialogTitle><DialogDescription>GS Cartões · Atualizada em 12 de outubro de 2026</DialogDescription></DialogHeader>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>Responsável: GS Mídias e Serviços LTDA, CNPJ 41.483.628/0001-72. Contato para privacidade e direitos previstos na LGPD: atendimento@gscartoes.com.</p>
          <h3 className="font-semibold text-foreground">Carrinho e preferências</h3>
          <p>Guardamos produtos e quantidades do carrinho no seu navegador para preservar seu pedido. Sua escolha de publicidade também fica neste navegador, vinculada a um identificador aleatório, com data, texto do aviso, versão e opções apresentadas. Mantemos o histórico de aceite e retirada enquanto esse armazenamento existir. Esses registros não são enviados à Meta.</p>
          <h3 className="font-semibold text-foreground">Publicidade da Meta</h3>
          <p>{CONSENT_NOTICE}</p>
          <p>O Pixel 303131834616940 usa cookies como _fbp e _fbc (normalmente até 90 dias, conforme as regras da Meta). Compartilhamos identificadores públicos dos produtos, quantidades e valores reais do carrinho em BRL; esses valores não representam vendas. Visitas não recebem valor monetário. Não usamos correspondência avançada nem envio de dados de clientes.</p>
          <p>Nas regiões que exigem consentimento, incluindo o Brasil, o Pixel só é carregado após o aceite. Se a região não puder ser identificada, pedimos autorização. Em outras regiões, a medição pode estar ativa sem aviso, respeitando sua recusa e os sinais de privacidade do navegador. Os dados podem ser processados internacionalmente pela Meta, conforme sua política.</p>
          <h3 className="font-semibold text-foreground">WhatsApp e seus direitos</h3>
          <p>O clique abre o WhatsApp para atendimento. Não confirma que você enviou uma mensagem, recebeu orçamento ou fez uma compra. A mensagem do carrinho vai apenas para o WhatsApp quando você decide enviá-la, e não para o Pixel.</p>
          <p>Você pode mudar ou retirar sua autorização em Configurações de cookies a qualquer momento; novos envios param imediatamente, inclusive em outras abas deste site. A retirada não desfaz dados já compartilhados. Você pode apagar o armazenamento do navegador e solicitar informações, acesso ou exclusão pelo contato acima. A publicidade também respeita Global Privacy Control e Do Not Track.</p>
          <a className="text-primary underline" href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">Política de privacidade da Meta</a>
          <p>Escolha registrada neste navegador: {lastDecision ? new Date(lastDecision.at).toLocaleString("pt-BR") : "nenhuma"}.</p>
        </div>
        <Button variant="outline" onClick={() => { setPrivacy(false); setSettings(true); }}>Configurações de cookies</Button>
      </DialogContent>
    </Dialog>
  </>;
}