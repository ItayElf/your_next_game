interface Props {
  value: string;
  setValue: (value: string) => void;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  id?: string;
  required?: boolean;
}

export default function TextField({
  value,
  setValue,
  type,
  placeholder,
  id,
  required = false,
}: Props) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      className="block w-full rounded-xl border border-white/25 bg-surface-dp2 p-2 text-white placeholder:text-white/50 focus:border-white/50 focus:bg-surface-dp8 focus:outline-1"
      required={required}
    />
  );
}
