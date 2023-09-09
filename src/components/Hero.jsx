'use client'

import Image from "next/image"
import hero1 from "@/assets/images/desktop-image-hero-1.jpg"
import hero2 from "@/assets/images/desktop-image-hero-2.jpg"
import hero3 from "@/assets/images/desktop-image-hero-3.jpg"
import Text from "./Text"
import ShopNow from "./ShopNow"
import leftArrow from "@/assets/images/icon-angle-left.svg"
import rightArrow from "@/assets/images/icon-angle-right.svg"

function Hero() {
  return (
    <>
    <div className="grid grid-cols-12">

        <div className="col-span-12 lg:col-span-7 relative">

            <Image className="hero-img w-full h-auto" src={ hero1 } alt="image-desktop" />
            <Image className="hero-img hidden w-full h-auto" src={ hero2 } alt="image-desktop" />
            <Image className="hero-img hidden w-full h-auto" src={ hero3 } alt="image-desktop" />

            {/* arrows */}
            <div className="absolute bottom-0 right-0 lg:-right-48 flex">

                <button className="w-24 h-20 grid place-items-center bg-very-dark-gray hover:bg-dark-gray">
                    <Image src={ leftArrow } alt="left-arrow" />
                </button>
                <button className="w-24 h-20 grid place-items-center bg-very-dark-gray hover:bg-dark-gray">
                    <Image src={ rightArrow } alt="right-arrow" />
                </button>

            </div>

        </div>

        <div className="col-span-12 lg:col-span-5 grid place-items-center">
            
            <div className="hero-text mt-5">
                
                <Text
                    addHeadingClass={ "" }
                    heading={ "Discover innovative ways to decorate" }
                    addParaClass={ "" }
                    para={ "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love." }
                />

                <ShopNow />

            </div>

            <div className="hero-text hidden">
                
                <Text
                    addHeadingClass={ "text-[4rem] md:text-3xl md:leading-[2] lg:text-[4rem] lg:leading-[1.4]" }
                    heading={ "We are available all across the globe" }
                    addParaClass={ "" }
                    para={ " With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today." }
                />

                <ShopNow />

            </div>

            <div className="hero-text hidden">
                
                <Text
                    addHeadingClass={ "text-[4rem] md:text-3xl md:leading-[2] lg:text-[4rem] lg:leading-[1.4]" }
                    heading={ "Manufactured with the best materials" }
                    addParaClass={ "" }
                    para={ "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office." }
                />

                <ShopNow />

            </div>

        </div>

    </div>
    </>
  )
}

export default Hero