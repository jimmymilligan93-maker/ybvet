interface PawPrintProps {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
  variant?: "primary" | "white" | "gold";
}

export default function PawPrint({ className = "", size = 120, style, variant = "primary" }: PawPrintProps) {
  const cls = variant === "white" ? "paw-white" : variant === "gold" ? "paw-gold" : "paw-watermark";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`${cls} ${className}`}
      style={style}
      aria-hidden="true"
    >
      {/* main pad */}
      <ellipse cx="50" cy="67" rx="26" ry="20" />
      {/* toe pads */}
      <ellipse cx="27" cy="43" rx="10" ry="13" transform="rotate(-20 27 43)" />
      <ellipse cx="42" cy="33" rx="9"  ry="12" transform="rotate(-5  42 33)" />
      <ellipse cx="58" cy="33" rx="9"  ry="12" transform="rotate(5   58 33)" />
      <ellipse cx="73" cy="43" rx="10" ry="13" transform="rotate(20  73 43)" />
    </svg>
  );
}
