import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export default async function FoodCategory() {

  const res = await client.fetch(
 "*[_type == 'landingpage'][0].section[1]{'orangefoodHeading': orangefoodHeading, 'foodHeading': foodHeading, 'foodsubhead': foodsubhead, 'foodcategorycards': foodcategorycards[]{'foodcardimg': foodcardimg.asset->url, 'fooddis': fooddis, 'foodtitle': foodtitle}}"
);
  
  const foodItems = [
    {
      image: "/fastfood.png",
      title: "Fast Food Dish",
      discount: "Save 30%",
      alt: "Fresh salad with mushrooms",
    },
    {
      image: "/Gourmet.png",
      alt: "Sesame seed burger with fresh vegetables",
    },
    {
      image: "/Salad.png",
      alt: "Fresh salad with nuts and pomegranate",
    },
    {
      image: "/Sweet.png",
      alt: "Stack of decorated donuts",
    },
  ];


  return (
    <section className="py-12 md:py-24 bg-black h-[700px]">
      <div className="container mx-auto px-4 max-w-[1320px] ">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="font-['Great_Vibes'] text-[#FF9F0D] text-2xl md:text-3xl block mb-2">
           {res.foodsubhead}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-[#FF9F0D]">{res.orangefoodHeading}</span>
            <span className="text-white">{res.foodHeading}</span>
          </h2>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {(res.foodcategorycards).map((item : any, index: number) => (
            <div
              key={index}
              className={`relative group ${index === 0 ? "bg-orange-400" : ""}`}
            >
              {/* Image Container */}
              <div className="relative h-[200px] md:h-[329px] rounded-lg overflow-hidden">
              <Link href={"/shop"}>
        <div className="relative h-[200px] md:h-[329px] rounded-lg overflow-hidden">
        <Image
          src={res.foodcategorycards[index].foodcardimg}
          alt={item.alt}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110"/>
         </div>
        </Link>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Title Box (Only for first image) */}
              {index === 0 && item.title && (
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                  <div className="font-bold rounded-md">
                    <h3 className="text-lg md:text-xl text-white bg-orange-400 w-full md:w-[206px] h-[40px] md:h-[46px] p-2 md:p-4 flex items-center justify-center md:justify-start">
                    {res.foodcategorycards[index].foodtitle}
                    </h3>
                  </div>
                </div>
              )}

              {/* Discount Badge - Only for first item */}
              {index === 0 && item.discount && (
                <div className="absolute top-2 md:top-4 right-2 md:right-4">
                  <div className="bg-white text-[#FF9F0D] font-bold px-2 md:px-4 py-1 md:py-2 rounded-md text-sm md:text-base">
                  {res.foodcategorycards[index].fooddis}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Background Image */}
      <div className="hidden md:block relative w-full h-screen overflow-hidden">
        <div
          className="absolute w-[444.1px] h-[532.3px] left-[1472px] -top-[249.49px]"
          style={{
            transform: "rotate(6.86deg)",
            backgroundImage: 'url("/bgleave.png")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

