import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
//import { Input } from "@/components/ui/input";
import { Link1Icon } from "@radix-ui/react-icons";
//import { useEffect } from "react";

export default function Home() {
  return (
    <div className="flex flex-col  gap-2 items-center p-10">
      <div className="flex flex-col gap-2 justify-start">
        <h1 className="text-[40px]">
          Get the best <br /> shopping Experience
        </h1>
        <p className="text-[14px] text-gray-300">
          Get high end and affordable products dirrectly shipped from CHINA to
          anywhere in Bangladesh.
        </p>
        <a href='https://www.facebook.com/profile.php?id=61558980573091' className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2" type="submit">
          Join our FaceBook Page
          <Link1Icon className="ml-2 h-4 w-4" />
        </a>
      </div>
      <div className="mt-5">
        <Card className="w-[400px] max-sm:w-[350px]">
          <CardHeader>
            <CardTitle className="flex justify-start items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
              Notice
            </CardTitle>
            <CardDescription>
              This site is still under developement. We are trying our best to
              launch the website as fast as possible. Meanwhile we are selling
              our products through FaceBook Market place. In the meantime please join
              our FaceBook page.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
