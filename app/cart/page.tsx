import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Header from '@/components/Header';
import Field from '@/components/Field';

function Cart() {
  return (
    <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
      <div className="bg-[#faf4f4]">
        <Header />
      </div>
      <div className="relative text-black">
        <Image
          src="/Images/Cart/carthero.png"
          alt="Shop Banner"
          height={400}
          width={1600}
          className="w-full h-[200px] md:h-auto object-cover"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold">
          Cart
        </h1>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
          <p className="text-gray-700 text-xs md:text-xl flex items-center">
            <Link href="/" className="font-bold hover:underline">Home</Link>
            <span className="font-bold mx-2">{'>'}</span>
            <Link href="/shop" className=" hover:underline">Cart</Link>
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 bg-white rounded-lg p-4 sm:p-6">
          <table className="w-full text-xs md:text-lg table-auto border-collapse">
            <thead className="bg-[#FFF9E5] text-gray-800">
              <tr>
                <th className="py-3 text-left">Product</th>
                <th className="py-3 text-left hidden lg:table-cell">Price</th>
                <th className="py-3 text-left">Quantity</th>
                <th className="py-3 text-left">Subtotal</th>
                <th className="py-3 text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="flex flex-col md:flex-row items-center py-4">
                  <Image
                    src="/Images/Cart/cartitem.png"
                    height={120}
                    width={120}
                    alt="Asgaard Sofa"
                  />
                  <p className="ml-4 text-gray-700 text-sm sm:text-base">Asgaard Sofa <br /> x 1</p>
                </td>
                <td className="py-4 text-xs md:text-lg text-gray-500 hidden lg:table-cell">Rs: 250,000.00</td>
                <td className="py-4 text-xs md:text-lg text-gray-500">
                  <input type="number" value="1" className="w-12 text-xs md:text-lg text-center border md:p-2 rounded-md" />
                </td>
                <td className="py-4 text-right text-gray-700 text-xs md:text-sm sm:text-base">Rs: 250,000.00</td>
                <td className="py-4 text-center">
                  <RiDeleteBin6Line className="hidden lg:table-cell text-red-600 ml-4 cursor-pointer hover:text-red-800" size={20} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lg:col-span-1 bg-[#FFF9E5] rounded-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Cart Totals</h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="py-3 text-left">Subtotal</th>
                <th className="py-3 text-right text-gray-400">Rs: 250,000.00</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 text-left font-bold">Total</td>
                <td className="py-3 text-right text-lg font-bold text-yellow-700">Rs: 250,000.00</td>
              </tr>
              <tr>
                <td colSpan={2} className="py-4">
                  <Link href={"/checkout"}>
                    <button className="w-full px-6 py-3 border border-black rounded-xl">
                      Checkout
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="my-10">
        <Field />
      </div>
    </div>
  );
}

export default Cart;
