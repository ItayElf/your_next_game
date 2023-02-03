interface Props {
  className?: string;
}

export default function Loading({ className }: Props) {
  return (
    <div
      className={`h-24 w-24 animate-spin rounded-full border-8 border-solid border-primary-accent text-primary-accent [border-top-color:transparent] ${className}`}
    />
  );
}
