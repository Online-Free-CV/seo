export const clamp = (s = "", max = 160) =>
  s.length > max ? s.slice(0, max - 1) + "…" : s;
export const clean = (s = "") => s.replace(/\s+/g, " ").trim();
