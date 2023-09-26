const ArrowLeftWhiteIcon = ({ scale = "1", ...args }) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Previous"
      role="img"
      focusable="false"
      width={32}
      height={32}
      style={{
        scale,
      }}
      {...args}
    >
      <defs>
        <symbol id="icon-previous" viewBox="0 0 24 24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
        </symbol>
      </defs>
      <g fill="#FFFFFF">
        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
      </g>
    </svg>
  );
};

export default ArrowLeftWhiteIcon;
