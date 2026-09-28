import { useEffect } from "react";
import { pageByPath } from "../data/pages";
import { site } from "../data/site";

// Keeps <title>, description, canonical and share tags in sync when the
// visitor navigates client-side. (The prerendered HTML already has them.)
const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

export default function usePageMeta(pathname) {
  useEffect(() => {
    const page = pageByPath(pathname);
    const url = site.url.replace(/\/$/, "") + (pathname === "/" ? "/" : pathname);
    document.title = page.title;
    setMeta('meta[name="description"]', "content", page.description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", page.title);
    setMeta('meta[property="og:description"]', "content", page.description);
    setMeta('meta[property="og:url"]', "content", url);
  }, [pathname]);
}
