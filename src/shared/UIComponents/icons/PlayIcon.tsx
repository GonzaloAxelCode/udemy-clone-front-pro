const PlayIcon = ({
  scale = "1",
  color = "#FFFFFF",
  ...args
}: {
  color: string;
  scale?: string;
}) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className="ud-icon ud-icon-xxlarge ud-focus-visible-target"
      width={24}
      height={24}
      style={{
        scale,
      }}
      {...args}
    >
      <defs>
        <symbol id="icon-play-overlay" viewBox="0 0 24 24">
          <circle cy={12} cx={12} fill="#1e1e1c" r={10} />
          <path d="M0 12A12 12 0 1012 0 12 12 0 000 12zm18 .137L8.4 16.8V7.2l9.6 4.937z" />
        </symbol>
      </defs>
      <g fill={color}>
        <circle cy={12} cx={12} fill="#1e1e1c" r={10} />
        <path d="M0 12A12 12 0 1012 0 12 12 0 000 12zm18 .137L8.4 16.8V7.2l9.6 4.937z" />
      </g>
    </svg>
  );
};

export default PlayIcon;
