const Logo = ({
  scale = "1",
  white = false,
  ...args
}: {
  scale?: string;
  white?: boolean;
}) => {
  if (white) {
    return (
      <img
        style={{
          scale,
        }}
        width={91}
        height={34}
        alt="logo"
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
        {...args}
      />
    );
  } else {
    return (
      <img
        style={{
          scale,
        }}
        width={91}
        height={34}
        alt="logo"
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
        {...args}
      />
    );
  }
};

export default Logo;
