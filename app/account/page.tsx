import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Field from '@/components/Field';

function Account() {
  return (
    <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
      <div className="bg-gray-100">
        <Header />
      </div>
      <div className="relative text-black">
        <Image
          src="/Images/Account/accounthero.png"
          alt="Shop Banner"
          height={400}
          width={1600}
          className="w-full h-[200px] md:h-auto object-cover"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold text-center">
          My Account
        </h1>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-16">
          <p className="text-gray-700 text-xs md:text-xl flex items-center">
            <Link href="/" className="font-bold hover:underline">
              Home
            </Link>
            <span className="font-bold mx-2">{'>'}</span>
            <Link href="/account" className="hover:underline">
              My Account
            </Link>
          </p>
        </div>
      </div>
      <div className="mt-8 grid gap-6 sm:gap-8 mx-4 lg:mx-16 grid-cols-1 lg:grid-cols-2">
        <div className="p-4 rounded border border-gray-300 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold my-4">Log In</h2>
          <div className="flex flex-col mb-4">
            <label htmlFor="username" className="my-2 text-gray-700">
              Username or Email Address
            </label>
            <input
              type="text"
              id="username"
              className="w-full sm:w-[300px] border border-gray-400 rounded p-2"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="my-2 text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full sm:w-[300px] border border-gray-400 rounded p-2"
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-800">
              Remember me
            </label>
          </div>
          <div className="flex flex-col sm:flex-row items-center ">
            <button className="border border-black font-medium text-black px-10 py-3 rounded-xl hover:text-white hover:bg-gray-700">
              Log In
            </button>
            <p className="ml-0 sm:ml-6 mt-4 sm:mt-0 text-gray-500 text-sm hover:underline cursor-pointer">
              Forget Your Password?
            </p>
          </div>
        </div>
        <div className="p-4 rounded border border-gray-300 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold my-4">Register</h2>
          <div className="flex flex-col mb-4">
            <label htmlFor="register-email" className="text-gray-700">
              Email Address
            </label>
            <input
              type="text"
              id="register-email"
              className="w-full sm:w-[300px] border border-gray-400 rounded p-2"
            />
          </div>
          <p className="text-gray-500 mb-4">
            A link to set a new password will be sent to your email address.
          </p>
          <p className="text-gray-500 mb-4">
            Your personal data will be used to support your experience on this
            website, manage access to your account, and for other purposes
            described in our{' '}
            <span className="font-bold text-gray-700">privacy policy</span>.
          </p>
          <button className="border border-black font-medium text-black px-10 py-3 rounded-xl hover:text-white hover:bg-gray-700">
            Register
          </button>
        </div>
      </div>
      <Field />
    </div>
  );
}

export default Account;
