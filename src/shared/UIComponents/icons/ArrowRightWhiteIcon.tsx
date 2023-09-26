const ArrowRightWhiteIcon = ({
  scale = "1",
  ...args
}: {
  scale?: string;
}) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Next"
      role="img"
      focusable="false"
      className="ud-icon ud-icon-large"
      width={24}
      height={24}
      style={{
        scale,
      }}
      {...args}
    >
      <defs>
        <symbol id="icon-next" viewBox="0 0 24 24">
          <path d="M8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6-6-6-1.41 1.41z" />
        </symbol>
      </defs>
      <g fill="#FFFFFF">
        <path d="M8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6-6-6-1.41 1.41z" />
      </g>
    </svg>
  );
};

export default ArrowRightWhiteIcon;
