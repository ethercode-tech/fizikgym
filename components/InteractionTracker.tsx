"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function InteractionTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const actionNode = target.closest("[data-track-event]") as HTMLElement | null;
      if (!actionNode) return;

      const eventName = actionNode.dataset.trackEvent;
      if (!eventName) return;

      trackEvent(eventName, { path: window.location.pathname });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
