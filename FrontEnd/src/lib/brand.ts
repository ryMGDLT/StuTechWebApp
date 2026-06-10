/** Xone brand constants — paths under `public/assets/XONE/xone_brand_kit/` */

export const BRAND_NAME = "Xone Software Development";
export const BRAND_SHORT = "Xone";

/** Official palette from xone_brand_kit/README.txt */
export const brandColors = {
  navy: "#1a1a2e",
  violet: "#533bda",
  cyan: "#22d3ee",
  light: "#f1f5f9",
  white: "#ffffff",
  grayDark: "#3f3f50",
  grayMuted: "#64748b",
  grayLight: "#e2e8f0",
} as const;

export const brandAssets = {
  /** Full lockup on light backgrounds (navbar) */
  logo: "/assets/XONE/xone_brand_kit/xone_logo.svg",
  /** Full lockup on dark backgrounds (footer) */
  logoInverse: "/assets/XONE/xone_brand_kit/xone_logo_inverse.svg",
  /** Favicon and compact marks */
  icon: "/assets/XONE/xone_brand_kit/xone_icon.svg",
  wordmark: "/assets/XONE/xone_brand_kit/xone_wordmark.svg",
} as const;
