'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronRight, Search} from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([0, 8000])

  return (
    <>
  
      <div className="relative w-full h-[410px] bg-black m-auto">
        {/* Background Image */}
        <Image
          src={'/menubg.png'}
          alt={'Menu Background'}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />

        {/* Heading on Top of Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 md:px-8">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            Our Shop
          </h1>

          {/* Paragraph with Hover Effect */}
          <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
            <span className="transition-colors duration-300">Home</span>
            <ChevronRight
              size={16}
              className="text-white transition-colors duration-300 group-hover:text-orange-500"
            />
            <span className="transition-colors duration-300 text-orange-500">Shop</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[312px] space-y-8">
            <div className="relative">
              <Input
                placeholder="Search Product"
                className="pl-4 pr-10 h-[46px] bg-[#FFF5E9]"
              />
              <Button
                size="sm"
                className="absolute right-0 top-0 h-full px-4 bg-[#FF9F0D]"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Category</h3>
                <div className="space-y-2">
                  {['Sandwiches', 'Burger', 'Chicken Chup', 'Drink', 'Pizza', 'Thai', 'Non Veg', 'Uncategorized'].map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={category} />
                      <label htmlFor={category} className="text-sm">{category}</label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Filter By Price</h3>
                <Slider
                  defaultValue={[0, 8000]}
                  max={8000}
                  step={100}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mt-6"
                />
                <div className="flex justify-between text-sm">
                  <span>From ${priceRange[0]}</span>
                  <span>to ${priceRange[1]}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Sort By:</span>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(15)].map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="relative">
               <Link href='/ShopDetailed'><Image
                      src="/Mask Group (5).png"
                      alt="Product"
                      width={300}
                      height={200}
                      className="w-full h-[200px] object-cover"
                    /></Link>     
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2">Fresh Lime</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[#FF9F0D]">$38.00</span>
                      <span className="text-gray-400 line-through">$45.00</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}
