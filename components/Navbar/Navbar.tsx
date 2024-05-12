import Image from "next/image";
import Logo from "@/assets/S.png";
import Link from "next/link";
import { Input } from "../ui/input";
import { ShoppingBag, ShoppingCart, User } from "lucide-react";
import MobileDrawer from "./Drawer";

type NavTypes = {
  path?: string;
  name?: string;
  id?: number;
}[];

export default function Navbar() {
  const Navlinks: NavTypes = [
    { id: 0, name: "All", path: "/all" },
    { id: 1, name: "Shirts", path: "/shirts" },
    { id: 2, name: "Shoes", path: "/shoes" },
    { id: 3, name: "Accessories", path: "/accessories" },
  ];
  return (
    <div>
      <div className="w-full p-2 sticky top-0 left-0 z-[1000] max-md:hidden max-sm:hidden ">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-5">
            <div className="w-[2.5rem] rounded-md border-2">
              <Image alt="logo" src={Logo} />
            </div>
            <div className="flex justify-start items-center gap-5">
              <Link href="/" className="font-bold text-white">
                STRIDE STORE
              </Link>
              <div className="flex justify-start items-center gap-3">
                {Navlinks.map((index) => (
                  <Link
                    className="text-gray-300 pb-1 hover:text-white hover:border-b hover:border-white"
                    key={index.id}
                    href={`${index.path}`}
                  >
                    {index.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-5">
            <Input type="search" placeholder="Search for products ...." />
            <button className="nav-btn" type="submit">
              <User size={20} />
            </button>
            <button className="nav-btn" type="submit">
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
      {/*Mobile drawer*/}
      <div className="w-full p-2 sticky top-0 left-0 z-[1000] md:hidden">
        <div className="flex justify-between items-center gap-5">
          <div className="flex justify-start items-center gap-2">
            <div className="w-[2.5rem] rounded-md border-2">
              <Image alt="logo" src={Logo} />
            </div>
            <div>
              <h1 className="font-bold text-white">STRIDE STORE</h1>
            </div>
          </div>
          
          <div className="flex justify-start items-center gap-2">
            <button className="nav-btn" type="submit">
              <ShoppingCart size={20} />
            </button>
            <div className="p-2 flex justify-center items-center border border-gray-600 bg-black text-gray-300 rounded-md">
              <MobileDrawer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
