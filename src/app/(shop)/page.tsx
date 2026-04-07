import { headingFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      Hola mundo
      <h1 className={headingFont.className}>Home Page</h1>
    </div>
  );
}
