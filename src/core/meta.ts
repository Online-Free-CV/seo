import { clamp, clean } from "./clamp";

export const buildTitle = ({
  primary,
  secondary,
  brand = "OnlineFreeCV",
  max = 60
}: { primary?: string; secondary?: string; brand?: string; max?: number }) => {
  const mid = [primary, secondary].filter(Boolean).join(" – ");
  const base = mid || primary || secondary || brand;
  return clamp(clean(`${base} | ${brand}`), max);
};

export const buildDescription = (s = "", max = 160) =>
  clamp(clean(s), max);

export const buildKeywords = (list: string[]) =>
  Array.from(new Set(list.filter(Boolean).map(clean))).join(", ");
