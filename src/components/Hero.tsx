"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const tags = t.raw("tags") as string[];

  return (
    <section
      style={{
        background: "var(--color-paper)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "14px 24px 64px" }}>
      {/* Kicker */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 18,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--color-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.16em",
        }}
      >
        <span style={{ width: 18, height: 1, background: "var(--color-ink)", flexShrink: 0 }} />
        <span style={{ color: "var(--color-accent)", fontWeight: 500 }}>01</span>
        {" "}{t("kicker").replace("01 ", "")}
      </div>

      {/* Headline */}
      <h1
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 500,
          fontSize: "clamp(52px, 10vw, 104px)",
          lineHeight: 1.08,
          letterSpacing: "-0.025em",
          margin: "0 0 0",
          textWrap: "balance",
          maxWidth: "14ch",
        }}
      >
        {t("claim_before")}{" "}
        <em
          style={{
            fontStyle: "italic",
            position: "relative",
            color: "var(--color-ink)",
            whiteSpace: "nowrap",
          }}
        >
          {t("claim_em")}
          <svg
            viewBox="0 0 200 18"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              left: "-2%",
              bottom: "-0.22em",
              width: "104%",
              height: "0.38em",
              pointerEvents: "none",
              color: "var(--color-accent)",
              overflow: "visible",
            }}
          >
            <path
              d="M2 8 Q 14 1, 26 8 T 50 8 T 74 8 T 98 8 T 122 8 T 146 8 T 170 8 T 194 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </em>
        <br />
        {t("claim_after")}
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(15px, 2vw, 19px)",
          lineHeight: 1.55,
          color: "var(--color-ink-soft)",
          margin: "clamp(20px, 3vw, 28px) 0 0",
          maxWidth: "44ch",
        }}
        dangerouslySetInnerHTML={{ __html: t.raw("sub") as string }}
      />

      {/* Tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          marginTop: "clamp(24px, 3vw, 32px)",
        }}
      >
        {tags.map((tag, i) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              padding: "6px 12px",
              borderRadius: "999px",
              background: "rgba(30,24,20,0.05)",
              color: "var(--color-ink-soft)",
              letterSpacing: "0.02em",
              display: "inline-flex",
              alignItems: "center",
              gap: i === 0 ? 7 : 0,
            }}
          >
            {i === 0 && (
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "999px",
                  background: "var(--color-accent)",
                  flexShrink: 0,
                  transform: "translateY(-1px)",
                }}
              />
            )}
            {tag}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: "clamp(28px, 3vw, 36px)" }}>
        <a
          href="#kontakt"
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: 15,
            padding: "13px 24px",
            borderRadius: "999px",
            border: "1px solid transparent",
            background: "var(--color-ink)",
            color: "var(--color-paper)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            letterSpacing: "-0.005em",
            transition: "transform .15s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
        >
          {t("cta_primary")}
          <span>↗</span>
        </a>
        <a
          href={`mailto:${t("cta_secondary")}`}
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: 15,
            padding: "13px 24px",
            borderRadius: "999px",
            border: "1px solid var(--color-line-strong)",
            background: "transparent",
            color: "var(--color-ink)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            transition: "transform .15s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>
            {t("cta_secondary")}
          </span>
        </a>
      </div>

      </div>
    </section>
  );
}
