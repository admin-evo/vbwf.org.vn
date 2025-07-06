import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  size?: string | number;
  className?: string;
  onClick?: () => void;
};

const ImageBox = (props: Props) => {
  const { alt, height, size, src, width, className, onClick } = props;

  const styles = React.useMemo(() => {
    if (size) {
      return {
        width: size,
        height: size,
      };
    }
    return {
      width,
      height,
    };
  }, [width, height, size]);

  return (
    <div className={`relative ${className}`} style={styles} onClick={onClick}>
      <Image src={src} alt={alt} fill className="object-contain" />
    </div>
  );
};

export default ImageBox;
