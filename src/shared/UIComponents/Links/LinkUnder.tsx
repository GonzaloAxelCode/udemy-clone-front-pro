import Link from "next/link";
import styled from "styled-components";

const LinkWrapper = styled(Link)`
  text-decoration: underline;
  text-underline-offset: 0.25rem;
`;

const LinkUnder = ({
  href = "#",
  children,
  ...args
}: {
  children?: string;
  href?: string;
}) => {
  return (
    <LinkWrapper
      className="flex mx-1 flex-grow  flex-col items-center text-sm text-dark font-bold"
      href={href}
      {...args}
    >
      {children}
    </LinkWrapper>
  );
};

export default LinkUnder;
