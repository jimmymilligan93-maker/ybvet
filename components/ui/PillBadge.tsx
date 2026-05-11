interface PillBadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "dark" | "white";
}

export default function PillBadge({ children, variant = "primary" }: PillBadgeProps) {
  const cls =
    variant === "dark"  ? "pill-badge pill-badge-dark"  :
    variant === "white" ? "pill-badge pill-badge-white" :
    "pill-badge";

  return (
    <span className={cls}>
      <svg width="11" height="11" viewBox="0 0 100 100" aria-hidden="true" fill="currentColor">
        <ellipse cx="50" cy="67" rx="26" ry="20" />
        <ellipse cx="27" cy="43" rx="10" ry="13" transform="rotate(-20 27 43)" />
        <ellipse cx="42" cy="33" rx="9"  ry="12" transform="rotate(-5  42 33)" />
        <ellipse cx="58" cy="33" rx="9"  ry="12" transform="rotate(5   58 33)" />
        <ellipse cx="73" cy="43" rx="10" ry="13" transform="rotate(20  73 43)" />
      </svg>
      {children}
    </span>
  );
}
