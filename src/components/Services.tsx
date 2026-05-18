"use client";

import { useTranslations } from "next-intl";

type ServiceItem = {
  num: string;
  title: string;
  desc: string;
  price: string;
  featured: boolean;
  accent: boolean;
};

export default function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as ServiceItem[];

  return (
    <section id="sluzby" style={{ padding: "0 24px", marginTop: 80 }}>
      <Kicker label={t("kicker")} />

      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 500,
          fontSize: "clamp(32px, 5vw, 56px)",
          lineHeight: 1.04,
          letterSpacing: "-0.02em",
          margin: "0 0 28px",
          textWrap: "balance",
        }}
      >
        {t("heading_before")}{" "}
        <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
          {t("heading_em")}
        </em>{" "}
        {t("heading_after")}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 14,
        }}
      >
        {items.map((item) => {
          const isDark = item.featured;
          const isAccent = item.accent;

          const bg = isDark
            ? "var(--color-ink)"
            : isAccent
              ? "var(--color-accent)"
              : "var(--color-paper-2)";
          const fg = isDark || isAccent ? "var(--color-paper)" : "var(--color-ink)";
          const fgMuted = isDark
            ? "rgba(245,236,221,0.55)"
            : isAccent
              ? "rgba(245,236,221,0.75)"
              : "var(--color-muted)";
          const fgDesc = isDark
            ? "rgba(245,236,221,0.7)"
            : isAccent
              ? "rgba(245,236,221,0.85)"
              : "var(--color-ink-soft)";
          const borderColor = isDark || isAccent
            ? "none"
            : "1px solid rgba(30,24,20,0.06)";
          const dividerColor = isDark || isAccent
            ? "1px dashed rgba(245,236,221,0.22)"
            : "1px dashed rgba(30,24,20,0.18)";
          const arrowBg = isDark
            ? "var(--color-accent)"
            : isAccent
              ? "rgba(255,255,255,0.2)"
              : "var(--color-ink)";

          return (
            <div
              key={item.num}
              style={{
                background: bg,
                color: fg,
                borderRadius: 16,
                padding: "24px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                border: borderColor,
                minHeight: 240,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: fgMuted,
                  letterSpacing: "0.18em",
                }}
              >
                {item.num}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 500,
                  fontSize: "clamp(22px, 3vw, 28px)",
                  margin: 0,
                  letterSpacing: "-0.01em",
                  flex: 1,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  color: fgDesc,
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 8,
                  paddingTop: 14,
                  borderTop: dividerColor,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: fgMuted,
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.price}
                </span>
                <span
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "999px",
                    background: arrowBg,
                    color: "var(--color-paper)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    flexShrink: 0,
                  }}
                >
                  →
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Kicker({ label }: { label: string }) {
  const parts = label.split(" ");
  const num = parts[0];
  const rest = parts.slice(1).join(" ");
  return (
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
      <span style={{ color: "var(--color-accent)", fontWeight: 500 }}>{num}</span>
      {rest}
    </div>
  );
}
