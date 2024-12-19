'use client'

import { useState } from 'react'
import { Star, X, Plus, Minus, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import CheckoutSummary from '@/components/CheckOut'

interface Product {
  id: number
  name: string
  price: number
  rating: number
  image: string
  quantity: number
}

export default function ShoppingCart() {

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Burger",
      price: 35.00,
      rating: 3,
      image: "/08.png",
      quantity: 1
    },
    {
      id: 2,
      name: "Pizza",
      price: 35.00,
      rating: 3,
      image: "/Gourmet.png",
      quantity: 1
    },
    {
      id: 3,
      name: "Chocolate Muffin",
      price: 35.00,
      rating: 3,
      image: "/blog3.png",
      quantity: 1
    },
    {
      id: 4,
      name: "Cheese Platter",
      price: 35.00,
      rating: 3,
      image: "/sweet.png",
      quantity: 1
    }
  ])

  const updateQuantity = (id: number, change: number) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        const newQuantity = Math.max(1, product.quantity + change)
        return { ...product, quantity: newQuantity }
      }
      return product
    }))
  }

  const removeProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id))
  }

  const calculateTotal = (price: number, quantity: number) => {
    return (price * quantity).toFixed(2)
  }

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
           Shopping Card
          </h1>

          {/* Paragraph with Hover Effect */}
          <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
            <span className="transition-colors duration-300">Home</span>
            <ChevronRight
              size={16}
              className="text-white transition-colors duration-300 group-hover:text-orange-500"
            />
            <span className="transition-colors duration-300 text-orange-500">Shopping Card</span>
          </p>
        </div>
      </div>
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-12 gap-4 mb-4 text-sm font-bold text-gray-700">
        <div className="col-span-6 md:col-span-6">Product</div>
        <div className="col-span-2 text-center hidden md:block">Price</div>
        <div className="col-span-2 text-center">Quantity</div>
        <div className="col-span-2 text-center">Total</div>
      </div>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="grid grid-cols-12 gap-4 items-center p-4 bg-white rounded-lg border">
            <div className="col-span-6 md:col-span-6 flex gap-4 items-center">
              <div className="relative w-20 h-20">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-gray-700">{product.name}</h3>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < product.rating ? "fill-[#FF9F0D] stroke-[#FF9F0D]" : "fill-gray-200 stroke-gray-200"}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-2 text-center hidden md:block">
              ${product.price.toFixed(2)}
            </div>
            <div className="col-span-4 md:col-span-2">
              <div className="flex items-center justify-center gap-2 border rounded-full p-1">
                <button
                  onClick={() => updateQuantity(product.id, -1)}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <Minus size={16} className="text-gray-600" />
                </button>
                <span className="w-8 text-center">{product.quantity}</span>
                <button
                  onClick={() => updateQuantity(product.id, 1)}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <Plus size={16} className="text-gray-600" />
                </button>
              </div>
            </div>
            <div className="col-span-2 text-center font-bold">
              ${calculateTotal(product.price, product.quantity)}
            </div>
            <button
              onClick={() => removeProduct(product.id)}
              className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded-full"
            >
              <X size={20} className="text-gray-400" />
            </button>
          </div>
        ))}
      </div>
    </div>
    <CheckoutSummary />
    </>
  )
}

