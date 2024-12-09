import Image from "next/image";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <>
    <div className="border">
      <div className=" flex  justify-between items-center  font-medium 
          text-[20px] gap-x-2 w-[98%] h-full py-7 font-bold w-[1286px] h-[41px] t-[29px] l-[54px]">
        <div className="logo px-8 ">
        <Image  src={"/pictures/logo.png"} alt="logo" width={185} height={41}/>
        
        {/* <Image src={Logo} width={185} height={41} alt="logo"/> */}
        </div>

        <div className="">
        <ul className="flex gap-x-10 w-[430px] h-[24px] t-[38px] l-[505px]  ">
          <Link href="/">
            <li className="w-[66px] h-[24px] t-[38px] l-[505px]">Home</li>
          </Link>
          <Link href={"/shop"}>
            <li className="w-[42px] h-[24px] t-[38px] l-[628px]">Shop</li>
          </Link>
          <Link href={"/blog"}>
            <li className="w-[36px] h-[24px] t-[38px] l-[745px]">Blog</li>
          </Link>
          <Link href="/contact">
            <li className="w-[66px] h-[24px] t-[38px] l-[869px]">Contact</li>
          </Link>
        </ul>
        </div>

        <div className="flex gap-x-6 px-7">
        <MdPersonOutline />
        <CiSearch />
        <GoHeart />
        <Link href="/Cart">< AiOutlineShoppingCart  /></Link>

        </div>


      </div>
      </div> 
    </>
  );
}