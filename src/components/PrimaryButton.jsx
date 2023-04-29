export default function PrimaryButton({
  // type = "submit",
  type = "",
  className = "",
  processing,
  children,
  onClick,
  gsap,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={processing}
      ref={gsap}
    >
      {children}
    </button>
  );
}
