import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

type NavTypes = {
  path?: string;
  name?: string;
  id?: number;
}[];

export default function MobileDrawer() {
  const Navlinks: NavTypes = [
    { id: 0, name: "All", path: "/all" },
    { id: 1, name: "Shirts", path: "/shirts" },
    { id: 2, name: "Shoes", path: "/shoes" },
    { id: 3, name: "Accessories", path: "/accessories" },
  ];
  return (
    <Drawer>
      <DrawerTrigger>
        <Menu size={20} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>STRIDE STORE</DrawerTitle>
          <DrawerDescription>menu</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <div className="flex flex-col  items-center gap-3">
            {Navlinks.map((index) => (
              <Link
                className="text-gray-300 pb-1 "
                key={index.id}
                href={`${index.path}`}
              >
                {index.name}
              </Link>
            ))}
            <Button>Login / Signup</Button>
          </div>
          <DrawerClose>
            <Button variant="destructive">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
