import Link from "next/link";

const CategoryDropDown = () => {
  return (
    <>
      <Link className="pr-4 pl-4  ml-auto text-sm text-gray-400" href="#">
        Categories
      </Link>
      <div className="hidden">CategoryDropDown</div>
    </>
  );
};

export default CategoryDropDown;
