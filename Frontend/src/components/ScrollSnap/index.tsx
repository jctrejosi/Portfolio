import { useRef, useState, useEffect } from "react";
import styles from "./styles.module.css";

type FullPageScrollProps = {
  children: React.ReactNode[];
};

export function ScrollSnap({ children }: FullPageScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.5,
      }
    );

    const sections = containerRef.current?.children ?? [];
    Array.from(sections).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    const section = containerRef.current?.children[index];
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper}>
      <div ref={containerRef} className={styles.container}>
        {children.map((child, i) => (
          <div key={i} data-index={i} className={styles.section}>
            {child}
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {children.map((_, i) => (
          <div
            key={i}
            onClick={() => scrollToSection(i)}
            className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
