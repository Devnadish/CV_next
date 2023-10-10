"use client";
import React, { useState } from "react";
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit";
import Modal from "@/components/shared/modal/Modal";
import { Button } from "@/components/ui/button";
import { UpdateTitleForm } from "./UpdateTitleForm";
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";

function EditTitle({ id, title, Desctription }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-start w-full gap-4 pt-4 ">
      <Button size="xs" variant="grayGhost" onClick={() => setOpen(true)}>
        <AiFillEdit className="text-white" />
      </Button>
      <Button size="xs" variant="grayGhost">
        <AiFillEye />
      </Button>

      {open ? (
        <Modal
          open={open}
          setOpen={setOpen}
          title={`old Title : ${title}`}
          // children={
          // <UpdateTitleForm
          //   title={title}
          //   Desctription={Desctription}
          //   id={id}
          //   setOpen={setOpen}
          // />
          // }
          Description="This action cannot be undone. This will permanently Updatedy Your."
        >
          <UpdateTitleForm
            title={title}
            Desctription={Desctription}
            id={id}
            setOpen={setOpen}
          />
        </Modal>
      ) : null}
    </div>
  );
}

export default EditTitle;