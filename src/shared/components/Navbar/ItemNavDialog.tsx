import Link from "next/link";
import { useState } from "react";
import { cn } from "tailwind-cn";

const ItemNavDialog = ({ text, children, extraClassNames = "" }: any) => {
  const [showDialog, setShowDialog] = useState(false);

  const handleMouseEnter = () => {
    setShowDialog(true);
  };

  const handleMouseLeave = () => {
    setShowDialog(false);
  };

  return (
    <div className="relative" >
      <Link
        href="#"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "m-auto flex text-sm text-gray-400 pr-3 pl-4 hidden lg:block",
          extraClassNames
        )}
      >
        {text}
      </Link>

      {showDialog && (
        <div
          className="cursor-default"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default ItemNavDialog;
