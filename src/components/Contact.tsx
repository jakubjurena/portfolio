"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Kicker } from "./Services";

export default function Contact() {
  const t = useTranslations("contact");

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        cssVarsPerTheme: { light: { "cal-brand": "#d96b3a" }, dark: { "cal-brand": "#d96b3a" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section
      id="kontakt"
      style={{ marginTop: 80, padding: "0 16px 0" }}
    >
      <div
        style={{
          background: "var(--color-ink)",
          color: "var(--color-paper)",
          borderRadius: 24,
          padding: "clamp(28px, 4vw, 48px) clamp(24px, 4vw, 48px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: -1800,
            width: 2200,
            height: 2200,
            background: "radial-gradient(circle, var(--color-accent) 0%, transparent 80%)",
            opacity: 0.66,
            pointerEvents: "none",
          }}
        />

        {/* Kicker (light override) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 14,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "rgba(245,236,221,0.6)",
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            position: "relative",
          }}
        >
          <span style={{ width: 18, height: 1, background: "var(--color-accent)", flexShrink: 0 }} />
          {(() => {
            const parts = t("kicker").split(" ");
            return <>
              <span style={{ color: "var(--color-accent)", fontWeight: 500 }}>{parts[0]}</span>
              {parts.slice(1).join(" ")}
            </>;
          })()}
        </div>

        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 500,
            fontSize: "clamp(32px, 5vw, 48px)",
            lineHeight: 1.02,
            letterSpacing: "-0.025em",
            margin: "0 0 28px",
            textWrap: "balance",
            position: "relative",
          }}
        >
          {t("heading_before")}{" "}
          <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
            {t("heading_em")}
          </em>
        </h2>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 14,
            position: "relative",
          }}
        >
          {/* Step 1 — Email */}
          <div
            style={{
              background: "rgba(245,236,221,0.06)",
              border: "1px solid rgba(245,236,221,0.12)",
              borderRadius: 16,
              padding: 22,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "rgba(245,236,221,0.7)",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
              }}
            >
              <StepNum>{t("step1_num")}</StepNum>
              {t("step1_head")}
            </div>
            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.5,
                color: "rgba(245,236,221,0.72)",
                margin: 0,
              }}
            >
              {t("step1_desc")}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
              <a
                href={`mailto:${t("step1_email")}`}
                style={{
                  background: "var(--color-paper)",
                  color: "var(--color-ink)",
                  padding: "11px 16px",
                  borderRadius: "999px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 500,
                  textDecoration: "none",
                  letterSpacing: "-0.005em",
                  transition: "background .15s",
                  display: "inline-flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-accent-soft)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-paper)")}
              >
                {t("step1_email")}
              </a>
              <a
                href="https://www.linkedin.com/in/jakubjurena"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "transparent",
                  color: "var(--color-paper)",
                  padding: "11px 16px",
                  borderRadius: "999px",
                  border: "1px solid rgba(245,236,221,0.25)",
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "border-color .15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(245,236,221,0.6)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(245,236,221,0.25)")}
              >
                {t("step1_linkedin")}
              </a>
            </div>
          </div>

          {/* Step 2 — Cal.com */}
          <div
            style={{
              background: "rgba(245,236,221,0.06)",
              border: "1px solid rgba(245,236,221,0.12)",
              borderRadius: 16,
              padding: 22,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "rgba(245,236,221,0.7)",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
              }}
            >
              <StepNum>{t("step2_num")}</StepNum>
              {t("step2_head")}
            </div>
            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.5,
                color: "rgba(245,236,221,0.72)",
                margin: 0,
              }}
            >
              {t("step2_desc")}
            </p>
            <button
              data-cal-namespace="30min"
              data-cal-link={t("cal_link_30")}
              data-cal-config='{"layout":"month_view"}'
              style={{
                background: "var(--color-accent)",
                color: "var(--color-paper)",
                padding: "13px 20px",
                borderRadius: "999px",
                border: "none",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                width: "fit-content",
                marginTop: 4,
                transition: "opacity .15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {t("book_btn")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepNum({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        width: 22,
        height: 22,
        borderRadius: "999px",
        background: "var(--color-accent)",
        color: "var(--color-paper)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        fontWeight: 600,
        flexShrink: 0,
      }}
    >
      {children}
    </span>
  );
}
