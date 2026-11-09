type LinkedArtifactProps = {
  label: string;
  href: string;
  context?: string;
  variant?: "primary" | "secondary";
};

export function LinkedArtifact({ label, href, context, variant }: LinkedArtifactProps) {
  const external = href.startsWith("http://") || href.startsWith("https://");
  return (
    <a
      className={`linked-artifact action-link action-link--${variant ?? "secondary"}`}
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      <span>{label}</span>
      <span aria-hidden="true">{external ? "↗" : "→"}</span>
      {context ? <span className="sr-only"> {context}</span> : null}
      {external ? <span className="sr-only"> opens in a new tab</span> : null}
    </a>
  );
}
