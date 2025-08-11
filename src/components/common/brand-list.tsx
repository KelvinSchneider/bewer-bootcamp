"use client";

import Image from "next/image";

interface BrandListProps {
  title: string;
}

const BrandList = ({ title }: BrandListProps) => {
  const brands = [
    { name: "Nike", image: "/Nike.png" },
    { name: "Adidas", image: "/Adidas.png" },
    { name: "Puma", image: "/Puma.png" },
    { name: "New Balance", image: "/NB.png" },
  ];

  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">{title}</h3>
      <div className="flex w-full gap-8 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="flex flex-col items-center gap-4 min-w-0"
          >
            <div className="border border-gray-200 rounded-xl w-20 h-20 p-6 flex items-center justify-center ">
              <Image
                src={brand.image}
                alt={brand.name}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900 truncate">
                {brand.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandList;
