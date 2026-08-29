export function Hero({
  eyebrow,
  title,
  text,
  message,
}: {
  eyebrow: string;
  title: string;
  text: string;
  message?: React.ReactNode;
}) {
  return (
    <div className="executive-hero">
      <div className="hero-content">
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          {eyebrow}
        </div>
        <h1>{title}</h1>
        <p className="hero-text">{text}</p>
        {message && (
          <div className="hero-message">
            <b>{message}</b>
          </div>
        )}
      </div>
    </div>
  );
}
