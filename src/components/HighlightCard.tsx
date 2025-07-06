import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

const HighlightCard = (props: Props) => {
  const { icon, subtitle, title } = props;
  return (
    <div className="flex items-center gap-4">
      <div className="min-h-[3.75rem] min-w-[3.75rem] flex items-center justify-center border border-solid border-[#e6e6e6] rounded-md">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-base text-[#222222] mb-1.5">{title}</h3>
        <h6 className="text-sm text-[#696969]">{subtitle}</h6>
      </div>
    </div>
  );
};

export default HighlightCard;
