import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { Children } from "react";

function Modal({ open, setOpen, title = "", child, Description, children }) {
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        {/* <DialogTrigger >Open</DialogTrigger> */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{Description}</DialogDescription>
            {/* <DialogDescription>{children}</DialogDescription> */}
            {children}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Modal;
