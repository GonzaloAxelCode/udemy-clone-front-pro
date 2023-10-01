import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import ReactCrop from "react-image-crop";
const CropAreaImage = ({
  onImageLoad,
  setCompletedCrop,
  setCrop,
  crop,
  imgSrc,
  imgRef,
  scale,
  aspect,
  rotate,
  hidden = false,
}: any) => {
  if (hidden) {
    return <></>;
  }

  return (
    <Flex full col noitemscenter>
      <Flex
        full
        col
        justifycenter
        noitemscenter
        className="border-1 border-dark-100 border-solid"
      >
        <ReactCrop
          crop={crop}
          style={{
            background: "#000",
            margin: "auto",
          }}
          aspect={aspect}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
          minHeight={200}
          minWidth={200}
        >
          <Flex className="flex w-full m-auto items-center justify-center">
            <img
              ref={imgRef}
              alt="Crop me"
              src={imgSrc}
              className="m-auto object-contain"
              width="100%"
              style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
              onLoad={onImageLoad}
            />
          </Flex>
        </ReactCrop>
      </Flex>
    </Flex>
  );
};

export default CropAreaImage;
