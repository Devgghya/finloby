interface TextShimmerProps {
  children: string;
  className?: string;
  variant?: 'gold' | 'white';
}

export const TextShimmer = ({
  children,
  className = '',
  variant = 'gold',
}: TextShimmerProps) => {
  const gradient = variant === 'white'
    ? 'bg-[linear-gradient(110deg,#FFFFFF,40%,#EACE6E,50%,#D4AF37,60%,#FFFFFF)]'
    : 'bg-[linear-gradient(110deg,#EACE6E,45%,#FFFFFF,50%,#D4AF37,55%,#EACE6E)]';

  return (
    <span
      className={`inline-block ${gradient} bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer ${className}`}
    >
      {children}
    </span>
  );
};
