export function BoardMessage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="board-message">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
