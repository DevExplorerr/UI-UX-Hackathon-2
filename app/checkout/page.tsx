import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Field from '@/components/Field';

function Checkout() {
  return (
    <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
      <div className="bg-[#faf4f4]">
        <Header />
      </div>
      <div className="relative text-black">
        <Image
          src="/Images/Checkout/checkouthero.png"
          alt="Shop Banner"
          height={400}
          width={1600}
          className="w-full h-[200px] md:h-auto object-cover"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold">
          Checkout
        </h1>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
          <p className="text-gray-700 text-xs md:text-xl flex items-center">
            <Link href="/" className="font-bold hover:underline">Home</Link>
            <span className="font-bold mx-2">{'>'}</span>
            <Link href="/shop" className="hover:underline">Checkout</Link>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="font-semibold text-2xl mb-6">Billing Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block mb-2">First Name</label>
              <input type="text" id="firstName" className="w-full border border-gray-300 rounded p-3" />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-2">Last Name</label>
              <input type="text" id="lastName" className="w-full border border-gray-300 rounded p-3" />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="companyName" className="block mb-2">Company Name (Optional)</label>
            <input type="text" id="companyName" className="w-full border border-gray-300 rounded p-3" />
          </div>
          <div className="mt-4">
            <label htmlFor="country" className="block mb-2">Country / Region</label>
            <input type="text" id="country" className="w-full border border-gray-300 rounded p-3" />
          </div>
          <div className="mt-4">
            <label htmlFor="address" className="block mb-2">Street Address</label>
            <input type="text" id="address" className="w-full border border-gray-300 rounded p-3" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="town" className="block mb-2">Town / City</label>
              <input type="text" id="town" className="w-full border border-gray-300 rounded p-3" />
            </div>
            <div>
              <label htmlFor="province" className="block mb-2">Province</label>
              <input type="text" id="province" className="w-full border border-gray-300 rounded p-3" />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="zip" className="block mb-2">ZIP Code</label>
            <input type="text" id="zip" className="w-full border border-gray-300 rounded p-3" />
          </div>
          <div className="mt-4">
            <label htmlFor="phone" className="block mb-2">Phone</label>
            <input type="text" id="phone" className="w-full border border-gray-300 rounded p-3" />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block mb-2">Email Address</label>
            <input type="email" id="email" className="w-full border border-gray-300 rounded p-3" />
          </div>
          <div className="mt-4">
            <textarea
              id="additionalInfo"
              placeholder="Additional Information"
              className="w-full border border-gray-300 rounded p-3"
              rows={4}
            ></textarea>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="font-semibold text-2xl mb-6">Your Order</h3>
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2 text-left">Product</th>
                <th className="py-2 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 text-gray-600">Asgaard Sofa x 1</td>
                <td className="py-2 text-right">Rs: 250,000.00</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Subtotal</td>
                <td className="py-2 text-right">Rs: 250,000.00</td>
              </tr>
              <tr className="border-t font-semibold">
                <td className="py-2">Total</td>
                <td className="py-2 text-yellow-700 text-right text-xl">Rs: 250,000.00</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-6">
            <div className="flex items-center mb-4">
              <input type="radio" id="bankTransfer" name="payment" className="mr-2" />
              <label htmlFor="bankTransfer">Direct Bank Transfer</label>
            </div>
            <div className="flex items-center mb-4">
              <input type="radio" id="cod" name="payment" className="mr-2" />
              <label htmlFor="cod">Cash On Delivery</label>
            </div>
          </div>
          <button className="w-full py-3 mt-4 border border-black rounded-lg hover:bg-gray-200">
            Place Order
          </button>
        </div>
      </div>
      <div className="my-10">
        <Field />
      </div>
    </div>
  );
}

export default Checkout;
