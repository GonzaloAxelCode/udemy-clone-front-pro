const TrashIcon = ({ scale = "1", ...args }: { scale?: string }) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Delete"
      role="img"
      focusable="false"
      className="ud-icon ud-icon-medium"
      width={24}
      height={24}
      style={{
        scale,
      }}
      {...args}
    >
      <defs>
        <symbol id="icon-delete" viewBox="0 0 24 24">
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
        </symbol>
      </defs>
      <g fill="#2D2F31">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
      </g>
    </svg>
  );
};

export default TrashIcon;
