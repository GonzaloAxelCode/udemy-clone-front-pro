const VideoIcon = ({
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
        <symbol id="icon-video" viewBox="0 0 24 24">
          <path d="M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 002 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 00-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7l7 4z" />
        </symbol>
      </defs>
      <g fill={color}>
        <path d="M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 002 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 00-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7l7 4z" />
      </g>
    </svg>
  );
};

export default VideoIcon;
