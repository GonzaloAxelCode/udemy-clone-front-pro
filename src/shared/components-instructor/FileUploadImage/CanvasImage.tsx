const CanvasImage = ({
  hidden = false,
  previewCanvasRef,
  height,
  width = "100%",
}: any) => {
  if (hidden) {
    return <></>;
  }
  return (
    <canvas
      ref={previewCanvasRef}
      style={{
        display: hidden ? "none" : "block",
        objectFit: "contain",
        width: 0,
        height: 0,
        maxHeight: 0,
      }}
    />
  );
};

export default CanvasImage;
