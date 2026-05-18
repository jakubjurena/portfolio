"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer
      style={{
        marginTop: 56,
        padding: "28px 24px 32px",
        borderTop: "1px solid rgba(30,24,20,0.1)",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: "var(--color-muted)",
        letterSpacing: "0.04em",
      }}
    >
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
        <span style={{ fontFamily: "var(--font-sans)", color: "var(--color-muted)" }}>
          {t("copy")}
        </span>
      </div>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
        {[
          { label: t("email"), href: `mailto:${t("email")}` },
          { label: t("linkedin"), href: "https://www.linkedin.com/in/jakubjurena" },
          { label: t("github"), href: "https://github.com/jakubjurena" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            style={{
              color: "var(--color-ink-soft)",
              textDecoration: "none",
              transition: "color .15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-ink)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ink-soft)")}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
