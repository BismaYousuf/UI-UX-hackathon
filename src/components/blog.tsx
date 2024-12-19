import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MessageCircle, Share2, ThumbsUp } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
    date: "10 February 2022",
    image: "/why 2.png",
    likes: 24,
    comments: 12,
  },
  {
    id: 2,
    title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
    date: "10 February 2022",
    image: "/pizza.png",
    likes: 18,
    comments: 8,
  },
  {
    id: 3,
    title: "Curabitur rutrum velit ac congue malesuada",
    date: "10 February 2022",
    image: "/why 1.png",
    likes: 32,
    comments: 16,
  },
]

export default function BlogSection() {
  return (
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-black">
      {/* Section heading */}
      <div className="text-center mb-12 sm:mb-16">
        <span className="font-['Great_Vibes'] text-2xl sm:text-3xl text-[#FF9F0D]">Blog Post</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 sm:mt-4 text-white">
          <span className="text-[#FF9F0D]">La</span>test News & Blog
        </h2>
      </div>

      {/* Blog posts grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="bg-transparent border-white text-white">
            <CardHeader className="p-0">
              <div className="relative aspect-[4/3] sm:aspect-[16/9]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <time className="text-sm sm:text-base text-[#FF9F0D]">{post.date}</time>
              <h3 className="text-xl sm:text-2xl font-bold mt-2 sm:mt-4 mb-4 sm:mb-6 line-clamp-2">{post.title}</h3>
              <Link 
                href="#" 
                className="text-sm sm:text-base text-white hover:text-[#FF9F0D] transition-colors"
              >
                Learn More
              </Link>
            </CardContent>
            <CardFooter className="p-4 sm:p-6 pt-0 flex justify-start sm:justify-end gap-2 sm:gap-4">
              <button className="flex items-center gap-1 sm:gap-2 text-white hover:text-[#FF9F0D] transition-colors">
                <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="sr-only">Like</span>
                <span className="text-xs sm:text-sm">{post.likes}</span>
              </button>
              <button className="flex items-center gap-1 sm:gap-2 text-white hover:text-[#FF9F0D] transition-colors">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="sr-only">Comment</span>
                <span className="text-xs sm:text-sm">{post.comments}</span>
              </button>
              <button className="flex items-center gap-1 sm:gap-2 text-white hover:text-[#FF9F0D] transition-colors">
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="sr-only">Share</span>
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
