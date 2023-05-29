import {
  GiBowlingStrike,
  GiCampingTent,
  GiCastle,
  GiFarmTractor,
  GiIsland,
  GiPalmTree,
  GiTreehouse,
  GiWatchtower,
  GiWindmill,
  GiWoodCabin,
} from "react-icons/gi";
import {
  TbBed,
  TbBuildingPavilion,
  TbCactus,
  TbChefHat,
  TbMountain,
  TbSailboat,
  TbUfo,
} from "react-icons/tb";
import {
  MdHouseboat,
  MdOutlineBlinds,
  MdOutlineColorLens,
  MdOutlineFreeBreakfast,
  MdOutlineSurfing,
} from "react-icons/md";
import { BsBuildings, BsFire, BsWater } from "react-icons/bs";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { FaSwimmingPool, FaUmbrellaBeach } from "react-icons/fa";

const categories = [
  {
    label: "Castles",
    href: "/castles",
    icon: GiCastle,
  },
  {
    label: "Rooms",
    href: "/rooms",
    icon: TbBed,
  },
  {
    label: "Amazing views",
    href: "/amazing-views",
    icon: MdOutlineBlinds,
  },
  {
    label: "Beachfront",
    href: "/beachfront",
    icon: BsWater,
  },
  {
    label: "Windmills",
    href: "/windmills",
    icon: GiWindmill,
  },
  {
    label: "Tiny homes",
    href: "/tiny-homes",
    icon: HiOutlineHomeModern,
  },
  {
    label: "Farms",
    href: "/farms",
    icon: GiFarmTractor,
  },
  {
    label: "Amazing pools",
    href: "/amazing-pools",
    icon: FaSwimmingPool,
  },
  {
    label: "OMG!",
    href: "/omg",
    icon: TbUfo,
  },
  {
    label: "Bed & breakfasts",
    href: "/bed-and-breakfasts",
    icon: MdOutlineFreeBreakfast,
  },
  {
    label: "Islands",
    href: "/islands",
    icon: GiIsland,
  },
  {
    label: "Houseboats",
    href: "/houseboats",
    icon: MdHouseboat,
  },
  {
    label: "Treehouses",
    href: "/treehouses",
    icon: GiTreehouse,
  },
  {
    label: "Top of the world",
    href: "/top-of-the-world",
    icon: TbMountain,
  },
  {
    label: "Trending",
    href: "/trending",
    icon: BsFire,
  },
  {
    label: "Design",
    href: "/design",
    icon: BsBuildings,
  },
  {
    label: "Towers",
    href: "/towers",
    icon: GiWatchtower,
  },
  {
    label: "Camping",
    href: "/camping",
    icon: GiCampingTent,
  },
  {
    label: "Creative spaces",
    href: "/creative-spaces",
    icon: MdOutlineColorLens,
  },
  {
    label: "Cabins",
    href: "/cabins",
    icon: GiWoodCabin,
  },
  {
    label: "Play",
    href: "/play",
    icon: GiBowlingStrike,
  },
  {
    label: "Tropical",
    href: "/tropical",
    icon: GiPalmTree,
  },
  {
    label: "Boats",
    href: "/boats",
    icon: TbSailboat,
  },
  {
    label: "Chef's kitchens",
    href: "/chefs-kitchens",
    icon: TbChefHat,
  },
  {
    label: "Surfing",
    href: "/surfing",
    icon: MdOutlineSurfing,
  },
  {
    label: "Desert",
    href: "/Desert",
    icon: TbCactus,
  },
  {
    label: "Historical homes",
    href: "/historical-homes",
    icon: TbBuildingPavilion,
  },
  {
    label: "Beach",
    href: "/beach",
    icon: FaUmbrellaBeach,
  },
];

export default categories;
