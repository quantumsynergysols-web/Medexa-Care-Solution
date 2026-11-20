"use client";

import { useEffect } from "react";

/** Specialties page behaviour: live filter over card text and hidden search keywords. */
export default function SpecialtyFx() {
  useEffect(() => {
    const search = document.querySelector<HTMLInputElement>("#specSearch");
    if (!search) return;
    const cards = Array.from(document.querySelectorAll<HTMLElement>("#specGrid .spec"));
    const count = document.getElementById("specCount");
    const empty = document.getElementById("specEmpty");

    const onInput = () => {
      const q = search.value.trim().toLowerCase();
      let visible = 0;
      cards.forEach((card) => {
        const hay = `${card.textContent ?? ""} ${card.dataset.name ?? ""}`.toLowerCase();
        const show = !q || hay.includes(q);
        card.classList.toggle("hidden-spec", !show);
        if (show) visible++;
      });
      if (count) count.textContent = `Showing ${visible} of ${cards.length} specialties`;
      empty?.classList.toggle("show", visible === 0);
    };

    search.addEventListener("input", onInput);
    return () => search.removeEventListener("input", onInput);
  }, []);

  return null;
}
