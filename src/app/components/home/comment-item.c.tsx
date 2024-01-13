import { useState } from "react";
import { NavLink } from "react-router-dom";

const CommentItem: React.FC = () => {
  const [openComment, setOpenComment] = useState<boolean>(false);
  const [newComment, setNewComment] = useState<string>("");
  const addComment = () => {
    setOpenComment(false);
  };
  return (
    <li className="flex p-3 m-3 rounded">
      <NavLink to={"/profile?id=10"} className={`basis-1/5`}>
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </NavLink>
      <div className={`flex-1 text-sm `}>
        <div className="bg-color6 p-3 rounded">
          <NavLink to={"/profile?id=1"}>Trần Ngọc Anh Dũng</NavLink>
          <p className="line-clamp-2 text-ellipsis">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam qui
            excepturi eum ducimus nobis mollitia quod, nesciunt dolore neque
            recusandae alias pariatur vero obcaecati totam illo labore
            doloremque cupiditate. Dolorem? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Esse labore ut hic natus deserunt
            impedit minima necessitatibus iure amet qui sapiente, ipsa
            architecto rem, autem assumenda nisi soluta inventore. Quibusdam!
          </p>
        </div>
        <div className="flex justify-between items-center px-2">
          <span>
            {new Date()
              .toISOString()
              .split("T")[0]
              .split("-")
              .reverse()
              .join("-")}
          </span>
          <button
            onClick={() => {
              setOpenComment(true);
            }}
            className="flex justify-start items-center space-x-1 my-2"
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
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
            <span>Phản hồi</span>
          </button>
        </div>
        {openComment && (
          <div className="bg-color6 rounded">
            <textarea
              className="w-full py-3 outline-none pl-3 pr-12 bg-color6 max-h-60"
              placeholder="Viết nội dung phản hồi"
              onChange={(e) => {
                setNewComment(e.target.value);
              }}
            />
            <button
              disabled={newComment.length === 0}
              onClick={addComment}
              className={`flex justify-end items-center w-full px-2 py-1 ${
                newComment.length === 0 ? "text-gray-800" : "text-white"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </li>
  );
};
export default CommentItem;
