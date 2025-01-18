//src\components\OurMenu.tsx
import { Great_Vibes as GreatVibes } from 'next/font/google'
import Image from 'next/image'


const greatVibes = GreatVibes({ 
  weight: '400',
  subsets: ['latin'],
})

const menuCategories = [
  { name: 'Breakfast', active: true },
  { name: 'Lunch', active: false },
  { name: 'Dinner', active: false },
  { name: 'Dessert', active: false },
  { name: 'Drink', active: false },
  { name: 'Snack', active: false },
  { name: 'Suops', active: false },
]

const menuItems = [
  {
    name: 'Lettuce Leaf',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: '12.5',
    image: '/01.png',
  },
  {
    name: 'Fresh Breakfast',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: '14.5',
    image: '/05.png',
  },
  {
    name: 'Mild Butter',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: '12.5',
    image: '/02.png',
  },
  {
    name: 'Fresh Bread',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: '12.5',
    image: '/06.png',
  },
  {
    name: 'Glow Cheese',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: '12.5',
    image: '/03.png',
  },
  {
    name: 'Italian Pizza',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: '14.5',
    image: '/07.png',
  },
  {
    name: 'Silice Beef',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: '12.5',
    image: '/04.png',
  },
  {
    name: 'Mushroom Pizza',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: '12.5',
    image: '/08.png',
  },
]

export default function MenuSection() {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className={`${greatVibes.className} text-[#FF9F0D] text-3xl mb-2`}>
            Choose & pick
          </h3>
          <h2 className="text-5xl font-bold">
            <span className="text-[#FF9F0D]">Fr</span>
            <span className="text-white">om Our Menu</span>
          </h2>
        </div>

        <nav className="flex justify-center gap-8 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.name}
              className={`text-xl ${
                category.active ? 'text-[#FF9F0D] font-bold' : 'text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 sm:w-40 md:w-96 lg:w-[366px]">
  <div className="relative aspect-square rounded-lg overflow-hidden">
    <Image
      src="/00.png"
      alt="Featured dish"
      width={366}
      height={362}
      className="object-cover w-full h-full"
    />
  </div>
</div>



          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {menuItems.map((item) => (
              <div key={item.name} className="flex gap-4 items-start">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-white text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-white/80 text-sm mb-2">{item.description}</p>
                  <p className="text-[#FF9F0D] font-bold">{item.price}$</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

