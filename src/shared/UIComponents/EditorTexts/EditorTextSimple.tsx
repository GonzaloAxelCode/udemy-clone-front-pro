"use client";

import dynamic from "next/dynamic";

//import ReactQuill from "react-quill";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import Flex from "../CustomHTML/Flex";

const EditorTextSimple = ({ name, onChange, label = false }: any) => {
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
    <Flex
      col
      noitemscenter
      full
      style={{ height: "120px", marginBottom: "20px", width: "100%" }}
    >
      {label && (
        <span className="mb-1 font-bold text-gray-400 text-sm">{label}</span>
      )}
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
