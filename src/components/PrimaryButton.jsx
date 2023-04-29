export default function PrimaryButton({
  // type = "submit",
  type = "",
  className = "",
  processing,
  children,
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={processing}
    >
      {children}
    </button>
  );
}
