"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, MouseEvent, ReactElement, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({
  open,
  children,
  title,
  closable = true,
  onOk,
  onCancel,
  okText,
  cancelText,
  footer = true,
}: {
  open: boolean;
  children: string | ReactElement;
  title?: null | string | ReactElement;
  closable?: boolean;
  onOk?: (evt: MouseEvent<HTMLButtonElement>) => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  footer?: null | boolean;
}) {
  const cancelButtonRef = useRef(null);

  const handleCancel = () => {
    onCancel?.();
  };

  const handleOk = (evt: MouseEvent<HTMLButtonElement>) => {
    onOk?.(evt);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 w-[780px]"
        onClose={handleCancel}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 w-full sm:w-[560px] md:w-[780px]">
                <div className="bg-white">
                  <div className="flex items-start w-full">
                    <div className="w-full text-left">
                      <Dialog.Title className="flex items-center justify-between w-full h-16 px-6 font-semibold leading-6 text-center text-gray-900 border-b border-b-slate-200">
                        {closable && (
                          <button
                            aria-label="Close Modal"
                            className="justify-self-start"
                            onClick={handleCancel}
                          >
                            <AiOutlineClose />
                          </button>
                        )}
                        <p>{title}</p>
                        <div />
                      </Dialog.Title>

                      {/* Contents */}
                      {children}
                    </div>
                  </div>
                </div>

                {footer && (
                  <div
                    role="group"
                    aria-label="Modal Footer"
                    className="flex flex-row-reverse justify-between px-6 py-4 border-t border-t-slate-200"
                  >
                    <button
                      aria-label={okText ?? "OK"}
                      className="px-6 py-3 font-semibold text-white bg-black rounded-md"
                      onClick={handleOk}
                    >
                      {okText ?? "OK"}
                    </button>

                    <button
                      aria-label={cancelText ?? "Cancel"}
                      className="font-medium text-gray-900 underline"
                      onClick={handleCancel}
                      ref={cancelButtonRef}
                    >
                      {cancelText ?? "Cancel"}
                    </button>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
