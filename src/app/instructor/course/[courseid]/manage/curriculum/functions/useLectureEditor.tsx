import { useState } from "react";

const useLectureEditor = (childblockid: any) => {
    
  const [openEdit, setOpenEdit] = useState({
    idchild: childblockid,
    open: false,
  });

  const [expand, setExpand] = useState({
    idchild: childblockid,
    open: false,
  });

  const [openSelectContentTypeExpand, setOpenSelectContentTypeExpand] =
    useState({
      idchild: childblockid,
      open: false,
    });

  const handleOpenSelectContentTypeExpand = () => {
    setOpenSelectContentTypeExpand({
      ...openSelectContentTypeExpand,
      idchild: childblockid,
      open: true,
    });
  };
  const handleCloseSelectContent = () => {
    setOpenSelectContentTypeExpand({
      ...openSelectContentTypeExpand,
      idchild: childblockid,
      open: false,
    });
  };
  const handleOpenEdit = () => {
    setOpenEdit({
      ...openEdit,
      idchild: childblockid,
      open: true,
    });
  };
  const handleCloseEdit = () => {
    setOpenEdit({
      ...openEdit,
      idchild: childblockid,
      open: false,
    });
  };

  const handleToggleOpenExpand = () => {
    setExpand({
      ...expand,
      open: !expand.open,
      idchild: childblockid,
    });
  };

  return {
    handleOpenSelectContentTypeExpand,
    handleCloseEdit,
    handleToggleOpenExpand,
    handleOpenEdit,
    handleCloseSelectContent,
    openSelectContentTypeExpand,
    expand,
    openEdit,
  };
};

export default useLectureEditor;
