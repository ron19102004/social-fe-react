import { NavLink } from "react-router-dom";
import Each from "../../helpers/loop-component.help";
import { INavlink } from "./header.component";
import "../styles/header.style.scss";
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
const HeaderMobile: React.FC = () => {
  return (
    <header className="md:hidden fixed w-full bg-color5 space-y-2 p-2 z-10">
      <div className="font-bold text-3xl text-white">
        <span>RON</span>
        <span>{` `}PREMIUM</span>
      </div>
      <nav>
        <ul className="grid gap-2 grid-rows-1 grid-cols-5 items-center justify-center content-center">
          <Each
            of={navlinks}
            render={(_index: number, value: INavlink) => (
              <NavLink
                to={value.to}
                className={({ isActive }) =>
                  isActive ? "link-mobile-active" : "link-mobile"
                }
              >
                {value.icon}
              </NavLink>
            )}
          />
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              isActive ? "link-mobile-active" : "link-mobile"
            }
          >
            <img
              src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950"
              alt="avatar"
              className="w-7 h-7 rounded-full object-cover"
            />
          </NavLink>
          <button className="link-mobile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </ul>
      </nav>
    </header>
  );
};
export default HeaderMobile;
