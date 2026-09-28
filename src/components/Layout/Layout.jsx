import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import useReveal from "../../hooks/useReveal";
import usePageMeta from "../../hooks/usePageMeta";

const Layout = () => {
  const { pathname, hash } = useLocation();

  useReveal(pathname);
  usePageMeta(pathname);

  // New page → start at the top (unless the link points to a section).
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <>
      <a href="#innhold" className="skip-link">
        Hopp til innholdet
      </a>
      <Navbar />
      <main id="innhold">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
