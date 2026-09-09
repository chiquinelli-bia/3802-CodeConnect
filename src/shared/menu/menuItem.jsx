import { Link } from "react-router-dom";

export default function MenuItem({
  title,
  disabled = false,
  href,
  to,
  label,
  src,
}) {
  const targetPath = to || href || "#";

  return (
    <li title={title}>
      {disabled ? (
        <Link
          className="disabled"
          aria-disabled="true"
          aria-label={`${label} — funcionalidade em desenvolvimento`}
        >
          <img src={src} alt={label} />
          {label}
        </Link>
      ) : (
        <Link to={targetPath} aria-label={label}>
          <img src={src} alt={label} />
          {label}
        </Link>
      )}
    </li>
  );
}
