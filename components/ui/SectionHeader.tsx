export function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-header">
      <div className="label">{label}</div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
