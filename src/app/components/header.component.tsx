import { ReactNode, Suspense, lazy } from "react";
import Each from "../../helpers/loop-component.help";
import { NavLink } from "react-router-dom";
import "../styles/header.style.scss";
import React from "react";
import { SkeletonCircle } from "@chakra-ui/react";
const NotifyButton = lazy(() => import("./header/notification-btn.c"));
const MessageButton = lazy(() => import("./header/message-btn.c"));
const AvatarButton = lazy(() => import("./header/avatar-btn.c"));

export interface INavlink {
  to: string;
  label: string;
  icon: ReactNode;
}
const navlinks: INavlink[] = [
  {
    to: "/",
    label: "Trang chủ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },

  {
    to: "/friends",
    label: "Bạn bè",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
        />
      </svg>
    ),
  },
  {
    to: "/shops",
    label: "Cửa hàng",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
    ),
  },
];
const Header: React.FC = () => {  
  return (
    <header className="hidden md:flex fixed w-screen justify-between items-center bg-color5 px-4">
      <section className="flex items-center justify-center space-x-2">
        <div className="font-bold text-3xl text-white">
          <span>RON</span>
          <span>{` `}PREMIUM</span>
        </div>
        {/* <div className="w-10" /> */}
        <div className="w-10" />
        <div className="w-10" />
      </section>
      <nav>
        <ul className="flex items-center justify-center">
          <Each
            of={navlinks}
            render={(_index: number, value: INavlink) => (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to={value.to}
              >
                {value.icon}
              </NavLink>
            )}
          />
        </ul>
      </nav>
      <section className={`flex items-center justify-center space-x-2`}>
        <button className=" w-10 h-10 flex flex-col justify-center items-center bg-color6 text-gray-300 rounded-full hover:text-color4 ">
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
        <Suspense fallback={<SkeletonCircle size="10" />}>
          <NotifyButton />
        </Suspense>
        <Suspense fallback={<SkeletonCircle size="10" />}>
          <MessageButton />
        </Suspense>
        <Suspense fallback={<SkeletonCircle size="10" />}>
          <AvatarButton />
        </Suspense>
      </section>
    </header>
  );
};
export default Header;
