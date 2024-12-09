import Image from "next/image";

import { IoIosArrowForward } from "react-icons/io";

import { Icon } from "@iconify/react";


const products = [
  {
    id: 1,
    name: "Syltherine",
    fullname: "Stylish cafe chair",
    discount: "-30%",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    image: "/pictures/image1.png",
  },
  {
    id: 2,
    name: "Leviosa",
    fullname: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "",
    image: "/pictures/image2.png",
  },
  {
    id: 3,
    name: "Lolito",
    fullname: "Luxury big sofa",
    discount: "-50%",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/pictures/image3.png",
  },
  {
    id: 4,
    name: "Respira",
    fullname: "Outdoor bar table and stool",
    price: "Rp 500.000",
    originalPrice: "",
    image: "/pictures/image4.png",
  },
];
export default function Cart() {
  return (
    <>
      <div className="relative">
      <Image src="/pictures/ShopeHero.png" width={1440} height={316} alt="ShopeHero"/>
        <div className="absolute top-[50%] left-[50%] flex justify-center flex-col items-center ">
          <h3 className="font-bold text-[1.5rem]"> Contact</h3>
          <div className="flex items-center">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>contact</h3>
          </div>
        </div>
        <div className="">
        <div className="flex gap-[21px] py-4 overflow-x-auto no-scrollbar flex-wrap justify-center w-full">
          {/* Cards for Products */}
          {products.map((product, index) => (
            <div className="bg-white group relative overflow-hidden  w-[285px] md:w-[285px] lg:w-[285px]" key={index}>
              {/* Image Container */}
              <div className="w-full h-[301px]">
                <div
                  className="flex h-full w-full bg-no-repeat  bg-center relative group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url(${product.image})`,
                  }}
                >
                  {/* NEW Badge */}
                  {(index === 3 || index === 5 || index === 7) && (
                    <div className="h-[48px] w-[48px] bg-GreenAccents  rounded-full flex items-center justify-center absolute top-6 right-6">
                      <p className="text-[16px] font-medium text-white">NEW</p>
                    </div>
                  )}
                  {/* Discount Badge */}
                  {(index === 0 || index === 2 || index === 6) && (
                    <div className="h-[48px] w-[48px] bg-RedAccents rounded-full flex items-center 
                    justify-center absolute top-6 right-6">
                      <p className="text-[16px] font-medium text-white">{product.discount}</p>
                    </div>
                  )}
                </div>
                {/* Add to Cart Button */}
                <div className="h-full absolute bottom-0 w-full flex flex-col gap-[24px] items-center 
                justify-center bg-opacity-0 opacity-0 group-hover:bg-opacity-70 group-hover:opacity-100 
                bg-Gray1 transition-opacity duration-300">
                  <button className="text-[16px] font-medium text-primary bg-white px-[52px] py-[12px]">
                    Add to Cart
                  </button>
                  <div className="flex gap-4 text-white text-sm mt-2">
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <Icon icon="gridicons:share" className="" /> Share
                    </button>
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <Icon icon="fluent:arrow-swap-28-regular" className="" /> Compare
                    </button>
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <Icon icon="mingcute:heart-line" className="" /> Like
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="w-fit pt-[16px] pb-[30px] pr-[20px] pl-[16px]">
                <h2 className="text-[24px] font-semibold text-Gray1">{product.name}</h2>
                <h4 className="text-[16px] font-medium text-Gray2">{product.fullname}</h4>
                <div className="w-fit flex gap-[16px] items-center">
                  <p className="text-[20px] font-semibold text-Gray1">{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-[16px] font-normal text-Gray4 line-through">{product.originalPrice}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

       
        <div className="flex gap-[21px] py-4 overflow-x-auto no-scrollbar flex-wrap justify-center w-full">
          {/* Cards for Products */}
          {products.map((product, index) => (
            <div className="bg-white group relative overflow-hidden  w-[285px] md:w-[285px] lg:w-[285px]" key={index}>
              {/* Image Container */}
              <div className="w-full h-[301px]">
                <div
                  className="flex h-full w-full bg-no-repeat  bg-center relative group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url(${product.image})`,
                  }}
                >
                  {/* NEW Badge */}
                  {(index === 3 || index === 5 || index === 7) && (
                    <div className="h-[48px] w-[48px] bg-GreenAccents  rounded-full flex items-center justify-center absolute top-6 right-6">
                      <p className="text-[16px] font-medium text-white">NEW</p>
                    </div>
                  )}
                  {/* Discount Badge */}
                  {(index === 0 || index === 2 || index === 6) && (
                    <div className="h-[48px] w-[48px] bg-RedAccents rounded-full flex items-center 
                    justify-center absolute top-6 right-6">
                      <p className="text-[16px] font-medium text-white">{product.discount}</p>
                    </div>
                  )}
                </div>
                {/* Add to Cart Button */}
                <div className="h-full absolute bottom-0 w-full flex flex-col gap-[24px] items-center 
                justify-center bg-opacity-0 opacity-0 group-hover:bg-opacity-70 group-hover:opacity-100 
                bg-Gray1 transition-opacity duration-300">
                  <button className="text-[16px] font-medium text-primary bg-white px-[52px] py-[12px]">
                    Add to Cart
                  </button>
                  <div className="flex gap-4 text-white text-sm mt-2">
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <Icon icon="gridicons:share" className="" /> Share
                    </button>
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <Icon icon="fluent:arrow-swap-28-regular" className="" /> Compare
                    </button>
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <Icon icon="mingcute:heart-line" className="" /> Like
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="w-fit pt-[16px] pb-[30px] pr-[20px] pl-[16px]">
                <h2 className="text-[24px] font-semibold text-Gray1">{product.name}</h2>
                <h4 className="text-[16px] font-medium text-Gray2">{product.fullname}</h4>
                <div className="w-fit flex gap-[16px] items-center">
                  <p className="text-[20px] font-semibold text-Gray1">{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-[16px] font-normal text-Gray4 line-through">{product.originalPrice}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-[21px] py-4 overflow-x-auto no-scrollbar flex-wrap justify-center w-full">
          {/* Cards for Products */}
          {products.map((product, index) => (
            <div className="bg-white group relative overflow-hidden  w-[285px] md:w-[285px] lg:w-[285px]" key={index}>
              {/* Image Container */}
              <div className="w-full h-[301px]">
                <div
                  className="flex h-full w-full bg-no-repeat  bg-center relative group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url(${product.image})`,
                  }}
                >
                  {/* NEW Badge */}
                  {(index === 3 || index === 5 || index === 7) && (
                    <div className="h-[48px] w-[48px] bg-GreenAccents  rounded-full flex items-center justify-center absolute top-6 right-6">
                      <p className="text-[16px] font-medium text-white">NEW</p>
                    </div>
                  )}
                  {/* Discount Badge */}
                  {(index === 0 || index === 2 || index === 6) && (
                    <div className="h-[48px] w-[48px] bg-RedAccents rounded-full flex items-center 
                    justify-center absolute top-6 right-6">
                      <p className="text-[16px] font-medium text-white">{product.discount}</p>
                    </div>
                  )}
                </div>
                {/* Add to Cart Button */}
                <div className="h-full absolute bottom-0 w-full flex flex-col gap-[24px] items-center 
                justify-center bg-opacity-0 opacity-0 group-hover:bg-opacity-70 group-hover:opacity-100 
                bg-Gray1 transition-opacity duration-300">
                  <button className="text-[16px] font-medium text-primary bg-white px-[52px] py-[12px]">
                    Add to Cart
                  </button>
                  <div className="flex gap-4 text-white text-sm mt-2">
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <Icon icon="gridicons:share" className="" /> Share
                    </button>
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <Icon icon="fluent:arrow-swap-28-regular" className="" /> Compare
                    </button>
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <Icon icon="mingcute:heart-line" className="" /> Like
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="w-fit pt-[16px] pb-[30px] pr-[20px] pl-[16px]">
                <h2 className="text-[24px] font-semibold text-Gray1">{product.name}</h2>
                <h4 className="text-[16px] font-medium text-Gray2">{product.fullname}</h4>
                <div className="w-fit flex gap-[16px] items-center">
                  <p className="text-[20px] font-semibold text-Gray1">{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-[16px] font-normal text-Gray4 line-through">{product.originalPrice}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

         <div className="flex gap-[21px] py-4 overflow-x-auto no-scrollbar flex-wrap justify-center w-full">
          {/* Cards for Products */}
          {products.map((product, index) => (
            <div className="bg-white group relative overflow-hidden  w-[285px] md:w-[285px] lg:w-[285px]" key={index}>
              {/* Image Container */}
              <div className="w-full h-[301px]">
                <div
                  className="flex h-full w-full bg-no-repeat  bg-center relative group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url(${product.image})`,
                  }}
                >
                  {/* NEW Badge */}
                  {(index === 3 || index === 5 || index === 7) && (
                    <div className="h-[48px] w-[48px] bg-GreenAccents  rounded-full flex items-center justify-center absolute top-6 right-6">
                      <p className="text-[16px] font-medium text-white">NEW</p>
                    </div>
                  )}
                  {/* Discount Badge */}
                  {(index === 0 || index === 2 || index === 6) && (
                    <div className="h-[48px] w-[48px] bg-RedAccents rounded-full flex items-center 
                    justify-center absolute top-6 right-6">
                      <p className="text-[16px] font-medium text-white">{product.discount}</p>
                    </div>
                  )}
                </div>
                {/* Add to Cart Button */}
                <div className="h-full absolute bottom-0 w-full flex flex-col gap-[24px] items-center 
                justify-center bg-opacity-0 opacity-0 group-hover:bg-opacity-70 group-hover:opacity-100 
                bg-Gray1 transition-opacity duration-300">
                  <button className="text-[16px] font-medium text-primary bg-white px-[52px] py-[12px]">
                    Add to Cart
                  </button>
                  <div className="flex gap-4 text-white text-sm mt-2">
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <Icon icon="gridicons:share" className="" /> Share
                    </button>
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <Icon icon="fluent:arrow-swap-28-regular" className="" /> Compare
                    </button>
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <Icon icon="mingcute:heart-line" className="" /> Like
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="w-fit pt-[16px] pb-[30px] pr-[20px] pl-[16px]">
                <h2 className="text-[24px] font-semibold text-Gray1">{product.name}</h2>
                <h4 className="text-[16px] font-medium text-Gray2">{product.fullname}</h4>
                <div className="w-fit flex gap-[16px] items-center">
                  <p className="text-[20px] font-semibold text-Gray1">{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-[16px] font-normal text-Gray4 line-through">{product.originalPrice}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex gap-2 justify-center " >
     <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">1</button>
     <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">2</button>
     <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">3</button>
     <button className="w-[4rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">Next</button>
     </div>
     <div className="mb-3 mt-10 flex justify-evenly items-center p-2 w-[100%] h-[8rem] bg-[#F9F1E7]">
        <div className=" ">
          <Image
            src="/pictures/shop1.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />

          <h4 className="font-bold">High Quality</h4>
          <p>crafted from top materials</p>
        </div>
        <div>
          <Image
            src="/pictures/shop2.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <h4 className="font-bold">Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
        <div>
          <Image
            src="/pictures/shop3.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <h4 className="font-bold">Free Shipping</h4>
          <p>Order over 150 $</p>
        </div>
        <div>
          <Image
            src="/pictures/shop4.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <h4 className="font-bold">24 / 7 Support</h4>
          <p>Dedicated support</p>
        </div>
        </div>
       </div>  
        


        
        
    
        
      </div>
        </>
        )
        }



























