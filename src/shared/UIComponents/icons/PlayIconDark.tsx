const PlayIconDark = ({
  scale = "1",
  color = "#2D2F31",
  ...args
}: {
  color?: string;
  scale?: string;
}) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className="ud-icon ud-icon-xsmall ud-icon-color-neutral ud-block-list-item-icon"
      width={24}
      height={24}
      style={{
        scale,
      }}
      {...args}
    >
      <defs>
        <symbol id="icon-play" viewBox="0 0 24 24">
          <path d="M2 12c0 5.525 4.475 10 10 10s10-4.475 10-10S17.525 2 12 2 2 6.475 2 12zm15 .114L9 16V8l8 4.114z" />
        </symbol>
      </defs>
      <g fill={color}>
        <path d="M2 12c0 5.525 4.475 10 10 10s10-4.475 10-10S17.525 2 12 2 2 6.475 2 12zm15 .114L9 16V8l8 4.114z" />
      </g>
    </svg>
  );
};

export default PlayIconDark;
