import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h1 className="text-3xl font-bold text-green-400">FoodExpress</h1>

          <p className="mt-4 text-gray-300 leading-7">
            Fresh food delivered to your doorstep with quality, taste, and fast
            delivery. Enjoy your favorite meals anytime, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">Quick Links</h2>

          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:text-green-400 cursor-pointer">Categories</li>
            <li className="hover:text-green-400 cursor-pointer">Menu</li>
            <li className="hover:text-green-400 cursor-pointer">Cart</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">Contact Us</h2>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-400" />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3">
              <MdEmail className="text-green-400 text-xl" />
              <span>support@foodexpress.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MdLocationOn className="text-green-400 text-xl" />
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>

          <div className="flex gap-5 mt-8 text-2xl">
            <FaFacebookF className="cursor-pointer hover:text-blue-500 duration-300" />

            <FaInstagram className="cursor-pointer hover:text-pink-500 duration-300" />

            <FaXTwitter className="cursor-pointer hover:text-gray-400 duration-300" />

            <FaLinkedinIn className="cursor-pointer hover:text-blue-400 duration-300" />

            <FaGithub className="cursor-pointer hover:text-green-400 duration-300" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-5 text-gray-400">
        © {new Date().getFullYear()} FoodExpress. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
