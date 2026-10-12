import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { resolveAdvertisingRegion, subscribeConsent } from "@/lib/advertisingConsent";
import { syncPixelConsent, trackMetaEvent, trackWhatsAppLink } from "@/lib/metaPixel";

export function useAdvertisingRevision() {
  const [revision, setRevision] = useState(0);
  useEffect(() => {
    const update = () => { syncPixelConsent(); setRevision((n) => n + 1); };
    const unsubscribe = subscribeConsent(update);
    let active = true;
    void resolveAdvertisingRegion().then(() => { if (active) update(); });
    return () => { active = false; unsubscribe(); };
  }, []);
  return revision;
}

export default function MetaTracking() {
  const location = useLocation();
  const revision = useAdvertisingRevision();
  const lastPage = useRef<string>();
  // History keys also change for same-page navigation and anchors, which are not new page views.
  const page = location.pathname + location.search;
  useEffect(() => {
    if (lastPage.current !== page && trackMetaEvent("PageView")) lastPage.current = page;
  }, [page, revision]);
  useEffect(() => {
    document.addEventListener("click", trackWhatsAppLink);
    document.addEventListener("auxclick", trackWhatsAppLink);
    return () => {
      document.removeEventListener("click", trackWhatsAppLink);
      document.removeEventListener("auxclick", trackWhatsAppLink);
    };
  }, []);
  return null;
}

export function ProductViewTracking({ ids, name }: { ids: string[]; name: string }) {
  const location = useLocation();
  const revision = useAdvertisingRevision();
  const lastView = useRef<string>();
  const signature = ids.join(",");
  useEffect(() => {
    if (lastView.current !== location.key && trackMetaEvent("ViewContent", {
      content_ids: signature.split(","), content_type: "product", content_name: name,
    })) lastView.current = location.key;
  }, [location.key, signature, name, revision]);
  return null;
}