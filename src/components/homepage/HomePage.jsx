import React from "react";
import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import chanelLogo from "../../assets/icon/Chanel.png";
import louisVuittonLogo from "../../assets/icon/Louis_Vuitton.png";
import pradaLogo from "../../assets/icon/Prada.png";
import denimLogo from "../../assets/icon/Denim.png";



function HomePage() {
    const brands = [
        { name: "CHANEL", logo: chanelLogo },
        { name: "LOUIS VUITTON", logo: louisVuittonLogo },
        { name: "PRADA", logo: pradaLogo },
        { name: "DENIM", logo: denimLogo },
    ]

    return (
        <div className="font-sans">
            {/* Header */}
            <header className="flex justify-between items-center px-10 py-6">
                {/* Logo */}
                <Logo />

                {/* Navigation */}
                <nav className="space-x-8 text-gray-700">
                    <Link to="/home" className="">Home</Link>
                    <Link to="/deals" className="">Deals</Link>
                    <Link to="/home#new-arrivals" className="">New Arrivals</Link>
                    <Link to="/packages" className="">Packages</Link>
                    <Link to="/" className="">Sign in</Link>
                </nav>



                <Link to="/register">
                    <div className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 no-underline">
                        Sign up
                    </div>
                </Link>

            </header>

            {/* Hero Section */}
            <section className="grid grid-cols-3   gap-6 px-10 py-12">
                {/* Left Image */}
                <div className="bg-gray-100 rounded-xl overflow-hidden h-[600px]">
                    <img
                        src="https://pikaso.cdnpk.net/private/production/1912187341/enhanced.jpg?token=exp=1775001600~hmac=36468823c035a5e00ad09fe59e8252056bb7d573ba3b4eaf7da837424f073c6d&preview=1"
                        alt="man"
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>

                {/* Center Section */}
                <div className="flex flex-col h-[600px]">
                    {/* Top Image */}
                    <div className="rounded-xl overflow-hidden h-[180px]">
                        <img
                            src="https://pikaso.cdnpk.net/private/production/1999159426/render.jpg?token=exp=1775001600~hmac=eb760fb044abc6f43dea425d861f43d4966b8fa2ffa7157cb686e49d0c5d4b3f"
                            alt="women-top"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text Block */}
                    <div className="flex flex-col items-center justify-center p-8  rounded-lg  max-w-sm mx-auto">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#484848] mb-2">ULTIMATE</h2>
                        <h1 className="text-6xl  font-medium text-[#484848] uppercase stroke-text">SALE</h1>
                        <p className="text-sm sm:text-base text-neutral-500 tracking-widest uppercase mb-6">NEW COLLECTION</p>
                        <Link to="/shop">
                            <button className="bg-black text-white px-8 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition">
                                SHOP NOW
                            </button>
                        </Link>
                    </div>

                    {/* Bottom Image */}
                    <div className="rounded-xl overflow-hidden h-[180px]">
                        <img
                            src="https://pikaso.cdnpk.net/private/production/2242366394/render.png?token=exp=1775001600~hmac=3078cc8aef06a8f1b24d34fbb5af95a6f16e06bcd07d11c033944cb720e28414"
                            alt="women-bottom"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Image */}
                <div className="bg-gray-100 rounded-xl overflow-hidden h-[600px]">
                    <img
                        src="https://pikaso.cdnpk.net/private/production/1995030481/enhanced.jpg?token=exp=1775001600~hmac=68aab6a9c1acffb8e5cdb11f12f50cc66fc6720e92a36f21333e72a1a20ebbe1&preview=1"
                        alt="man"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* Brand Logos */}
            <section className="flex justify-center items-center md:p-[60px] gap-22 ">
                {brands.map((brand) => (
                    <img
                        key={brand.name}
                        src={brand.logo}
                        alt={brand.name}
                        className="h-12 w-[220px] object-contain"
                    />
                ))}
            </section>
        </div>
    );
}

export default HomePage;
