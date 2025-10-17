export default function MenuItem({
  title,
  disabled = false,
  href,
  label,
  srcImagem,
}) {
  return (
    <li title={title}>
      <a
        href={disabled ? "#" : href}
        aria-disabled={disabled}
        aria-label={disabled ? " — funcionalidade em desenvolvimento" : label}
        class={disabled ? "disabled" : ""}
      >
        <img src={srcImagem} />
        {label}
      </a>
    </li>
  );
}
