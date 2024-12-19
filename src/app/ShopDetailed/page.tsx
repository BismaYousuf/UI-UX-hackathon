'use client'

import { useState } from "react"
import { Star, Heart, GitCompareIcon as GitDiff, ShoppingBag, Minus, Plus, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { FaFacebookF, FaInstagram, FaTwitter, FaVk } from "react-icons/fa"
import { FiYoutube } from "react-icons/fi"
import ProductDescription from "@/components/productDescription"
import SimilarProducts from "@/components/similarProducts"
import Link from "next/link"

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1)
  
  const thumbnails = [
    "/sd1.png",
    "/sd2.png",
    "/sd3.png",
    "/sd4.png"
  ]

  return (
    <>
      <div className="relative w-full h-[300px] md:h-[410px] bg-black">
        <Image
          src='/menubg.png'
          alt='Menu Background'
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            Shopping Details
          </h1>

          <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
            <span className="transition-colors duration-300">Home</span>
            <ChevronRight
              size={16}
              className="text-white transition-colors duration-300 group-hover:text-orange-500"
            />
            <span className="transition-colors duration-300 text-orange-500">Shopping Details</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Gallery */}
          <div className="lg:w-1/2">
            <div className="flex gap-4">
              <div className="w-32 space-y-4">
                {thumbnails.map((thumb, idx) => (
                  <Image
                    key={idx}
                    src={thumb}
                    alt={`Thumbnail ${idx + 1}`}
                    width={128}
                    height={128}
                    className={`rounded-md border-2 ${idx === 0 ? 'border-[#FF9F0D]' : 'border-transparent'}`}
                  />
                ))}
              </div>
              <div className="flex-1">
                <Image
                  src="/sd5.png"
                  alt="Main product"
                  width={491}
                  height={596}
                  className="rounded-md w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-[#FF9F0D] text-white px-4 py-1 rounded-md text-sm">
                In stock
              </span>
              <div className="flex gap-4 text-gray-500">
                <button className="hover:text-gray-700">Prev</button>
                <button className="hover:text-gray-700">Next</button>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Yummy Chicken Chup
            </h1>

            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
              pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna,
              vitae feugiat pretium donec id elementum.
            </p>

            <div className="border-t border-b border-gray-200 py-4 mb-6">
              <span className="text-3xl font-bold text-gray-800">54.00$</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FF9F0D] text-[#FF9F0D]" />
                ))}
              </div>
              <div className="text-gray-500 text-sm flex items-center gap-2">
                <span>5.0 Rating</span>
                <span className="h-4 w-px bg-gray-300" />
                <span>22 Review</span>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <Card className="flex items-center border border-gray-300">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </Card>
              <Link href='/shoppingCart'>
                <Button className="bg-[#FF9F0D] hover:bg-[#FF9F0D]/90 text-white px-8">
                  <ShoppingBag className="mr-2 h-4 w-4" /> Add to cart
                </Button>
              </Link>
            </div>

            <div className="flex gap-6 text-gray-600 mb-6">
              <button className="flex items-center gap-2 hover:text-gray-800">
                <Heart className="h-5 w-5" /> Add to Wishlist
              </button>
              <button className="flex items-center gap-2 hover:text-gray-800">
                <GitDiff className="h-5 w-5" /> Compare
              </button>
            </div>

            <div className="space-y-2 text-sm border-t border-gray-200 pt-6">
              <p>
                <span className="text-gray-800">Category:</span>{" "}
                <span className="text-gray-600">Pizza</span>
              </p>
              <p>
                <span className="text-gray-800">Tag:</span>{" "}
                <span className="text-gray-600">Our Shop</span>
              </p>
              <div className="flex items-start gap-2">
                <span className="text-gray-800">Share:</span>
                <div className="flex gap-4">
                  <div className="text-gray-600 hover:text-gray-800 w-6 h-6 flex items-center justify-center">
                    <FaFacebookF />
                  </div>
                  <div className="text-gray-600 hover:text-gray-800 w-6 h-6 flex items-center justify-center">
                    <FaTwitter />
                  </div>
                  <div className="text-gray-600 hover:text-gray-800 w-6 h-6 flex items-center justify-center">
                    <FaVk />
                  </div>
                  <div className="text-gray-600 hover:text-gray-800 w-6 h-6 flex items-center justify-center">
                    <FiYoutube />
                  </div>
                  <div className="text-gray-600 hover:text-gray-800 w-6 h-6 flex items-center justify-center">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductDescription />
      <SimilarProducts />
    </>
  )
}

