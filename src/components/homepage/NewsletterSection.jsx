import { useState } from "react";

function NewsletterSection() {
  return (
    <section className="relative  bg-white py-20">
      <div className="container  mx-auto flex flex-col md:flex-row items-center justify-center justify-between gap-[24px] px-6">
        {/* Left Image */}
        <div className="flex-shrink-0">
          <img
            src="https://pikaso.cdnpk.net/private/production/1975024058/upload.png?token=exp=1777939200~hmac=144080876827f0ee7871e288c75fbbb46fb5192e4a19d386c5c776390711442f" 
            alt="Left Model"
            className="h-[600px]  w-[350px] object-cover rounded-lg"
          />
        </div>

        {/* Center Content */}
        <div className="max-w-lg text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Subscribe To Our Newsletter
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem.
          </p>

          {/* Input + Button */}
          <div className="flex flex-col  items-center justify-center gap-8 ">
            <input
              type="email"
              placeholder="michael@gmail.com"
              className="w-full sm:w-[300px] px-4 py-3 rounded-md border border-gray-300 shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
              Subscribe Now
            </button>
          </div>
        </div>


        {/* Right Image */}
        <div className="flex-shrink-0">
          <img
            src="https://pikaso.cdnpk.net/private/production/2275254113/enhanced-optimized.jpg?token=exp=1777939200~hmac=91515acf8e0aef16374210a8e92ff22bb426828f9f12d76f2473d0a3cd402e98&preview=1" 
            alt="Right Model"
            className="h-[600px]  w-[350px] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t mt-20 py-10 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm space-y-4 md:space-y-0">
          {/* Left Logo */}
          <span className="font-bold text-xl text-gray">Fasco</span>

          {/* Center Links */}
          <div className="flex gap-6">
            <a href="#">Support Center</a>
            <a href="#">Invoicing</a>
            <a href="#">Contract</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">FAQs</a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400">Copyright © 2023 Fasco. All Rights Reserved.</p>
        </div>
      </footer>
    </section>
  );
}

export default NewsletterSection;
