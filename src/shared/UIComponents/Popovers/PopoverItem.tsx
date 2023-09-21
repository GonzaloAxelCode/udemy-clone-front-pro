import Link from "next/link";

const PopoverItem = ({ text }: any) => {
  return (
    <>
      <Link className="pl-3 pr-3 text-sm ml-auto " href="#">
        {text}
      </Link>
      <div className="hidden">CategoryDropDown</div>
    </>
  );
};

export default PopoverItem;
