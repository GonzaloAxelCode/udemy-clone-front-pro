const PeopleIcon = ({ scale = "1", ...args }: { scale?: string }) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className="ud-icon ud-icon-xsmall ud-icon-color-neutral"
      width={24}
      height={24}
      style={{
        scale,
      }}
      {...args}
    >
      <defs>
        <symbol id="icon-people" viewBox="0 0 24 24">
          <path d="M16 10c1.66 0 2.99-1.34 2.99-3S17.66 4 16 4c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 4 8 4C6.34 4 5 5.34 5 7s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-4.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h6v-4.5c0-2.33-4.67-3.5-7-3.5z" />
        </symbol>
      </defs>
      <g fill="#2D2F31">
        <path d="M16 10c1.66 0 2.99-1.34 2.99-3S17.66 4 16 4c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 4 8 4C6.34 4 5 5.34 5 7s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-4.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h6v-4.5c0-2.33-4.67-3.5-7-3.5z" />
      </g>
    </svg>
  );
};

export default PeopleIcon;
