const DocumentIcon = ({ scale = "1", ...args }: { scale?: string }) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      data-purpose="section-icon"
      className="ud-icon ud-icon-xsmall ud-icon-color-neutral item-bar--icon--1R2Ix"
      width={24}
      height={24}
      style={{
        scale,
      }}
      {...args}
    >
      <defs>
        <symbol id="icon-article" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
        </symbol>
      </defs>
      <g fill="#2D2F31">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
      </g>
    </svg>
  );
};

export default DocumentIcon;
