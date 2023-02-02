interface Props {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function PrimaryButton({ children, className, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={
        "rounded bg-primary-accent px-5 py-2 hover:bg-primary-500" +
        " " +
        className
      }
    >
      {children}
    </button>
  );
}
