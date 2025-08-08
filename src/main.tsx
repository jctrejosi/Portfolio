import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";
import styles from "@/styles/styles.module.css";
import "@/styles/styles.css";
// import "components-seed/components-seed.css";

function applySystemTheme() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.body.classList.remove("light", "dark");
  document.body.classList.add(isDark ? "dark" : "light");
}

applySystemTheme();
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", applySystemTheme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className={`${styles.main_container}`}>
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
