'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function Checkout() {
  const [sameAsShipping, setSameAsShipping] = useState(false)
  
  const orderItems = [
    {
      name: "Chicken Tikka Kebab",
      price: "50$",
      image: "/placeholder.svg"
    },
    {
      name: "Chicken Tikka Kebab",
      price: "50$",
      image: "/placeholder.svg"
    },
    {
      name: "Chicken Tikka Kebab",
      price: "50$",
      image: "/placeholder.svg"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" />
              </div>
              <div>
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" />
              </div>
              <div className="col-span-2">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" />
              </div>
              <div className="col-span-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" type="tel" />
              </div>
              <div className="col-span-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" />
              </div>
              <div className="col-span-2">
                <Label htmlFor="country">Country</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" />
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP code</Label>
                <Input id="zipCode" />
              </div>
              <div className="col-span-2">
                <Label htmlFor="address1">Address 1</Label>
                <Input id="address1" />
              </div>
              <div className="col-span-2">
                <Label htmlFor="address2">Address 2</Label>
                <Input id="address2" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Billing Address</h2>
            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="sameAddress" 
                  checked={sameAsShipping}
                  onCheckedChange={(checked) => setSameAsShipping(checked as boolean)}
                />
                <label htmlFor="sameAddress">Same as shipping address</label>
              </div>
            </div>
            {!sameAsShipping && (
              <div className="grid grid-cols-2 gap-4">
                {/* Billing address fields - same structure as shipping */}
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => window.history.back()}>
              Back to cart
            </Button>
            <Button className="bg-[#FF9F0D]">
              Proceed to shipping
            </Button>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {orderItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-2 border-t pt-4">
            <div className="flex justify-between">
              <span>Sub-total</span>
              <span>150$</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>25%</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>54.76$</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span>432.65$</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

