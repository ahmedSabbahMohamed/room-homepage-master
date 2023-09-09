'use client'

import Image from "next/image"
import arrowIcon from "@/assets/images/icon-arrow.svg"

function ShopNow() {
  return (
    <>
    <div>
        <button className="text-very-dark-gray text-xl uppercase tracking-[10px] md:text-4xl md:tracking-[15px] mt-8 hover:opacity-70 flex flex-row">
            <span className="inline-block">Shop Now</span>
            <Image className="inline-block ml-10" src={ arrowIcon } alt="icon-arrow" />
        </button>
    </div>
    </>
  )
}

export default ShopNow