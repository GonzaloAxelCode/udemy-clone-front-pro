import Link from "next/link";

const LinkOffset = ({ text, href = "#", ...args }: any) => {
  return (
    <Link
      className=" mx-1 text-linkpurple underline underline-offset-4"
      href={href}
      {...args}
    >
      {text}
    </Link>
  );
};

export default LinkOffset;
