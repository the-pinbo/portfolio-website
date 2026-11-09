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
      className={variant ? `action-link action-link--${variant}` : "linked-artifact"}
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {!variant ? <span aria-hidden="true">↗</span> : null}
      <span>{label}</span>
      {variant ? <span aria-hidden="true">{href.startsWith("#") ? "→" : "↗"}</span> : null}
      {context ? <span className="sr-only"> {context}</span> : null}
      {external ? <span className="sr-only"> opens in a new tab</span> : null}
    </a>
  );
}
