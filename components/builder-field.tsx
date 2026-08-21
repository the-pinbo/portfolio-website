import { engineeringLoop } from "@/content/portfolio";

export function BuilderField() {
  return (
    <ol className="engineering-loop">
      {engineeringLoop.map((item) => (
        <li key={item.verb}>
          <h3>{item.verb}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
