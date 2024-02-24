export const colorFromSRM = (srm: number): string => {
  const roundedSrm = Math.round(srm);
  const clampedSrm = Math.min(40, Math.max(1, roundedSrm));

  const color = colors[clampedSrm - 1];
  return color;
}

export const colorFromEBC = (ebc: number): string => {
  const srm = ebc * 0.5076;
  return colorFromSRM(srm);
}

export const getSRMGradient = (): string => {
  const stepCount = colors.length;
  const gradient = colors.map((color, index) => {
    return `${color} ${index / stepCount * 100}%`;
  }).join(', ');

  return `linear-gradient(to right, ${gradient})`;
}

const colors: string[] = [
  "#FFE699",
  "#FFD878",
  "#FFCA5A",
  "#FFBF42",
  "#FBB123",
  "#F8A600",
  "#F39C00",
  "#EA8F00",
  "#E58500",
  "#DE7C00",
  "#D77200",
  "#CF6900",
  "#CB6200",
  "#C35900",
  "#BB5100",
  "#B54C00",
  "#B04500",
  "#A63E00",
  "#A13700",
  "#9B3200",
  "#952D00",
  "#8E2900",
  "#882300",
  "#821E00",
  "#7B1A00",
  "#771900",
  "#701400",
  "#6A0E00",
  "#660D00",
  "#5E0B00",
  "#5A0A02",
  "#560A05",
  "#520907",
  "#4C0505",
  "#470606",
  "#440607",
  "#3F0708",
  "#3B0607",
  "#3A070B",
  "#36080A"
];