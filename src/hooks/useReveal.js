import { useEffect } from "react";

// One observer drives every scroll-in effect on the page. Elements opt in with
// a `data-reveal` attribute; CSS keys its start and end states off
// `data-inview`. Server-rendered HTML never carries `data-inview="false"`,
// so without JS (or before hydration) everything is simply visible.
// Re-runs on every route change (`key`) so new pages get their reveals.
export default function useReveal(key) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(document.querySelectorAll("[data-reveal]:not([data-inview='true'])"));
    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.setAttribute("data-inview", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-inview", "true");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    targets.forEach((el) => {
      el.setAttribute("data-inview", "false");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [key]);
}
