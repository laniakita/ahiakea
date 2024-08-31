import type { Config } from "tailwindcss";
import catppuccin from "@catppuccin/tailwindcss";
import tailwindProse from "@tailwindcss/typography";
//import plugin from "tailwindcss/plugin";
import { addDynamicIconSelectors } from "@iconify/tailwind";

const accent = "ctp-mauve";
const invertAccent = "ctp-orange";
const linkColor = "ctp-sky";
const invertLinkColor = "ctp-orange";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translate3d(0rem,1rem,0rem)" },
          to: { opacity: "1", transform: "translate3d(0rem,0rem,0rem)" },
        },
        "fade-in-down": {
          from: { opacity: "0", transform: "translate3d(0rem,-100%,0rem)" },
          to: { opacity: "1", transform: "translate3d(0rem,0rem,0rem)" },
        },
        marquee: {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(-100%, 0)" },
        },
        upDog: {
          "0%": { transform: "translateY(140%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "nav-slide-up": {
          //not in use
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "nav-slide-down": {
          // not in use
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease 1s forwards",
        "quick-fade-in": "fade-in 0.3s ease forwards",
        "fade-in-up": "fade-in-up 0.2s ease 1s forwards",
        "fade-in-down": "fade-in-down 1s ease 1s forwards",
        marquee: "marquee 5s linear infinite",
        upDog: "upDog 1.5s ease 1s forwards",
        "nav-slide-up": "nav-slide-up 0.8s ease forwards",
        "nav-slide-down": "nav-slide-down 0.8s ease forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: ({ theme }: { theme: any }) => ({
        DEFAULT: {
          css: {
            "blockquote p:first-of-type::before": false,
            "blockquote p:first-of-type::after": false,
          },
        },
        catppuccin: {
          css: {
            "--tw-prose-body": theme(`colors.ctp-text.DEFAULT`),
            "--tw-prose-headings": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-lead": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-links": theme(`colors.${linkColor}.DEFAULT`),
            "--tw-prose-bold": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-counters": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-bullets": theme(`colors.ctp-text.DEFAULT`),
            "--tw-prose-hr": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-quotes": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-quote-borders": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-captions": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-code": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-pre-code": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-pre-bg": theme("colors.ctp-base.DEFAULT"),
            "--tw-prose-th-borders": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-td-borders": theme(`colors.${accent}.DEFAULT`),
            "--tw-prose-invert-body": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-invert-headings": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-invert-lead": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-invert-links": theme(
              `colors.${invertLinkColor}.DEFAULT`,
            ),
            "--tw-prose-invert-bold": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-invert-counters": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-invert-bullets": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-invert-hr": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-invert-quotes": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-invert-quote-borders": theme(
              `colors.${invertAccent}.DEFAULT`,
            ),
            "--tw-prose-invert-captions": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-invert-code": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-invert-pre-code": theme("colors.ctp-text.DEFAULT"),
            "--tw-prose-invert-pre-bg": theme("rgb(0 0 0 / 50%)"),
            "--tw-prose-invert-th-borders": theme(
              `colors.${invertAccent}.DEFAULT`,
            ),
            "--tw-prose-invert-td-borders": theme(
              `colors.${invertAccent}.DEFAULT`,
            ),
          },
        },
      }),
    },
  },
  plugins: [
    tailwindProse,
    /*
    plugin(function ({ addVariant }) {
      addVariant(
        "prose-inline-code",
        '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"]))',
      );
    }), */
    catppuccin({ prefix: "ctp" }),
    addDynamicIconSelectors(),
  ],
};
export default config;
