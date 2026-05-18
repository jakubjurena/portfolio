"use client";

import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Navigation() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const switchLocale = () => {
    router.replace(pathname, { locale: locale === "cs" ? "en" : "cs" });
  };

  const links = [
    { href: "#sluzby", label: t("services") },
    { href: "#o-mne", label: t("about") },
    { href: "#kontakt", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50" style={{ background: "var(--color-paper)" }}>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "22px 24px",
          borderBottom: "1px solid var(--color-line)",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image
            src="/jj.png"
            alt="Jakub Jurena logo"
            width={28}
            height={28}
            style={{ borderRadius: "999px", flexShrink: 0 }}
          />
          <div>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 500,
                fontSize: 17,
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
            >
              Jakub Jurena
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--color-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              WEB DEVELOPER · ZLÍN
            </div>
          </div>
        </div>

        {/* Desktop links */}
        <div
          className="hidden md:flex"
          style={{ alignItems: "center", gap: 4 }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                padding: "8px 14px",
                fontSize: 14,
                color: "var(--color-ink-soft)",
                borderRadius: "999px",
                textDecoration: "none",
                transition: "background .15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(30,24,20,0.06)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={switchLocale}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              border: "1px solid var(--color-line-strong)",
              padding: "4px 10px",
              borderRadius: "999px",
              background: "transparent",
              color: "var(--color-ink)",
              marginLeft: 6,
              cursor: "pointer",
              letterSpacing: "0.08em",
            }}
          >
            {t("lang")}
          </button>
        </div>

        {/* Mobile: lang + hamburger */}
        <div className="flex md:hidden" style={{ gap: 8, alignItems: "center" }}>
          <button
            onClick={switchLocale}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              border: "1px solid var(--color-line-strong)",
              padding: "4px 10px",
              borderRadius: "999px",
              background: "transparent",
              color: "var(--color-ink)",
              cursor: "pointer",
            }}
          >
            {t("lang")}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="menu"
            style={{
              width: 40,
              height: 40,
              border: "1px solid var(--color-line-strong)",
              borderRadius: 12,
              background: "transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              cursor: "pointer",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: 16,
                  height: 1.5,
                  background: "var(--color-ink)",
                  display: "block",
                  transition: "transform .2s, opacity .2s",
                  transform:
                    open && i === 0
                      ? "rotate(45deg) translate(4px, 4px)"
                      : open && i === 2
                        ? "rotate(-45deg) translate(4px, -4px)"
                        : "none",
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden"
          style={{
            background: "var(--color-paper)",
            borderBottom: "1px solid var(--color-line)",
            padding: "8px 24px 20px",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: 15,
                color: "var(--color-ink-soft)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-line)",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
