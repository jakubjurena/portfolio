"use client";

import { useTranslations } from "next-intl";
import { Kicker } from "./Services";

export default function BiggerProject() {
  const t = useTranslations("services");

  return (
    <section style={{ padding: "0 24px", marginTop: 80 }}>
      <Kicker label={t("bigger_kicker")} />
      <div
        style={{
          background: "var(--color-accent)",
          borderRadius: 16,
          padding: "28px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <div style={{ flex: "1 1 300px" }}>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
              fontSize: "clamp(18px, 2.5vw, 24px)",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              color: "var(--color-paper)",
              margin: "0 0 8px",
            }}
          >
            {t("bigger_heading")}
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14.5,
              lineHeight: 1.5,
              color: "rgba(245,236,221,0.82)",
              margin: 0,
            }}
          >
            {t("bigger_body")}
          </p>
        </div>

        <a
          href="#kontakt"
          style={{
            flexShrink: 0,
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: 14,
            padding: "12px 22px",
            borderRadius: "999px",
            background: "var(--color-ink)",
            color: "var(--color-paper)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            transition: "opacity .15s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {t("bigger_cta")} ↗
        </a>
      </div>
    </section>
  );
}
