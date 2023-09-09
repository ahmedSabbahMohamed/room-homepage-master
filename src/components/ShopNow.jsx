'use client'

import Image from "next/image"
import arrowIcon from "@/assets/images/icon-arrow.svg"

function ShopNow() {
  return (
    <>
    <div>
        <button className="text-very-dark-gray text-3xl uppercase tracking-[15px] ml-10 mt-8 hover:text-dark-gray">
            ShopNow
            <Image className="inline-block ml-10" src={ arrowIcon } alt="icon-arrow" />
        </button>
    </div>
    </>
  )
}

export default ShopNow