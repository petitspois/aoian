import React from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Dialog, DialogContent, DialogTitle } from "@/app/components/ui/dialog";
import { cn } from "@/lib/utils";


type IModal = {
  className?: string
  wrapperClassName?: string
  closeClassName?: string
  isShow: boolean
  onClose?: () => void
  title?: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
  closable?: boolean
  maskClosable?: boolean;
  overflowVisible?: boolean
}

const Modal = ({
  className,
  wrapperClassName,
  closeClassName,
  isShow,
  onClose,
  title,
  description,
  children,
  maskClosable = true,
  overflowVisible = false,
}: IModal) => {

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose?.();
    }
  };

  return (
    <Dialog
      open={isShow}
      onOpenChange={handleOpenChange}
    >
      <DialogContent
        onPointerDownOutside={(e) => {
          if (!maskClosable)
            e.preventDefault();
        }}
        className={cn("max-w-fit", wrapperClassName)} closeClassName={closeClassName}>
        <VisuallyHidden.Root>
          <DialogTitle />
        </VisuallyHidden.Root>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
