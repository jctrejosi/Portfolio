import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";
import styles from "@/styles/styles.module.css";
import "@/styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className={styles.main_container}>
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
