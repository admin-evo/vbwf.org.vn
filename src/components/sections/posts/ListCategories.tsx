"use client";
import React from "react";

const categories = [
  { id: null, title: "Tất cả" },
  { id: 1, title: "Tin tức" },
  { id: 2, title: "Cơ hội" },
  { id: 3, title: "Sự kiện" },
  { id: 4, title: "Tài liệu" },
];

type Props = {
  onChange: (id: number | null) => void;
};

const ListCategories = (props: Props) => {
  const { onChange } = props;
  const [selectedCategory, setSelectedCategory] = React.useState(
    categories?.[0]
  );

  React.useEffect(() => {
    onChange(selectedCategory?.id);
  }, [onChange, selectedCategory]);

  return (
    <div className="flex flex-row gap-4 py-6">
      {categories.map((item) => (
        <div
          key={item.id}
          onClick={() => setSelectedCategory(item)}
          className={`px-3 py-2 rounded-md bg-white text-black border border-[#AEAEB2] cursor-pointer hover:bg-[rgba(255,159,44,0.9)] hover:text-white hover:shadow-2xl ${
            selectedCategory?.id === item.id && "!bg-[#FF9F2C] !text-white"
          }`}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default ListCategories;
