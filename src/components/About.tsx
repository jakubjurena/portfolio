"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Kicker } from "./Services";

type Fact = { key: string; value: string };

export default function About() {
  const t = useTranslations("about");
  const facts = t.raw("facts") as Fact[];

  return (
    <section
      id="o-mne"
      style={{ padding: "0 24px", marginTop: 96 }}
    >
      <Kicker label={t("kicker")} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "clamp(24px, 4vw, 56px)",
          alignItems: "start",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            aspectRatio: "4/5",
            borderRadius: 14,
            background: "var(--color-paper-2)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src="/avatar.png"
            alt="Jakub Jurena"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>

        {/* Content */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.1,
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
              textWrap: "balance",
            }}
          >
            {t("heading_before")}{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
              {t("heading_em")}
            </em>{" "}
            {t("heading_after").split("\n").map((line, i) =>
              i === 0 ? line : <span key={i}><br />{line}</span>
            )}
          </h2>

          <p
            style={{
              fontSize: "clamp(14.5px, 1.5vw, 17px)",
              lineHeight: 1.6,
              color: "var(--color-ink-soft)",
              margin: "0 0 24px",
            }}
          >
            {t("lead")}
          </p>

          {/* Facts */}
          <div>
            {facts.map((fact, i) => (
              <div
                key={fact.key}
                style={{
                  display: "grid",
                  gridTemplateColumns: "92px 1fr",
                  gap: 16,
                  alignItems: "baseline",
                  padding: "12px 0",
                  borderBottom:
                    i < facts.length - 1
                      ? "1px solid rgba(30,24,20,0.1)"
                      : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "var(--color-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                  }}
                >
                  {fact.key}
                </span>
                <span
                  style={{
                    fontSize: 14.5,
                    color: "var(--color-ink)",
                    lineHeight: 1.45,
                  }}
                  dangerouslySetInnerHTML={{ __html: fact.value }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
