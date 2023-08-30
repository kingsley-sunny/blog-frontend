import { ReactNode } from "react";
import { HiXCircle } from "react-icons/hi";
import { cn } from "../../../base/functions/cn";

const Modal = ({
  isOpen,
  onClose,
  children,
  className,
  title,
}: {
  isOpen?: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className='bg-transparent backdrop-blur-[20px] z-[100] fixed inset-0 flex justify-center items-center'>
      <div
        className={cn(
          "bg-base-100 max-w-md mx-auto py-4 pb-8 px-6 rounded-xl shadow-2xl",
          className
        )}
      >
        {/* The modal header */}
        <div className='flex justify-between items-center'>
          <h3 className='text-xl font-bold'>{title} </h3>

          <HiXCircle className='w-7 h-7 cursor-pointer' onClick={onClose} />
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
