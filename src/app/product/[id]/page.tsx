import ProductDetail from '@/components/ProductDetails'

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductDetail id={params.id} />
}

