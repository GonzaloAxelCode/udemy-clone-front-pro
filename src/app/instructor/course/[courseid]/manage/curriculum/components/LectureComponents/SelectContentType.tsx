import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import DocIcon from "@/shared/UIComponents/icons/DocIcon";
import PlayIconDark from "@/shared/UIComponents/icons/PlayIconDark";
import VideoIcon from "@/shared/UIComponents/icons/VideoIcon";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "tailwind-cn";
import HeaderItemLecture from "./HeaderItemLecture";
import ArticleContentEditor from "./article/ArticleContentEditor";
import VideoSlideMashupUploadContent from "./video-slide/VideoSlideMashupUploadContent";
import VideoUploadContent from "./video/VideoUploadContent";

const SelectContentType = ({ idchild, onClose }: any) => {
  const [contentResouces, setContentResouces] = useState("");
  const [titleButtonHeader, setTitleButtonHeader] = useState(
    "Select content type"
  );
  const handleMultipleClose = () => {
    if (contentResouces === "") {
      onClose();
    } else {
      setContentResouces("");
    }
  };
  useEffect(() => {
    if (contentResouces === "article") {
      setTitleButtonHeader("Article");
    }
    if (contentResouces === "video_slide_mashup") {
      setTitleButtonHeader("Video & Slide Mashup");
    }
    if (contentResouces === "video") {
      setTitleButtonHeader("video");
    }
    if (contentResouces === "") {
      setTitleButtonHeader("Select content type");
    }
  }, [contentResouces, setContentResouces]);
  return (
    <>
      <HeaderItemLecture
        onClose={handleMultipleClose}
        title={titleButtonHeader}
      >
        <Flex
          full
          justifycenter
          className={cn(contentResouces === "" ? "space-x-8 mt-2" : "hidden")}
        >
          <Item
            text="Video"
            onClick={() => setContentResouces("video")}
            icon={PlayIconDark}
          />
          <Item
            text="Video & Slide Mashup"
            onClick={() => setContentResouces("video_slide_mashup")}
            icon={VideoIcon}
          />
          <Item
            text="Article"
            onClick={() => setContentResouces("article")}
            icon={DocIcon}
          />
        </Flex>
        <Flex className={cn(contentResouces === "" ? "hidden" : "w-full")}>
          {contentResouces === "article" && (
            <ArticleContentEditor
              onClose={() => {
                setContentResouces("");
                onClose();
              }}
            />
          )}
          {contentResouces === "video_slide_mashup" && (
            <VideoSlideMashupUploadContent />
          )}
          {contentResouces === "video" && <VideoUploadContent />}
        </Flex>
      </HeaderItemLecture>
    </>
  );
};

export default SelectContentType;

const Item = ({ text, icon, ...args }: any) => {
  const [hover, setHover] = useState(false);

  const itemClasses = `border-1 border-solid overflow-hidden ${
    hover
      ? "bg-dark-100 border-dark-100 text-white"
      : "bg-gray-100 border border-gray-200 text-dark-100"
  }`;

  const iconContainerClasses = `pt-2  flex flex-col`;

  const labelClasses = ` w-full text-xs flex items-center justify-center absolute bottom-0 ${
    hover ? "bg-dark-100" : "bg-gray-200"
  }`;
  const Icon = icon;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={itemClasses}
      style={{
        cursor: "pointer",
        position: "relative",
        width: "72px",
        height: "62px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        padding: "0.4rem",
      }}
      {...args}
    >
      <motion.span
        animate={{ y: hover ? 0 : -40 }}
        initial={{ y: 0 }}
        transition={{ duration: 0.2 }}
        className={iconContainerClasses}
      >
        <span>
          <Icon color="#D1D7DC" scale="1.1" />
        </span>
        <span className="mt-3">
          <Icon color="#D1D7DC" scale="1.1" />
        </span>
      </motion.span>
      <span
        style={{ width: "100%", lineHeight: "1.8", fontSize: "10px" }}
        className={labelClasses}
      >
        {text}
      </span>
    </div>
  );
};

/*

<Flex
        full
        col
        justifycenter
        className="relative p-3 border-t-1 border-l-0 border-r-0 border-b-0  border-dark-100"
      >
        <P
          className={cn(contentResouces === "" ? "w-full" : "hidden")}
          center
          sm
        >
          Select the main type of content. Files and links can be added as
          resources.
          <LinkOffset text="Learn about content types." />
        </P>
        <Button
          extendClass="absolute flex items-center hover:bg-white -top-[25px] right-6 z-2 border-t-1 border-l-1 border-r-1 border-b-0  border-dark-100 "
          variant="white"
          size="xs"
        >
          <span>{titleButtonHeader}</span>
          <span
            onClick={handleMultipleClose}
            className="cursor-pointer rotate-45"
          >
            <PlusIcon />
          </span>
        </Button>

        <Flex
          full
          justifycenter
          className={cn(contentResouces === "" ? "space-x-8 mt-2" : "hidden")}
        >
          <Item
            text="Video"
            onClick={() => setContentResouces("video")}
            icon={PlayIconDark}
          />
          <Item
            text="Video & Slide Mashup"
            onClick={() => setContentResouces("video_slide_mashup")}
            icon={VideoIcon}
          />
          <Item
            text="Article"
            onClick={() => setContentResouces("article")}
            icon={DocIcon}
          />
        </Flex>
        <Flex className={cn(contentResouces === "" ? "hidden" : "w-full")}>
          {contentResouces === "article" && (
            <ArticleContentEditor
              onClose={() => {
                setContentResouces("");
                onClose();
              }}
            />
          )}
          {contentResouces === "video_slide_mashup" && (
            <VideoSlideMashupUploadContent />
          )}
          {contentResouces === "video" && <VideoUploadContent />}
        </Flex>
      </Flex>
*/
