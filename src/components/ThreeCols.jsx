'use client'

import Image from "next/image"
import dark from "@/assets/images/image-about-dark.jpg"
import light from "@/assets/images/image-about-light.jpg"

function ThreeCols() {
  return (
    <>
    {/* three cols */}
    <div className="grid grid-cols-10">

        {/* first col */}
        <div className="col-span-10 lg:col-span-3">

            <Image className="w-full" src={ dark } alt="about-dark" />

        </div>

        {/* col two */}
        <div className="col-span-10 py-2 lg:col-span-4 grid place-items-center px-10">

            <div className="">
                <h2 className="text-very-dark-gray tracking-[6px] font-extrabold text-2xl mb-5">
                    About our furniture
                </h2>

                <p className="text-dark-gray text-lg">
                    Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>

        </div>

        {/* col three */}
        <div className="col-span-10 lg:col-span-3">

            <Image className="w-full h-full" src={ light } alt="about-light" />

        </div>

    </div>
    </>
    )
}

export default ThreeCols