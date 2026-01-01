import "./skeleton.css";

interface SkeletonProps {
  variant?: "text" | "title" | "circle" | "rect";
  width?: string | number;
  height?: string | number;
  className?: string;
}

export default function Skeleton({
  variant = "text",
  width,
  height,
  className = "",
}: SkeletonProps) {
  const styles = {
    width: width,
    height: height,
  };

  return (
    <div
      className={`skeleton skeleton-${variant} ${className}`}
      style={styles}
      aria-hidden="true"
    />
  );
}
