import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
const HeaderIcon = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-[70%] h-[70%] lg:w-22.5 lg:h-1/2 bg-blue-700 rounded-2xl flex items-center justify-center">
        <FontAwesomeIcon
          icon={faUsers}
          className="text-3xl text-white"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default HeaderIcon;
