import { Divider } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const SideBarLeft: React.FC = () => {
  return (
    <section>
      <div>
        <NavLink
          to={"/profile"}
          className={`flex justify-start items-center p-3 text-gray-400`}
        >
          <div className="basis-1/5">
            <img
              src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950"
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <span className="font-bold flex-1">Trần Ngọc Anh Dũng</span>
        </NavLink>
      </div>
      <Divider />
    </section>
  );
};
export default SideBarLeft;
