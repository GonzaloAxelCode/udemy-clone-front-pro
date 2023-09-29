const TeacherIcon = ({ scale = "1", ...args }: { scale?: string }) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className="ud-icon ud-icon-xlarge ud-icon-color-neutral"
      width={24}
      height={24}style={{
        scale,
      }}
      {...args}
    >
      <defs>
        <symbol id="icon-teach" viewBox="0 0 24 24">
          <path d="M20 17a2 2 0 002-2V4a2 2 0 00-2-2H9.46c.35.61.54 1.3.54 2h10v11h-9v2h9zM15 7v2H9v13H7v-6H5v6H3v-8H1.5V9a2 2 0 012-2H15zM8 4a2 2 0 11-4 0 2 2 0 014 0z" />
        </symbol>
      </defs>
      <g fill="#2D2F31">
        <path d="M20 17a2 2 0 002-2V4a2 2 0 00-2-2H9.46c.35.61.54 1.3.54 2h10v11h-9v2h9zM15 7v2H9v13H7v-6H5v6H3v-8H1.5V9a2 2 0 012-2H15zM8 4a2 2 0 11-4 0 2 2 0 014 0z" />
      </g>
    </svg>
  );
};

export default TeacherIcon;
