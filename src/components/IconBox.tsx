import React from "react";

type Props = {
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const IconBox = (props: Props) => {
  const { icon, className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {icon}
    </div>
  );
};

export default IconBox;
