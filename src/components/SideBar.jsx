import { useContext } from "react";
import { categories } from "../constants";
import { VideoContext } from "../context/videoContext";
import { Link } from 'react-router-dom';

const SideBar = () => {
    const {selectedCategory, setSelectedCategory} =
    useContext(VideoContext);

  return (
    <div className="flex flex-col p-1 md:p-4">


        {categories.map((item, i) => (<Link to={'/'} onClick={() => setSelectedCategory(item)} key={i}></Link>
              <div
              className={` ${selectedCategory.name === item.name && 'bg-[#2d2d2d]'} flex gap-2 py-4 px-2 md:px-3 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d]`}
            >
              <span className="max-md:text-2xl">{item.icon}</span>
  
              <span className="max-md:hidden line-clamp-1">{item.name}</span>
            </div>

        ),{ item.divider && <hr /> }
             </div>
        )}


       </div>
};

export default SideBar;