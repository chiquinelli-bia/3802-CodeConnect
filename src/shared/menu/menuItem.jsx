import { Link } from "react-router-dom";

export default function MenuItem({
  title,
  disabled = false,
  href,
  to,
  onClick,
  label,
  src,
}) {
  const targetPath = to || href;

  if (disabled) {
    return (
      <li title={title}>
        <span
          className="disabled"
          aria-disabled="true"
          aria-label={`${label} — funcionalidade em desenvolvimento`}
        >
          <img src={src} alt={label} />
          {label}
        </span>
      </li>
    );
  }

  // 2. Ação de clique (ex: Logout)
  if (onClick) {
    return (
      <li title={title}>
        <button
          type="button"
          onClick={onClick}
          className="menu-item-btn"
          aria-label={label}
        >
          <img src={src} alt={label} />
          {label}
        </button>
      </li>
    );
  }

  return (
    <li title={title}>
      <Link to={targetPath || "#"} aria-label={label}>
        <img src={src} alt={label} />
        {label}
      </Link>
    </li>
  );
}
