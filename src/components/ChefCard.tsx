import Image from "next/image"

interface ChefCardProps {
  name: string
  imageUrl: string
}

export function ChefCard({ name, imageUrl }: ChefCardProps) {
  return (
    <div className="relative w-full max-w-[312px] h-[446px] overflow-hidden rounded-lg bg-background transition-all hover:scale-105">
      <div className="relative h-[85%] w-full">
        <Image
          src={imageUrl}
          alt={`Chef ${name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 text-center p-4">
        <h3 className="font-helvetica text-[20px] font-bold leading-7 text-gray-800">
          {name}
        </h3>
        <p className="font-inter text-[18px] leading-[26px] text-gray-800">
          Chef
        </p>
      </div>
    </div>
  )
}

