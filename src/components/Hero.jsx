'use client'

import Image from "next/image"
import hero1 from "@/assets/images/desktop-image-hero-1.jpg"
import hero2 from "@/assets/images/desktop-image-hero-2.jpg"
import hero3 from "@/assets/images/desktop-image-hero-3.jpg"
import Text from "./Text"
import leftArrow from "@/assets/images/icon-angle-left.svg"
import rightArrow from "@/assets/images/icon-angle-right.svg"
import { useState } from "react"

function Hero() {

    let [index, setIndex] = useState(0)

    const slideShow = _ => {
        setIndex(++index)
        if (index === 3) {
            setIndex(index = 0)
        }
        
        let allHeroImages = document.querySelectorAll(".hero-img"),
        allHeroText = document.querySelectorAll(".hero-text")

        allHeroImages.forEach(img => {
            img.classList.add("hidden")
        })

        allHeroText.forEach(text => {
            text.classList.add("hidden")
        })
        
        allHeroImages[index].classList.remove("hidden")
        allHeroText[index].classList.remove("hidden")

    }

    const slideShow2 = _ => {
        setIndex(--index)
        if (index === -1) {
            setIndex(index = 2)
        }
        console.log(index)

        let allHeroImages = document.querySelectorAll(".hero-img"),
        allHeroText = document.querySelectorAll(".hero-text")

        allHeroImages.forEach(img => {
            img.classList.add("hidden")
        })

        allHeroText.forEach(text => {
            text.classList.add("hidden")
        })

        allHeroImages[index].classList.remove("hidden")
        allHeroText[index].classList.remove("hidden")


    }

  return (
    <>
    <div className="grid grid-cols-12">

        <div className="col-span-12 lg:col-span-7 relative">

            <Image className="hero-img w-full h-auto" src={ hero1 } alt="image-desktop" />
            <Image className="hero-img hidden w-full h-auto" src={ hero2 } alt="image-desktop" />
            <Image className="hero-img hidden w-full h-auto" src={ hero3 } alt="image-desktop" />

            {/* arrows */}
            <div className="absolute bottom-0 right-0 lg:-right-[158px] flex">

                <button onClick={e => slideShow2(e)} className="w-[79px] h-20 grid place-items-center bg-very-dark-gray hover:bg-dark-gray">
                    <Image src={ leftArrow } alt="left-arrow" />
                </button>
                <button onClick={e => slideShow(e)} className="w-[79px] h-20 grid place-items-center bg-very-dark-gray hover:bg-dark-gray">
                    <Image src={ rightArrow } alt="right-arrow" />
                </button>

            </div>

        </div>

        <div className="col-span-12 lg:col-span-5 grid place-items-center">
            
            <div className="hero-text">
                
                <Text
                    heading={ "Discover innovative ways to decorate" }
                    para={ "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love." }
                />

            </div>

            <div className="hero-text hidden">
                
                <Text
                    heading={ "We are available all across the globe" }
                    para={ " With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today." }
                />

            </div>

            <div className="hero-text hidden">
                
                <Text
                    heading={ "Manufactured with the best materials" }
                    para={ "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office." }
                />

            </div>

        </div>

    </div>
    </>
  )
}

export default Hero