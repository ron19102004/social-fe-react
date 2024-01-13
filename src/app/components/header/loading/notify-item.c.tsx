import { INotify } from "../../../../hooks/notify.hook";

interface INotifyItemProps {
  value: INotify;
}
const NotifyItem: React.FC<INotifyItemProps> = ({ value }) => {
  return (
    <li className=" cursor-pointer flex justify-start items-center space-x-1 hover:bg-color6 p-3 rounded">
      <div className="basis-1/5 w-14 h-14 ">
        <img
          src={value?.avatar}
          alt="avatar"
          className="w-14 h-14 rounded-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h1 className="line-clamp-2 text-ellipsis">
          {value?.title}:{`"`}
          {value?.content}
          {`"`}
        </h1>
        <p className="text-xs">
          <span>
            {value?.createdAt
              .toISOString()
              .split("T")[0]
              .split("-")
              .reverse()
              .join("/")}
          </span>
          <span>{`(`}</span>
          <span>
            {value?.createdAt.getHours()}
            <sup>giờ</sup>:{value?.createdAt.getMinutes()}
            <sup>phút</sup>
          </span>
          <span>{`)`}</span>
        </p>
      </div>
    </li>
  );
};

export default NotifyItem;
