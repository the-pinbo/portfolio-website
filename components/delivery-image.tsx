import type { DeliveryAsset } from "@/content/assets";

type DeliveryImageProps = {
  asset: DeliveryAsset;
  className?: string;
  decorative?: boolean;
};

export function DeliveryImage({ asset, className, decorative = false }: DeliveryImageProps) {
  const avif = asset.derivatives.map((item) => `${item.avif} ${item.width}w`).join(", ");
  const webp = asset.derivatives.map((item) => `${item.webp} ${item.width}w`).join(", ");

  return (
    <span
      className="delivery-image"
      data-asset-role={asset.role}
      aria-label={decorative ? undefined : asset.alt}
      role={decorative ? undefined : "img"}
      style={{ aspectRatio: asset.intrinsic.ratio }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- governed responsive delivery supplies intrinsic metadata and verified derivatives */}
      <img
        alt=""
        aria-hidden="true"
        className="delivery-image__fallback"
        data-delivery-fallback
        height={asset.intrinsic.height}
        src={asset.fallback.src}
        width={asset.intrinsic.width}
      />
      <picture>
        <source sizes={asset.sizes} srcSet={avif} type="image/avif" />
        <source sizes={asset.sizes} srcSet={webp} type="image/webp" />
        <img
          alt=""
          className={className}
          data-delivery-primary
          decoding="async"
          fetchPriority={asset.priority}
          height={asset.intrinsic.height}
          loading={asset.loading}
          sizes={asset.sizes}
          src={asset.derivatives[0].webp}
          width={asset.intrinsic.width}
        />
      </picture>
    </span>
  );
}
