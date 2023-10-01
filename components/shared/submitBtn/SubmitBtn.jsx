import React from "react";
import { Button } from "@/components/ui/button";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

function SubmitBtn({ txt, icon, varent }) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="px-2 py-1 ml-2 text-sm  disabled:bg-red-400"
      variant={varent}
      size="sm"
    >
      {txt}
      {icon}
    </Button>
  );
}

export default SubmitBtn;
