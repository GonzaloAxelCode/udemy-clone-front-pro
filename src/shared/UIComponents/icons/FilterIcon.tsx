const FilterIcon = ({ scale, ...args }: any) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className="ud-icon ud-icon-small"
      width={24}
      height={24}
      style={{ scale }}
      {...args}
    >
      <defs>
        <symbol id="icon-filter" viewBox="0 0 24 24">
          <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
        </symbol>
      </defs>
      <g fill="#2D2F31">
        <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
      </g>
    </svg>
  );
};

export default FilterIcon;
