import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ShopLine from '@/components/Shop'
import Field from '@/components/Field'
import Header from '@/components/Header'
import Page from '@/components/Page'


const item =
  [
    { id: 1, src: '/Images/ShopPage/product1.png', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/hero/3' },
    { id: 1, src: '/Images/ShopPage/product2.png', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/hero/4' },
    { id: 1, src: '/Images/ShopPage/product3.png', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/hero/5' },
    { id: 1, src: '/Images/ShopPage/product4.png', name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/hero/6' },
    { id: 1, src: '/Images/ShopPage/product5.png', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/shop/5' },
    { id: 1, src: '/Images/ShopPage/product6.png', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/shop/6' },
    { id: 1, src: '/Images/ShopPage/product7.png', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/shop/7' },
    { id: 1, src: '/Images/ShopPage/product8.png', name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/shop/8' },
    { id: 1, src: '/Images/ShopPage/product9.png', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/shop/9' },
    { id: 1, src: '/Images/ShopPage/product10.png', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/shop/10' },
    { id: 1, src: '/Images/ShopPage/product11.png', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/shop/11' },
    { id: 1, src: '/Images/ShopPage/product12.png', name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/shop/12' },
    { id: 1, src: '/Images/ShopPage/product13.png', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/shop/13' },
    { id: 1, src: '/Images/ShopPage/product14.png', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/shop/14' },
    { id: 1, src: '/Images/ShopPage/product15.png', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/shop/15' },
    { id: 1, src: '/Images/ShopPage/product16.png', name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/shop/16' },
  ]



function Shop() {
  return (

    <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
  <div className="bg-[#faf4f4]">
    <Header />
  </div>
  <div className="relative text-black">
    <Image
      src="/Images/ShopPage/shophero.png" alt="Shop Banner"
      height={400}
      width={1600}
      className="w-full h-40 md:h-auto object-cover"
    />
    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold">
      Shop
    </h1>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
      <p className="text-gray-700 text-xs md:text-xl flex items-center">
        <Link href="/" className="font-bold hover:underline">Home</Link>
        <span className="font-bold mx-2">{'>'}</span>
        <Link href="/shop" className="hover:underline">Shop</Link>
      </p>
    </div>
  </div>

  <div className="my-6">
    <ShopLine />
  </div>

  <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {item.map((item) => (
        <div key={item.id} className="flex flex-col text-left mx-auto h-[300px] w-full">
          <Image
            src={item.src}
            alt={item.name}
            height={300}
            width={350}
            className="rounded-lg h-[300px] w-full object-cover"
          />
          <p className="text-sm font-medium">{item.name}</p>
          <h3 className="text-xl font-semibold">{item.price}</h3>
        </div>
      ))}
    </div>

    <div className="justify-center mx-auto">
      <Page />
    </div>
  </div>
  
  <Field />
</div>

  )
}

export default Shop