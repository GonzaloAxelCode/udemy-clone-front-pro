const ArrowDownIcon = ({ scale = "0.8", fill = "", ...args }:any) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Show lecture description"
      role="img"
      focusable="false"
      className="ud-icon ud-icon-small ud-icon-color-neutral"
      width={24}
      height={24}
      style={{
        scale,
      }}
      {...args}
    >
      <defs>
        <symbol id="icon-expand" viewBox="0 0 24 24">
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
        </symbol>
      </defs>
      <g fill={fill}>
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
      </g>
    </svg>
  );
};

export default ArrowDownIcon;
