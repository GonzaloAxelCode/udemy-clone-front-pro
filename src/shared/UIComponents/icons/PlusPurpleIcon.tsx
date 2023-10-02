
const PlusPurpleIcon = ({ scale = "1", ...args }: { scale?: string }) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className="ud-icon ud-icon-medium"
      width={24}
      style={{
        scale,
      }}
      {...args}
      height={24}
    >
      <defs>
        <symbol id="icon-expand-plus" viewBox="0 0 24 24">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </symbol>
      </defs>
      <g fill="#5624D0">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </g>
    </svg>
  );
};

export default PlusPurpleIcon;
