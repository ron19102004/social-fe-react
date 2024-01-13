import { MenuButton, Menu, MenuList } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import FeedbackIcon from "@mui/icons-material/Feedback";
import GradeIcon from "@mui/icons-material/Grade";
const AvatarButton: React.FC = () => {
  return (
    <Menu>
      <MenuButton>
        <img
          src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950"
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
      </MenuButton>
      <MenuList style={{ backgroundColor: "#171616", border: "none" }}>
        <section className="bg-color5 text-gray-50 py-1 px-3 space-y-3">
          <NavLink
            to={"/profile"}
            className={`flex justify-start items-center space-x-2 hover:bg-color6 bg-color1 px-6 py-4 rounded  shadow-lg`}
          >
            <div>
              <img
                src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950"
                alt="avatar"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between items-start">
              <span className="font-bold text-2xl">Trần Ngọc Anh Dũng</span>
              <span className="text-sm">Trang cá nhân</span>
            </div>
          </NavLink>
          <div className="space-y-1 rounded">
            <button
              className={`w-full flex justify-between items-center space-x-2 hover:bg-color6 bg-color1 px-6 py-4 rounded-t `}
            >
              <span className="flex-1 text-start">Cài đặt</span>
              <span className="basis-1/5 text-end">
                <SettingsIcon />
              </span>
            </button>
            <NavLink
              to={"/premium"}
              className={`w-full flex justify-between items-center space-x-2 hover:bg-color6 bg-color1 px-6 py-4`}
            >
              <span className="flex-1 text-start uppercase">Premium</span>
              <span className="basis-1/5 text-end">
                <GradeIcon />
              </span>
            </NavLink>
            <NavLink
              to={"/feedback"}
              className={`w-full flex justify-between items-center space-x-2 hover:bg-color6 bg-color1 px-6 py-4`}
            >
              <span className="flex-1 text-start">Phản hồi</span>
              <span className="basis-1/5 text-end">
                <FeedbackIcon />
              </span>
            </NavLink>
            <NavLink
              to={"/profile"}
              className={`w-full flex justify-between items-center space-x-2 hover:bg-color6 bg-color1 px-6 py-4 rounded-b`}
            >
              <span className="flex-1 text-start">Đăng xuất</span>
              <span className="basis-1/5 text-end">
                <LogoutIcon />
              </span>
            </NavLink>
          </div>
          <span className="text-xs text-gray-600 p-3">
            Privacy · Terms · Advertising · Ad Choices · Cookies · · Ron © 2024
          </span>
        </section>
      </MenuList>
    </Menu>
  );
};
export default AvatarButton;
