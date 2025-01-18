'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronRight, Search } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'

// Mock data for products
const products = [
  { id: 1, name: "Fresh Lime", price: 38.00, oldPrice: 45.00, image: "/Mask Group.png" },
  { id: 2, name: "Chicken Burger", price: 42.00, oldPrice: 50.00, image: "/Mask Group (1).png" },
  { id: 3, name: "Veg Pizza", price: 35.00, oldPrice: 40.00, image: "/Mask Group (3).png" },
  { id: 4, name: "Fruit Salad", price: 28.00, oldPrice: 32.00, image: "/Salad.png" },
  { id: 5, name: "Cheese Sandwich", price: 30.00, oldPrice: 36.00, image: "/bread.png" },
  { id: 6, name: "Iced Coffee", price: 25.00, oldPrice: 30.00, image: "/iced.jpg" },
  { id: 7, name: "Grilled Chicken", price: 45.00, oldPrice: 52.00, image: "/Mask Group (6).png" },
  { id: 8, name: "Veggie Wrap", price: 32.00, oldPrice: 38.00, image: "/veggi.jpg" },
  { id: 9, name: "Chocolate Cake", price: 40.00, oldPrice: 48.00, image: "/Mask Group (4).png" },
  { id: 10, name: "Strawberry Smoothie", price: 22.00, oldPrice: 26.00, image: "/Mask Group (2).png" },
  { id: 11, name: "Beef Steak", price: 55.00, oldPrice: 65.00, image: "/Mask Group (5).png" },
  { id: 12, name: "Caesar Salad", price: 30.00, oldPrice: 35.00, image: "/sd2.jpg" },
  { id: 13, name: "Mushroom Risotto", price: 38.00, oldPrice: 45.00, image: "/mashroom.jpg" },
  { id: 14, name: "Shrimp Pasta", price: 42.00, oldPrice: 50.00, image: "/shrim.jpg" },
  { id: 15, name: "Mango Lassi", price: 20.00, oldPrice: 24.00, image: "/mango.jpg" },
]


export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([0, 8000])
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("newest")

  useEffect(() => {
    let result = products.filter(product => 
      product.price >= priceRange[0] && 
      product.price <= priceRange[1] &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (selectedCategories.length > 0) {
      result = result.filter(product => 
        selectedCategories.some(category => 
          product.name.toLowerCase().includes(category.toLowerCase())
        )
      )
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      default:
        // "newest" - assuming the original order is by newest
        break
    }

    setFilteredProducts(result)
  }, [priceRange, searchTerm, selectedCategories, sortBy])

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  return (
    <>
      <div className="relative w-full h-[410px] bg-black m-auto">
        <Image
          src={'/menubg.png'}
          alt={'Menu Background'}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            Our Shop
          </h1>

          <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
          <Link href={"/"} ><span className="transition-colors duration-300">Home</span></Link>  
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                  {['Sandwiches', 'Burger', 'Chicken', 'Drink', 'Pizza', 'Thai', 'Non Veg', 'Uncategorized'].map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox 
                        id={category} 
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryChange(category)}
                      />
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
                <Select value={sortBy} onValueChange={setSortBy}>
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
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <Link href={`/shop/${product.id}`}>
                    <div className="relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={200}
                        className="w-full h-[200px] object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-2">{product.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[#FF9F0D]">${product.price.toFixed(2)}</span>
                        <span className="text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

