const Logo = ({ scale = "1" }: any) => {
  return (
    <img
      style={{
        scale,
      }}
      width={91}
      height={34}
      alt="logo"
      src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
    />
  );
};

export default Logo;
