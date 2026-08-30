type LinkedArtifactProps = {
  label: string;
  href: string;
  context?: string;
};

export function LinkedArtifact({ label, href, context }: LinkedArtifactProps) {
  const external = href.startsWith("http://") || href.startsWith("https://");
  return (
    <a
      className="linked-artifact"
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      <span aria-hidden="true">↗</span>
      <span>{label}</span>
      {context ? <span className="sr-only"> {context}</span> : null}
      {external ? <span className="sr-only"> opens in a new tab</span> : null}
    </a>
  );
}
