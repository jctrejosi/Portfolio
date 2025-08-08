import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";
import "@/styles/index.css";
import "components-seed/bundle/index.css";

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
    <div className="root-container">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
