export default function MenuItem({
  title,
  disabled = false,
  href,
  label,
  src,
}) {
  return (
    <li title={title}>
      <a
        href={disabled ? "#" : href}
        aria-disabled={disabled}
        aria-label={disabled ? " — funcionalidade em desenvolvimento" : label}
        className={disabled ? "disabled" : ""}
      >
        <img src={src} />
        {label}
      </a>
    </li>
  );
}
