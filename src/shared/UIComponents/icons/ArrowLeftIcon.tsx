import { cn } from "tailwind-cn";

const ArrowLeftIcon = ({ className = "", scale = "0.67", ...args }) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={cn(
        "ud-icon ud-icon-xsmall ud-block-list-item-icon",
        className
      )}
      width={24}
      style={{
        scale,
      }}
      height={24}
      {...args}
    >
      <defs>
        <symbol id="icon-next" viewBox="0 0 24 24">
          <path d="M8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6-6-6-1.41 1.41z" />
        </symbol>
      </defs>
      <g fill="#2D2F31">
        <path d="M8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6-6-6-1.41 1.41z" />
      </g>
    </svg>
  );
};

export default ArrowLeftIcon;
