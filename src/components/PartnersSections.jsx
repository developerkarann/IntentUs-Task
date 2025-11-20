import React from "react";

export default function PartnersSection() {
    const logos = [
        { name: "Manish Malhotra", src: "https://framerusercontent.com/images/w5ZVnf7V2wVbtVzxpI79VvRsSzk.png?scale-down-to=512&width=833&height=342" },
        { name: "", src: "https://framerusercontent.com/images/BSY8GZqoESE3AkBe4qY7ZDd58.png?scale-down-to=512&width=1026&height=342" },
        { name: "Hamleys", src: "https://framerusercontent.com/images/w5ZVnf7V2wVbtVzxpI79VvRsSzk.png?scale-down-to=512&width=833&height=342" },
        { name: "De Beers", src: "https://framerusercontent.com/images/0h85IN2BgE2yhfiUw2fbMZCtA.png?scale-down-to=512&width=1172&height=388" },
        { name: "Rahul Mishra", src: "https://framerusercontent.com/images/pi001SMUlnwe4RNrWkUMaJ9LhQ.png?scale-down-to=512&width=1312&height=342" },
        { name: "Raghavendra Rathore", src: "https://framerusercontent.com/images/HL47Jew1CiGDyAbR2CP5gEs0GfY.png?scale-down-to=512&width=774&height=342" },
        { name: "Bridal Asia", src: "/https://framerusercontent.com/images/BSY8GZqoESE3AkBe4qY7ZDd58.png?scale-down-to=512&width=1026&height=342" },
        { name: "", src: "https://framerusercontent.com/images/Y5iHbVm74n6oiZRLLbTSIaqXED8.png?scale-down-to=512&width=789&height=342" },
        { name: "MG", src: "/https://framerusercontent.com/images/CzGYpW3BlWWX0lPP8Wwa2hV74vA.png?width=438&height=342" },
        { name: "JJ Valaya", src: "https://framerusercontent.com/images/lZr7zRJhtiBeg1f8UTwabWuXBEA.png?scale-down-to=512&width=1011&height=342" },
        { name: "", src: "https://framerusercontent.com/images/0eALCUtAS2yq2RF4hXgCjPTVv0.png?scale-down-to=512&width=873&height=342" },
        { name: "", src: "https://framerusercontent.com/images/1Sx1ufiz2MCBHOCufuCg61kG7W8.png?scale-down-to=512&width=1539&height=342" },
        { name: "", src: "https://framerusercontent.com/images/1Sx1ufiz2MCBHOCufuCg61kG7W8.png?scale-down-to=512&width=1539&height=342" },
        { name: "", src: "" },
    ];

    return (
        <section className="relative w-full bg-black text-white py-20 flex flex-col mb-20 items-center overflow-hidden">
            {/* Background world map dots (you'll replace with your actual asset) */}
            <div className="absolute inset-0 opacity-20 bg-[url('/https://media.istockphoto.com/id/1203191150/vector/world-map-outline-illustration-as-image.webp?s=1024x1024&w=is&k=20&c=g9YoBHiIs3Vumcaud1acvZmzSFqRJHYSfTlQePh6lwI=')] bg-cover bg-center" />

            <div className="relative z-10 flex flex-col items-center text-center px-4" >
                <h2 style={{fontFamily: ' Arupala Grotesk Trial'}} className="text-3xl md:text-5xl font-bold text-gray-200 mb-2">Trusted By</h2>
                <h3 style={{fontFamily: ' Arupala Grotesk Trial'}} className="text-3xl md:text-5xl font-bold text-blue-300 mb-8">Teams, Brands & Innovators</h3>

                <button className="px-8 py-2 rounded-full text-lg font-medium transition-all border hover:bg-neutral-800 duration-400 cursor-pointer border-[rgb(227,132,99)] bg-[rgb(4,4,4)] backdrop-filter-none h-full will-change-auto origin-center opacity-100" >
                    View all 80+ Clients
                </button>
            </div>

            {/* Logos */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 mt-20 px-6">
                {logos.map((logo) => (
                    <div key={logo.name} className="flex justify-center opacity-80 hover:opacity-100 transition-all">
                        <img src={logo.src} alt={logo.name} className="max-h-14 object-contain" />
                    </div>
                ))}
            </div>
            
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent" />

            {/* Fade Right */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent" />
        </section>
    );
}
