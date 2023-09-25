const PointIcon = ({ scale = "1", ...args }: { scale?: string }) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className="ud-icon ud-icon-xsmall ud-icon-color-subdued review-title--bullet-separation--1h6Oq"
      width={24}
      height={24}
      style={{
        scale,
      }}
      {...args}
    >
      <defs>
        <symbol id="icon-bullet" viewBox="0 0 24 24">
          <path d="M17 12a5 5 0 11-10.001-.001A5 5 0 0117 12z" />
        </symbol>
      </defs>
      <g fill="#6A6F73">
        <path d="M17 12a5 5 0 11-10.001-.001A5 5 0 0117 12z" />
      </g>
    </svg>
  );
};

export default PointIcon;
