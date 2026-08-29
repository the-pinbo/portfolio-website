import { LinkedArtifact } from "@/components/linked-artifact";
import { links } from "@/content/links";

export function FractalPrecisionPlate() {
  return (
    <figure className="fractal-precision-plate">
      <div className="fractal-precision-plate__panels">
        <div>
          <img alt="Double-precision fractal reference" src="/assets/fractal-double.png" />
          <span>double</span>
        </div>
        <div>
          <img alt="Conventional float fractal result" src="/assets/fractal-float.png" />
          <span>float</span>
          <small>SSIM 0.476 · MSE 0.087</small>
        </div>
        <div>
          <img alt="Posit32 fractal result" src="/assets/fractal-posit32.png" />
          <span>posit32</span>
          <small>SSIM 0.605 · MSE 0.053</small>
        </div>
      </div>
      <figcaption>
        <span>Representative fractal result from a broader benchmark suite.</span>
        <LinkedArtifact label="Code" href={links.softpositCode} context="SoftPosit contribution history" />
        <LinkedArtifact label="Certificate" href={links.linuxFoundationBadge} context="Linux Foundation mentorship badge" />
        <LinkedArtifact label="Paper" href={links.congaPaper} context="CoNGA proceedings" />
      </figcaption>
    </figure>
  );
}
