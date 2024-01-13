import {
  Divider,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Skeleton,
  useDisclosure,
} from "@chakra-ui/react";
import { Suspense, lazy, useState } from "react";

const PostComponent: React.FC = () => {
  const [like, setLike] = useState<boolean>(false);
  const [fullContent, setFullContent] = useState<boolean>(false);
  const likeAct = () => {
    if (!like) setLike(true);
  };
  return (
    <li className="bg-color5 rounded text-white">
      <div className="flex justify-start items-center p-3">
        <div>
          <img
            src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div className="text-gray-300 flex flex-col justify-center items-start">
          <h1 className="font-semibold">Trần Ngọc Anh Dũng</h1>
          <span className="text-xs">
            {new Date()
              .toISOString()
              .split("T")[0]
              .split("-")
              .reverse()
              .join("-")}
            {" | "}
            {new Date().getHours() + ":" + new Date().getMinutes()}
          </span>
        </div>
      </div>
      <div className="px-3 w-full">
        <p className={` ${fullContent ? "" : "line-clamp-5"}  text-ellipsis`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quae cupiditate, eius laboriosam nobis officiis velit ipsam esse dicta
          aspernatur commodi ullam soluta nam animi itaque illum deserunt illo
          neque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repudiandae quae cupiditate, eius laboriosam nobis officiis velit
          ipsam esse dicta aspernatur commodi ullam soluta nam animi itaque
          illum deserunt illo neque!
        </p>
        {!fullContent && (
          <button
            className="text-right w-full "
            onClick={() => {
              setFullContent(true);
            }}
          >
            Xem toàn bộ
          </button>
        )}
      </div>
      <div>
        <img
          src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950"
          alt="img"
          className="w-full max-h-96 object-cover"
        />
      </div>
      <div className="flex justify-between items-center p-3">
        <span>0 lượt thích</span>
        <span>10 bình luận</span>
      </div>
      <Divider />
      <div className="flex justify-evenly items-center p-3">
        <button
          onClick={likeAct}
          className={`flex justify-center items-center space-x-1 ${
            like ? "text-color4" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
            />
          </svg>
          <span>Thích</span>
        </button>
        <CommentPost like={like} likeAct={likeAct} />
        <button className="flex justify-center items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>
          <span>Chia sẻ</span>
        </button>
      </div>
    </li>
  );
};

const CommentItem = lazy(() => import("./comment-item.c"));
interface ICommentPostProps {
  like: boolean;
  likeAct: () => void;
}
const CommentPost: React.FC<ICommentPostProps> = ({ like, likeAct }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newComment, setNewComment] = useState<string>("");
  const addComment = () => {};
  return (
    <>
      <button
        onClick={onOpen}
        className="flex justify-center items-center space-x-1"
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
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
        <span>Bình luận</span>
      </button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent style={{ backgroundColor: "#171616", border: "none" }}>
          <ModalCloseButton style={{ color: "white" }} />
          <section className="text-white max-h-screen overflow-auto rounded">
            <h1 className="font-bold text-2xl text-center">
              Bài viết của Dũng
            </h1>
            <div className="bg-color5 rounded text-white">
              <div className="flex justify-start items-center p-3">
                <div>
                  <img
                    src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950"
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="text-gray-300 flex flex-col justify-center items-start">
                  <h1 className="font-semibold">Trần Ngọc Anh Dũng</h1>
                  <span className="text-xs">
                    {new Date()
                      .toISOString()
                      .split("T")[0]
                      .split("-")
                      .reverse()
                      .join("-")}
                    {" | "}
                    {new Date().getHours() + ":" + new Date().getMinutes()}
                  </span>
                </div>
              </div>
              <p className="px-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae quae cupiditate, eius laboriosam nobis officiis
                velit ipsam esse dicta aspernatur commodi ullam soluta nam animi
                itaque illum deserunt illo neque! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Repudiandae quae cupiditate, eius
                laboriosam nobis officiis velit ipsam esse dicta aspernatur
                commodi ullam soluta nam animi itaque illum deserunt illo neque!
              </p>
              <div>
                <img
                  src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950"
                  alt="img"
                  className="w-full max-h-96 object-cover"
                />
              </div>
              <div className="flex justify-between items-center p-3">
                <span>0 lượt thích</span>
                <span>10 bình luận</span>
              </div>
              <Divider />
              <div className="flex justify-around items-center p-3">
                <button
                  onClick={likeAct}
                  className={`flex justify-center items-center space-x-1 ${
                    like ? "text-color4" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                    />
                  </svg>
                  <span>Thích</span>
                </button>
                <button className="flex justify-center items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                  <span>Chia sẻ</span>
                </button>
              </div>
              <Divider />
              <div>
                <ul className="max-h-96 overflow-auto">
                  <Suspense fallback={<Skeleton height="20px" />}>
                    <CommentItem />
                  </Suspense>
                  <Suspense fallback={<Skeleton height="20px" />}>
                    <CommentItem />
                  </Suspense>
                  <Suspense fallback={<Skeleton height="20px" />}>
                    <CommentItem />
                  </Suspense>
                  <Suspense fallback={<Skeleton height="20px" />}>
                    <CommentItem />
                  </Suspense>
                  <Suspense fallback={<Skeleton height="20px" />}>
                    <CommentItem />
                  </Suspense>
                </ul>
              </div>
              <Divider />
              <div className="flex relative py-3 px-2">
                <input
                  type="text"
                  className="w-full py-3 rounded-3xl outline-none pl-3 pr-12 bg-color6"
                  placeholder="Thêm bình luận"
                  onChange={(e) => {
                    setNewComment(e.target.value);
                  }}
                />
                <button
                  disabled={newComment.length === 0}
                  onClick={addComment}
                  className={`absolute top-5 right-5 ${
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
            </div>
          </section>
        </ModalContent>
      </Modal>
    </>
  );
};
export default PostComponent;
