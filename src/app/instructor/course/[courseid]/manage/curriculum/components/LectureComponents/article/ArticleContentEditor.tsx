import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import P from "@/shared/UIComponents/CustomHTML/P";
import dynamic from "next/dynamic";
import { useRef } from "react";
import SunEditorCore from "suneditor/src/lib/core";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const ArticleContentEditor = ({ onClose }: any) => {
  const editor = useRef<SunEditorCore>();
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };
  return (
    <Flex full col noitemscenter className="flex-end">
      <P bold className="pb-1" sm>
        Text
      </P>
      <SunEditor
        setDefaultStyle="font-family: 'Udemy Sans', sans-serif;"
        setOptions={{
          buttonList: [
            [
              "formatBlock",
              "bold",
              "italic",
              "align",
              "list",
              "link",
              "image",
              "codeView",
              "fullScreen",
            ],
          ],
        }}
        getSunEditorInstance={getSunEditorInstance}
      />
      <Button
        onClick={onClose}
        size="xs"
        extendClass="mt-3 py-1 px-4 ml-auto"
        variant="secondary"
      >
        Save
      </Button>
    </Flex>
  );
};

export default ArticleContentEditor;
