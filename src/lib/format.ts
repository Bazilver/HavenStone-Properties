export function formatNaira(value:number) {
  return new Intl.NumberFormat('en-NG', { style:'currency', currency:'NGN', maximumFractionDigits:0 }).format(value);
}
export function formatCompactNaira(value:number) {
  if (value >= 1_000_000) return `₦${(value/1_000_000).toFixed(value % 1_000_000 ? 1 : 0)}m`;
  if (value >= 1_000) return `₦${Math.round(value/1_000)}k`;
  return `₦${value}`;
}
