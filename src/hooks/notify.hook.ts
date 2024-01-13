import axios from "axios";
import { env } from "../helpers/env.helper";
const API_URL: string = env("API_URL") as string;

export interface INotify {
  avatar: string;
  content: string;
  title: string;
  createdAt: Date;
}
export const useNotify = () => {
  const list = () => {
    return [
      {
        avatar:
          "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950",
        content: "Thông báo mới  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nisi ipsa placeat quod fugit voluptatem consequuntur. Odio facere quos labore corrupti consequuntur tenetur, dolor vero nulla quibusdam alias voluptas provident?",
        createdAt: new Date(),
        title: "Thông báo",
      },
      {
        avatar:
          "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950",
        content: "Thông báo mới  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nisi ipsa placeat quod fugit voluptatem consequuntur. Odio facere quos labore corrupti consequuntur tenetur, dolor vero nulla quibusdam alias voluptas provident?",
        createdAt: new Date(),
        title: "Thông báo",
      },
      {
        avatar:
          "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950",
        content: "Thông báo mới  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nisi ipsa placeat quod fugit voluptatem consequuntur. Odio facere quos labore corrupti consequuntur tenetur, dolor vero nulla quibusdam alias voluptas provident?",
        createdAt: new Date(),
        title: "Thông báo",
      },
      {
        avatar:
          "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950",
        content: "Thông báo mới  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nisi ipsa placeat quod fugit voluptatem consequuntur. Odio facere quos labore corrupti consequuntur tenetur, dolor vero nulla quibusdam alias voluptas provident?",
        createdAt: new Date(),
        title: "Thông báo",
      },
      {
        avatar:
          "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950",
        content: "Thông báo mới  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nisi ipsa placeat quod fugit voluptatem consequuntur. Odio facere quos labore corrupti consequuntur tenetur, dolor vero nulla quibusdam alias voluptas provident?",
        createdAt: new Date(),
        title: "Thông báo",
      },
      {
        avatar:
          "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950",
        content: "Thông báo mới  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nisi ipsa placeat quod fugit voluptatem consequuntur. Odio facere quos labore corrupti consequuntur tenetur, dolor vero nulla quibusdam alias voluptas provident?",
        createdAt: new Date(),
        title: "Thông báo",
      },
      {
        avatar:
          "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950",
        content: "Thông báo mới  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nisi ipsa placeat quod fugit voluptatem consequuntur. Odio facere quos labore corrupti consequuntur tenetur, dolor vero nulla quibusdam alias voluptas provident?",
        createdAt: new Date(),
        title: "Thông báo",
      },
      {
        avatar:
          "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950",
        content: "Thông báo mới  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nisi ipsa placeat quod fugit voluptatem consequuntur. Odio facere quos labore corrupti consequuntur tenetur, dolor vero nulla quibusdam alias voluptas provident?",
        createdAt: new Date(),
        title: "Thông báo",
      },
      {
        avatar:
          "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950",
        content: "Thông báo mới  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nisi ipsa placeat quod fugit voluptatem consequuntur. Odio facere quos labore corrupti consequuntur tenetur, dolor vero nulla quibusdam alias voluptas provident?",
        createdAt: new Date(),
        title: "Thông báo",
      },
      {
        avatar:
          "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950",
        content: "Thông báo mới  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nisi ipsa placeat quod fugit voluptatem consequuntur. Odio facere quos labore corrupti consequuntur tenetur, dolor vero nulla quibusdam alias voluptas provident?",
        createdAt: new Date(),
        title: "Thông báo",
      },
      {
        avatar:
          "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/383440047_839179320979945_4881773621878662963_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHM9_R8w4fVuvFC4as0R5DqUBOwUMhtJBZQE7BQyG0kFmG711TA_oSur4rK8KJoXfvyLJtbx3cvBv5mkcRKdgBz&_nc_ohc=0Uj5Mh_ir_EAX9GO_3Q&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAdK9ti1-5HYiTp8aw7Nqk978_wTv7yVqKP4F8MRtj7-w&oe=65A1E950",
        content: "Thông báo mới  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nisi ipsa placeat quod fugit voluptatem consequuntur. Odio facere quos labore corrupti consequuntur tenetur, dolor vero nulla quibusdam alias voluptas provident?",
        createdAt: new Date(),
        title: "Thông báo",
      },
    ] as INotify[];
  };
  return { list };
};
