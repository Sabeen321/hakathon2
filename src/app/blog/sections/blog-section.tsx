//import BlogCard from "../components/blog-card";
import Image from "next/image";
// import { Button } from "@/components/ui/button";


export default function BlogSection() {
  return (
    <section className="flex flex-col gap-12 w-full lg:w-[820px]">
      {/* {blog.map((item: Blog, index: number) => ( */}
         <Image src="/pictures/blog1.png" width={816} height={500} alt="images"></Image>
         <p className="text-xl md:text-[30px] font-medium">Going all-in with millennial design</p>
         <p className="text-[13px] md:text-[15px] text-[#9F9F9F]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
           mauris vitae ultricies leo integer malesuada nunc. In nulla
           posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
           at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
           in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
           mattis nunc sed blandit libero. Pellentesque elit ullamcorper
           dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
           euismod elementum.
         </p>

         <Image src="/pictures/blog2.png" width={816} height={500} alt="images"></Image>
         <p className="text-xl md:text-[30px] font-medium">Exploring new ways of decorating</p>
         <p className="text-[13px] md:text-[15px] text-[#9F9F9F]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
           mauris vitae ultricies leo integer malesuada nunc. In nulla
           posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
           at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
           in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
           mattis nunc sed blandit libero. Pellentesque elit ullamcorper
           dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
           euismod elementum.
         </p>

         <Image src="/pictures/blog3.png" width={816} height={500} alt="images"></Image>
         <p className="text-xl md:text-[30px] font-medium">Handmade pieces that took time to make</p>
         <p className="text-[13px] md:text-[15px] text-[#9F9F9F]">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
           mauris vitae ultricies leo integer malesuada nunc. In nulla
           posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
           at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
           in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
           mattis nunc sed blandit libero. Pellentesque elit ullamcorper
           dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
           euismod elementum.
         </p>
         <div className=" flex gap-2 justify-center " >
     <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">1</button>
     <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">2</button>
     <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">3</button>
     <button className="w-[4rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">Next</button>
     </div>
    </section>
    
  );
}

// function BlogCard({ image, header }: Blog) {
//   return (
//     <div className="flex flex-col gap-3">
//       <Image
//         src={image}
//         alt="Blog"
//         height={817}
//         width={950}
//         className="rounded-[10px]"
//       />

//       <div className="flex flex-col gap-3">
//         <div className="flex flex-col gap-2">
//           <div className="flex items-center gap-5">
//             <div className="flex items-center gap-1">
//               <Image
//                 src={`/images/admin.png`}
//                 alt=""
//                 height={20}
//                 width={20}
//               />
//                <div className="flex flex-col gap-1.5">
           
//           </div>
//         </div>

//               <p className="text-xs md:text-base text-[#9F9F9F]">Admin</p>
//             </div>
//             <div className="flex items-center gap-1">
//               <Image
//                 src={`/images/date.png`}
//                 alt=""
//                 height={16}
//                 width={16}
//               />

//               <p className="text-xs md:text-base text-[#9F9F9F]">
//                 17 Sept, 2024
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col gap-1.5">
//             <p className="text-xl md:text-[30px] font-medium">{header}</p>
//             <p className="text-[13px] md:text-[15px] text-[#9F9F9F]">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
//               mauris vitae ultricies leo integer malesuada nunc. In nulla
//               posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
//               at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
//               in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
//               mattis nunc sed blandit libero. Pellentesque elit ullamcorper
//               dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
//               euismod elementum.
//             </p>
//           </div>
//         </div>
//         <button className="text-[13px] md:text-base w-fit underline pl-0 ">Read More</button>
//         {/* <Button>
//         //   asChild
//         //   variant={`link`}
//         //   className="text-[13px] md:text-base w-fit underline pl-0"
        
//           <Link  className="text-[13px] md:text-base w-fit underline pl-0" href={`/`}>Read More</Link>
//         </Button> */}
//       </div>
    
//   );
// }

// // const blog: Blog[] = [
// //   {
// //     image: "/pictures/blog1.png",
// //     header: ,
// //   },
// //   {
// //     image: "/pictures/blog2.png",
// //     header: "",
// //   },
// //   {
// //     image: "/pictures/blog3.png",
// //     header: "",
// //   },
// // ];

// // interface Blog {
// //   image: string;
// //   header: string;
// // }