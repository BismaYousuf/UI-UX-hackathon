'use client'

import { useParams } from 'next/navigation'
import ProductDetail from '@/components/ProductDetails'

export default function ProductPage() {
  const { id } = useParams()
  
  return <ProductDetail id={id as string} addToCart={function (product: any): void {
    throw new Error('Function not implemented.')
  } } />
}

