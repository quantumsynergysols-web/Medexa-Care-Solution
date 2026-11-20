"use client";

import { useEffect } from "react";

/** FAQ page behaviour: single-open accordion and live search over question, answer and hidden keywords. */
export default function FaqFx() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-page="faq"]');
    if (!root) return;
    const controller = new AbortController();
    const { signal } = controller;
    const items = Array.from(root.querySelectorAll<HTMLElement>(".faq"));

    const closeItem = (item: HTMLElement) => {
      item.classList.remove("open");
      const ans = item.querySelector<HTMLElement>(".ans");
      if (ans) ans.style.maxHeight = "0px";
      item.querySelector("button")?.setAttribute("aria-expanded", "false");
    };

    items.forEach((item) => {
      const btn = item.querySelector("button");
      const ans = item.querySelector<HTMLElement>(".ans");
      if (!btn || !ans) return;
      btn.addEventListener(
        "click",
        () => {
          const wasOpen = item.classList.contains("open");
          items.filter((i) => i.classList.contains("open")).forEach(closeItem);
          if (!wasOpen) {
            item.classList.add("open");
            ans.style.maxHeight = ans.scrollHeight + "px";
            btn.setAttribute("aria-expanded", "true");
          }
        },
        { signal },
      );
    });

    const search = root.querySelector<HTMLInputElement>("#faqSearch");
    const empty = root.querySelector<HTMLElement>("#faqEmpty");
    search?.addEventListener(
      "input",
      () => {
        const q = search.value.trim().toLowerCase();
        let visible = 0;
        items.forEach((item) => {
          const hay = `${item.textContent ?? ""} ${item.dataset.q ?? ""}`.toLowerCase();
          const show = !q || hay.includes(q);
          item.classList.toggle("hidden-faq", !show);
          if (show) visible++;
          else if (item.classList.contains("open")) closeItem(item);
        });
        root.querySelectorAll<HTMLElement>(".faq-group-title").forEach((title) => {
          const list = title.nextElementSibling;
          title.style.display = list?.querySelector(".faq:not(.hidden-faq)") ? "" : "none";
        });
        empty?.classList.toggle("show", visible === 0);
      },
      { signal },
    );

    return () => controller.abort();
  }, []);

  return null;
}
