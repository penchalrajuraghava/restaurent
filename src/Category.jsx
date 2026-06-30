import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { LiaPastafarianismSolid } from "react-icons/lia";
import { MdDinnerDining } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa6";
import { TbBurger } from "react-icons/tb";

const Categories = [
  {
    id: 1,
    name: "All",
    icon: <TiThSmallOutline className="w-[60px] h-[60px] text-green-500" />,
  },
  {
    id: 2,
    name: "breakfast",
    icon: (
      <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-500" />
    ),
  },
  {
    id: 3,
    name: "soups",
    icon: <LuSoup className="w-[60px] h-[60px] text-green-500" />,
  },
  {
    id: 4,
    name: "pasta",
    icon: (
      <LiaPastafarianismSolid className="w-[60px] h-[60px] text-green-500" />
    ),
  },
  {
    id: 5,
    name: "main_course",
    icon: <MdDinnerDining className="w-[60px] h-[60px] text-green-500" />,
  },
  {
    id: 6,
    name: "pizza",
    icon: <FaPizzaSlice className="w-[60px] h-[60px] text-green-500" />,
  },
  {
    id: 7,
    name: "burger",
    icon: <TbBurger className="w-[60px] h-[60px] text-green-500" />,
  },
];

export default Categories;
