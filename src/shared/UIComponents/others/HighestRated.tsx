const HighestRated = ({ text = "Highest Rated" }: { text?: string }) => {
  return (
    <div
      style={{
        padding: "0.22rem 0.4rem",
        whiteSpace: "nowrap",

        fontWeight: 700,
        lineHeight: "1.2",
        letterSpacing: "-.02rem",
      }}
      className="text-xs text-orange-500 bg-yellow-200"
    >
      {text}
    </div>
  );
};

export default HighestRated;
