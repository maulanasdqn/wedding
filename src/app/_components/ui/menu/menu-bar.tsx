import { FC, ReactElement } from "react";
import { FiHome, FiHeart, FiUsers, FiCalendar, FiGift } from "react-icons/fi";

export const MobileMenu: FC = (): ReactElement => {
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-4 left-0 w-full px-4 z-50">
      {/* Menu Container */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <ul className="flex justify-around items-center py-2">
          <li
            className="flex flex-col select-none items-center text-gray-800 cursor-pointer hover:text-red-600"
            onClick={() => handleScrollTo("home")}
          >
            <FiHome className="text-xl" />
            <span className="text-sm">Home</span>
          </li>
          <li
            className="flex flex-col select-none items-center text-gray-800 cursor-pointer hover:text-red-600"
            onClick={() => handleScrollTo("journey")}
          >
            <FiHeart className="text-xl" />
            <span className="text-sm">Cinta</span>
          </li>
          <li
            className="flex flex-col select-none items-center text-gray-800 cursor-pointer hover:text-red-600"
            onClick={() => handleScrollTo("introduce")}
          >
            <FiUsers className="text-xl" />
            <span className="text-sm">Mempelai</span>
          </li>
          <li
            className="flex flex-col select-none items-center text-gray-800 cursor-pointer hover:text-red-600"
            onClick={() => handleScrollTo("event")}
          >
            <FiCalendar className="text-xl" />
            <span className="text-sm">Acara</span>
          </li>
          <li
            className="flex flex-col select-none items-center text-gray-800 cursor-pointer hover:text-red-600"
            onClick={() => handleScrollTo("gift")}
          >
            <FiGift className="text-xl" />
            <span className="text-sm">Gift</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
