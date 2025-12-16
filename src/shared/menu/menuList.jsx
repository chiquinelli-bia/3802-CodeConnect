import MenuItem from "./menuItem.jsx";
export default function MenuList({ items }) {
  return (
    <ul className="lista-links">
      {items.map((item) => (
        <MenuItem key={item.label} {...item} />
      ))}
    </ul>
  );
}
