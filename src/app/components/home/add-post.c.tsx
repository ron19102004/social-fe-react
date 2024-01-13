import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Divider,
  Tooltip,
} from "@chakra-ui/react";
import galleryIcon from "../../assets/gallery.png";
import { useState } from "react";
const AddPostComponent: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addPic, setAddPic] = useState<boolean>(false);
  return (
    <div className="bg-color5 p-3 rounded">
      <div className="flex items-center space-x-2">
        <div className="">
          <img
            src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950"
            alt="avatar"
            className="w-14 h-14 object-cover rounded-full"
          />
        </div>
        <div className=" flex-1">
          <button
            onClick={onOpen}
            className="bg-color6 text-white py-3 w-full rounded-3xl text-left px-5 cursor-pointer"
          >
            Bạn đang nghĩ về điều gì? Dũng
          </button>
        </div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent style={{ backgroundColor: "#171616", border: "none" }}>
            <section className="text-white space-y-1 border-2 rounded-xl border-blue-400">
              <h1 className="font-bold text-2xl text-center py-1">
                Thêm bài viết
              </h1>
              <Divider />
              <div className="flex justify-start p-4 space-x-1">
                <div>
                  <img
                    src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950"
                    alt="avatar"
                    className="w-14 h-14 object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-between items-start">
                  <span className="text-xl font-bold">Trần Ngọc Anh Dũng</span>
                  <span>
                    Thời gian:{" "}
                    {new Date()
                      .toISOString()
                      .split("T")[0]
                      .split("-")
                      .reverse()
                      .join("-")}
                  </span>
                </div>
              </div>
              <div className="max-h-64 overflow-auto">
                <div>
                  <textarea
                    className="w-full min-h-40 outline-none bg-color5 p-3"
                    placeholder={`Bạn đang nghĩ về điều gì? Dũng`}
                  ></textarea>
                </div>
                {addPic && (
                  <div className="flex items-center justify-center mx-3">
                    <label className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2  border-color6 bg-color1 p-6 text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <h2 className="font-medium text-gray-700 tracking-wide">
                        Thêm ảnh
                      </h2>
                      <p className=" text-gray-500 tracking-wide">
                        Nhấn để tải hoặc kéo thả tệp SVG, PNG, JPG or GIF.{" "}
                      </p>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center mx-3 border-2  border-color6 p-3 rounded-xl">
                <span>Thêm vào bài viết</span>
                <div className="flex justify-between items-center flex-col">
                  <button
                    onClick={() => {
                      setAddPic(!addPic);
                    }}
                  >
                    <Tooltip label="Thêm ảnh" className="flex flex-col justify-center items-center">
                      <img
                        src={galleryIcon}
                        alt="gallery"
                        className="w-6 h-6 object-cover"
                      />
                    </Tooltip>
                  </button>
                </div>
              </div>
              <Divider/>
              <div className="flex flex-col justify-center items-center p-3">
                <button className="bg-color6 w-full py-2 rounded-md text-color2 hover:text-white">
                  Thêm bài viết
                </button>
              </div>
            </section>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};
export default AddPostComponent;
