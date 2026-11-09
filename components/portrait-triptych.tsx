import { assets } from "@/content/assets";
export function PortraitTriptych() {
  const panels = [
    {
      id: "left",
      mask: [0, 273, 104, 377, 52],
      image: [0, 257.92, 305.37, 407.16],
    },
    {
      id: "center",
      mask: [124, 58, 377, 592, 72],
      image: [65.5, 31.5, 479.52, 639.36],
    },
    {
      id: "right",
      mask: [526, 175, 124, 475, 62],
      image: [240, 118, 410, 546.67],
    },
  ];
  return (
    <figure className="portrait-triptych">
      <link
        rel="preload"
        as="image"
        href={assets.portrait.derivatives[2].webp}
        fetchPriority="high"
      />
      <svg
        className="portrait-triptych__stage"
        viewBox="0 0 650 650"
        role="img"
        aria-label={assets.portrait.alt}
      >
        <defs>
          {panels.map((p) => (
            <clipPath key={p.id} id={`portrait-${p.id}`}>
              <rect
                x={p.mask[0]}
                y={p.mask[1]}
                width={p.mask[2]}
                height={p.mask[3]}
                rx={p.mask[4]}
              />
            </clipPath>
          ))}
        </defs>
        {panels.map((p) => (
          <image
            key={p.id}
            clipPath={`url(#portrait-${p.id})`}
            x={p.image[0]}
            y={p.image[1]}
            width={p.image[2]}
            height={p.image[3]}
            href={assets.portrait.derivatives[2].webp}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          />
        ))}
      </svg>
    </figure>
  );
}
