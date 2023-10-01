import ReactQuill from "react-quill";
import Flex from "../CustomHTML/Flex";

const EditorTextSimple = ({ name, onChange, label }: any) => {
  let modules = {
    toolbar: [["bold", "italic"]],
  };

  var formats = ["bold", "italic"];

  const handleProcedureContentChange = (valueHTML: any) => {
    console.log("content---->", valueHTML);
    let e = {
      target: {
        name,
        value: valueHTML,
      },
    };
    onChange(e);
  };

  return (
    <Flex col noitemscenter full style={{ height: "120px", width: "100%" }}>
      <span className="mb-1 font-bold text-gray-400 text-sm">{label}</span>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        onChange={handleProcedureContentChange}
        style={{ height: "70px", width: "100%" }}
      ></ReactQuill>
    </Flex>
  );
};

export default EditorTextSimple;
