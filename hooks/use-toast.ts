import React from "react";
import { toast as sonnerToast, ToastT } from "sonner";

type ToastProps = Omit<ToastT, "id">;

const toast = {
  toast: (props: string | React.ReactNode | ToastProps) => {
    // If props is a string or ReactNode, pass it directly as the title
    if (typeof props === 'string' || React.isValidElement(props)) {
      return sonnerToast(props);
    }
    // Otherwise, extract title and pass the rest as options
    const { title, ...options } = props as ToastProps & { title: string | React.ReactNode };
    return sonnerToast(title, options);
  },
  success: (message: string, props?: ToastProps) => {
    return sonnerToast.success(message, props);
  },
  error: (message: string, props?: ToastProps) => {
    return sonnerToast.error(message, props);
  },
  warning: (message: string, props?: ToastProps) => {
    return sonnerToast.warning(message, props);
  },
  info: (message: string, props?: ToastProps) => {
    return sonnerToast.info(message, props);
  },
  dismiss: (toastId?: string) => {
    return sonnerToast.dismiss(toastId);
  },
};

export const useToast = () => toast;
