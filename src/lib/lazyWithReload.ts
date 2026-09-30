import { lazy, type ComponentType } from "react";

const RELOAD_KEY = "gs-route-chunk-reload";

export const lazyWithReload = <T extends ComponentType<unknown>>(
  importer: () => Promise<{ default: T }>,
) =>
  lazy(async () => {
    try {
      const module = await importer();
      sessionStorage.removeItem(RELOAD_KEY);
      return module;
    } catch (error) {
      const alreadyReloaded = sessionStorage.getItem(RELOAD_KEY) === window.location.pathname;

      if (!alreadyReloaded) {
        sessionStorage.setItem(RELOAD_KEY, window.location.pathname);
        window.location.reload();
        return new Promise<never>(() => undefined);
      }

      sessionStorage.removeItem(RELOAD_KEY);
      throw error;
    }
  });