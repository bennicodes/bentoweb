import React from "react";

// Minimal line icons — one 1.5px stroke, square caps, drawn on a 24px grid.
const paths = {
  arrowRight: <path d="M4 12h15M14 7l5 5-5 5" />,
  arrowLeft: <path d="M20 12H5M10 7l-5 5 5 5" />,
  menu: <path d="M3 7h18M3 12h18M3 17h18" />,
  close: <path d="M5 5l14 14M19 5L5 19" />,
  plus: <path d="M12 4v16M4 12h16" />,
  mail: <path d="M3 6h18v12H3zM3 7l9 6 9-6" />,
  phone: <path d="M7 3h10v18H7zM11 18h2" />,
  pin: <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />,
  check: <path d="M4 12.5l5 5L20 6.5" />,
};

const Icon = ({ name, size = 20, className = "", strokeWidth = 1.5 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="square"
    strokeLinejoin="miter"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    {paths[name]}
  </svg>
);

export default Icon;
