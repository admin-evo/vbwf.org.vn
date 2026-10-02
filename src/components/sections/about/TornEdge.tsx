import { CSSProperties } from "react";

const IMAGE_DIR = "/assets/images/about";

// Nền giấy dùng chung cho các section sáng và mép giấy xé
export const paperSurface: CSSProperties = {
  backgroundColor: "#FFFFFF",
  backgroundImage: `linear-gradient(rgba(255,255,255,.76),rgba(255,255,255,.76)),url("${IMAGE_DIR}/paper-texture.svg")`,
  backgroundSize: "auto, 256px 256px",
};

const masks = {
  up: "torn-up-mask.svg",
  down: "torn-down-mask.svg",
  tint: "torn-down-tint-mask.svg",
};

type Props = {
  direction: keyof typeof masks;
};

// Mép giấy xé ở đầu (down/tint) hoặc cuối (up) các băng ảnh
const TornEdge = ({ direction }: Props) => {
  const mask = `url("${IMAGE_DIR}/${masks[direction]}")`;

  return (
    <span
      aria-hidden="true"
      className={`absolute -left-px -right-px z-[4] h-[clamp(22px,3.4vw,52px)] pointer-events-none ${
        direction === "up" ? "-bottom-px" : "-top-px"
      }`}
      style={{
        ...paperSurface,
        backgroundRepeat: "repeat",
        maskImage: mask,
        WebkitMaskImage: mask,
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
      }}
    />
  );
};

export default TornEdge;
