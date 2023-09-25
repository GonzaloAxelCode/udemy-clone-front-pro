const StarIcon = ({ scale = "1", ...args }: { scale?: string }) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      width={16}
      height={16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        scale,
      }}
      {...args}
    >
      <defs>
        <symbol id="icon-rating-star" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
        </symbol>
        <symbol id="icon-rating-star" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
        </symbol>
      </defs>
      <mask
        id="u185-star-rating-mask--26"
        data-purpose="star-rating-mask"
        fill="none"
      >
        <rect x={0} y={0} width="100%" height="100%" fill="#FFFFFF" />
      </mask>
      <g
        className="star-rating-module--star-filled--3CnHc"
        mask="url(#u185-star-rating-mask--26)"
        data-purpose="star-filled"
        fill="#F69C08"
      >
        <g fill="#F69C08">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
        </g>
      </g>
      <g
        fill="#000000"
        className="star-rating-module--star-bordered--3WG_2"
        strokeWidth="2px"
        data-purpose="star-bordered"
        stroke="#F69C08"
        fillOpacity={0}
      >
        <g stroke="#F69C08" strokeWidth="2px" fillOpacity={0}>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
        </g>
      </g>
    </svg>
  );
};

export default StarIcon;
