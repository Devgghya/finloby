interface TextShimmerProps {
  children: string;
  className?: string;
}

export const TextShimmer = ({
  children,
  className = '',
}: TextShimmerProps) => {
  return (
    <span
      className={`inline-block bg-[linear-gradient(110deg,#EACE6E,45%,#FFFFFF,50%,#D4AF37,55%,#EACE6E)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer ${className}`}
    >
      {children}
    </span>
  );
};
