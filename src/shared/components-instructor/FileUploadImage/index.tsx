"use client";
import React, { useRef, useState } from "react";
import "react-image-crop/dist/ReactCrop.css";
//@ts-ignore
import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import { Crop, PixelCrop } from "react-image-crop";
import CropAreaImage from "./CropAreaImage";
import InputFile from "./InputFile";

import { cn } from "tailwind-cn";
import CanvasImage from "./CanvasImage";
import { canvasPreview } from "./functions/canvasPreview";
import centerAspectCrop from "./functions/center_aspect_crop";
import useDebounceEffect from "./functions/useDebounceEffect";
const FileUploadImage = () => {
  const [isLoadImage, setIsLoadImage] = useState(false);

  const [resizedImageFile, setResizedImageFile] = useState<File | null>(null);
  const [cropCompleted, setCropCompleted] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const hiddenAnchorRef = useRef<HTMLAnchorElement>(null);

  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>(1 / 1);

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }
  function resizeImageTo200x200(image: any) {
    const canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 200;
    const ctx: any = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, 200, 200);

    canvas.toBlob((blob) => {
      if (blob) {
        const resizedFile = new File([blob], "resized_image.jpg", {
          type: "image/jpeg",
        });
        setResizedImageFile(resizedFile);
      }
    }, "image/jpeg");
    return canvas.toDataURL("image/jpeg"); // Você pode escolher o formato desejado aqui
  }

  function onDownloadCropClick() {
    if (!previewCanvasRef.current) {
      throw new Error("Crop canvas does not exist");
    }

    // Obter a imagem original do canvas
    const originalImage = new Image();
    originalImage.src = previewCanvasRef.current.toDataURL();

    originalImage.onload = () => {
      // Redimensionar a imagem para 200x200
      const resizedImageDataURL = resizeImageTo200x200(originalImage);

      // Criar um link de download para a imagem redimensionada
      const downloadLink = document.createElement("a");
      downloadLink.href = resizedImageDataURL;
      downloadLink.download = "resized_image.jpg"; // Nome do arquivo de download
      downloadLink.click();
    };
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        );
      }
    },
    100,
    [completedCrop, scale, rotate]
  );

  return (
    <Flex full col noitemscenter className="gap-6">
      <div className="flex w-full space-x-2">
        <CropAreaImage
          rotate={rotate}
          scale={scale}
          hidden={!isLoadImage || cropCompleted}
          setCompletedCrop={setCompletedCrop}
          setCrop={setCrop}
          aspect={aspect}
          crop={crop}
          imgSrc={imgSrc}
          imgRef={imgRef}
          onImageLoad={onImageLoad}
        />
        <CanvasImage
          previewCanvasRef={previewCanvasRef}
          height={completedCrop?.height}
        />
      </div>

      <Flex hidden={!cropCompleted} full col noitemscenter>
        <Flex
          justifycenter
          full
          col
          noitemscenter
          className="border-1 border-dark-100 border-solid p-4"
        >
          {resizedImageFile && (
            <img
              alt="current image"
              src={URL.createObjectURL(resizedImageFile)}
              width={200}
              height={200}
              className="m-auto object-contain"
            />
          )}
        </Flex>
        <Flex
          full
          className={cn(
            "border-1 mt-4 border-gray-500 border-solid relative z-1"
          )}
        >
          <Flex
            justifycenter
            full
            className="text-center bg-linkpurple text-white border-r-1 border-gray-500 border-solid px-3 h-[48px]"
          >
            100%
          </Flex>
          <Button
            extendClass="border-0 px-2 border-gray-500 border-solid"
            size="md"
            variant="primary"
            onClick={() => {
              setCropCompleted(false);
              setIsLoadImage(false);
              setCompletedCrop(undefined);
            }}
          >
            Change
          </Button>
        </Flex>
      </Flex>

      <Flex
        justifycenter
        full
        hidden={isLoadImage}
        col
        noitemscenter
        className="border-1  border-dark-100 border-solid p-4"
      >
        <img
          alt="current image"
          src="https://img-c.udemycdn.com/user/200_H/anonymous_3.png"
          width={200}
          height={200}
          className="m-auto object-contain"
        />
      </Flex>

      {!!completedCrop && (
        <div className={cn(cropCompleted && "hidden")}>
          <Button
            variant="invert-primary"
            extendClass="border-1 border-dark-100 border-solid px-3 mt-4"
            onClick={() => {
              onDownloadCropClick();
              setCropCompleted(true);
            }}
            size="md"
          >
            Crop image
          </Button>
          <a
            href="#hidden"
            ref={hiddenAnchorRef}
            download
            style={{
              position: "absolute",
              top: "-200vh",
              visibility: "hidden",
            }}
          >
            Hidden download
          </a>
        </div>
      )}
      <div
        className={cn(
          !isLoadImage || cropCompleted
            ? "hidden"
            : "Crop-Controls flex  space-x-3"
        )}
      >
        <div>
          <label htmlFor="scale-input">Scale: </label>
          <input
            id="scale-input"
            type="number"
            step="0.1"
            value={scale}
            disabled={!imgSrc}
            onChange={(e) => setScale(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="rotate-input">Rotate: </label>
          <input
            id="rotate-input"
            type="number"
            value={rotate}
            disabled={!imgSrc}
            onChange={(e) =>
              setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))
            }
          />
        </div>
      </div>
      <div className={cn(isLoadImage ? "hidden" : "flex w-full")}>
        <InputFile
          onSelectFile={(e: any) => {
            onSelectFile(e);
            setIsLoadImage(true);
          }}
        />
      </div>
    </Flex>
  );
};

export default FileUploadImage;

/*
 {!!completedCrop && (
            <CanvasImage
              hidden={!isLoadImage}
              previewCanvasRef={previewCanvasRef}
              height={completedCrop?.height}
            />
          )}

           {resizedImageFile && (
            <div className="w-full">
              <img
                width="100%"
                src={URL.createObjectURL(resizedImageFile)}
                alt="Resized"
              />
            </div>
          )}

*/

/*
  <Flex
        full
        className=" border-1 border-gray-500 border-solid relative z-1"
      >
        <Flex
          justifycenter
          full
          className="text-center bg-linkpurple text-white border-r-1 border-gray-500 border-solid px-3 h-[48px]"
        >
          100%
        </Flex>
        <Button
          extendClass="border-0 px-2 border-gray-500 border-solid"
          size="md"
          variant="primary"
        >
          Change
        </Button>
      </Flex>


*/
