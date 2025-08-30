"use client";

import { useEffect } from "react";

/**
 * HydrationFix component handles browser extension attributes
 * that can cause hydration mismatches
 */
export function HydrationFix() {
  useEffect(() => {
    // Remove attributes that might be added by browser extensions
    const body = document.body;
    if (body) {
      // Remove common extension attributes
      const extensionAttributes = [
        "cz-shortcut-listen",
        "data-new-gr-c-s-check-loaded",
        "data-gr-ext-installed",
        "spellcheck",
      ];

      extensionAttributes.forEach((attr) => {
        if (body.hasAttribute(attr)) {
          body.removeAttribute(attr);
        }
      });
    }
  }, []);

  return null;
}
