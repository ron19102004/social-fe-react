/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Portal,
  Skeleton,
} from "@chakra-ui/react";
import Each from "../../../helpers/loop-component.help";
import { Suspense, lazy } from "react";
import { INotify, useNotify } from "../../../hooks/notify.hook";
const NotifyItem = lazy(() => import("./loading/notify-item.c"));
const NotifyButton: React.FC = () => {
  const { list } = useNotify();
  const notifies = list();
  return (
    <Popover>
      <PopoverTrigger>
        <button
          className={` w-10 h-10 flex flex-col justify-center items-center  bg-color6  hover:text-color4 text-gray-300 rounded-full`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent style={{ backgroundColor: "#171616", border: "none" }}>
          <section className="text-gray-50 p-4 bg-color5 rounded-md space-y-2">
            <div className="flex justify-between items-center">
              <h1 className="text-xl">
                Thông báo {`(`}
                {notifies.length}
                {`)`}
              </h1>
              <button type="button" className="">
                Xem thêm
              </button>
            </div>
            <ul className="space-y-2 max-h-96 overflow-auto">
              <Each
                of={notifies}
                render={(_index: number, value: INotify) => (
                  <Suspense fallback={<Skeleton height="20px" />}>
                    <NotifyItem value={value} />
                  </Suspense>
                )}
              />
            </ul>
          </section>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
export default NotifyButton;
