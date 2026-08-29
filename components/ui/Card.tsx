export function Card({
  icon,
  iconBg,
  title,
  children,
  className,
}: {
  icon?: string;
  iconBg?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`card${className ? ` ${className}` : ""}`}>
      {icon && (
        <div className="card-icon" style={{ background: iconBg ?? "#eff6ff" }}>
          {icon}
        </div>
      )}
      {title && <h3>{title}</h3>}
      <p>{children}</p>
    </div>
  );
}
