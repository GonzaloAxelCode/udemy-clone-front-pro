import ArrowLeftIcon from "@/shared/UIComponents/icons/ArrowLeftIcon";
import Link from "next/link";
import { useState } from "react";
interface ISubsubcategoria {
  text: string;
}

interface ISubcategoria {
  text: string;
  subsubcategorias?: ISubsubcategoria[];
}

import categorias from "./_data_categories";
interface ICategoria {
  text: string;
  subcategorias?: ISubcategoria[];
}
const MenuCategories = () => {
  const [hoverCategory, setHoverCategory] = useState<any>(null);
  const [hoverSubCategory, setHoverSubCategory] = useState<any>(null);

  return (
    <div className="w-full">
      <div className="flex w-full">
        <ul className="w-[230px] p-5">
          {categorias.map((el, index) => (
            <li key={index} onMouseEnter={() => setHoverCategory(el)}>
              <Link
                className="flex justify-between py-1 text-gray-400 hover:text-purple-300"
                href={`/topic/${el.text}`}
              >
                <span className="text-sm ">{el.text}</span>
                <span>
                  <ArrowLeftIcon />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {hoverCategory && hoverCategory.subcategorias && (
          <ul
            className="w-[230px] p-5"
            style={{ borderLeft: "1px solid #d1d7dc" }}
          >
            {hoverCategory &&
              hoverCategory.subcategorias &&
              hoverCategory.subcategorias.map(
                (subCategoria: any, index: number) => (
                  <li
                    key={index}
                    className=""
                    onMouseEnter={() => setHoverSubCategory(subCategoria)}
                  >
                    <Link
                      className="flex justify-between py-1 text-gray-400 hover:text-purple-300"
                      href={`/topic/${subCategoria.text}`}
                    >
                      <span className="text-sm ">{subCategoria.text}</span>
                      <span>
                        <ArrowLeftIcon />
                      </span>
                    </Link>
                  </li>
                )
              )}
          </ul>
        )}
        {hoverSubCategory && hoverSubCategory.subsubcategorias && (
          <ul
            className="w-[230px] p-5"
            style={{ borderLeft: "1px solid #d1d7dc" }}
          >
            {hoverSubCategory &&
              hoverSubCategory.subsubcategorias &&
              hoverSubCategory.subsubcategorias.map(
                (subSubCategoria: any, index: number) => (
                  <li key={index}>
                    <Link
                      className="flex justify-between py-1 text-gray-400 hover:text-purple-300"
                      href={`/topic/${subSubCategoria.text}`}
                    >
                      <span className="text-sm ">{subSubCategoria.text}</span>
                      <span>
                        <ArrowLeftIcon />
                      </span>
                    </Link>
                  </li>
                )
              )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MenuCategories;
