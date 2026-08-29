type LinkedArtifactProps = {
  label: string;
  href: string;
  context?: string;
};

export function LinkedArtifact({ label, href, context }: LinkedArtifactProps) {
  const external = href.startsWith("http://") || href.startsWith("https://");
  const accessibleName = [label, context].filter(Boolean).join(" ");

  return (
    <a
      className="linked-artifact"
      href={href}
      aria-label={accessibleName || label}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      <span aria-hidden="true">↗</span>
      <span>{label}</span>
      {external ? <span className="sr-only"> opens in a new tab</span> : null}
    </a>
  );
}
