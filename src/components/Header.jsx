'use client'

import Image from "next/image"
import logo from "@/assets/images/logo.svg"
import Link from "next/link"
import iconMenu from "@/assets/images/icon-hamburger.svg"
import NavLinks from "./NavLinks"
import closeIcon from "@/assets/images/icon-close.svg"

function Header() {

    const showMenu = _ => {
        let myMenu = document.querySelector(".mobile-menu")
        myMenu.classList.remove("-left-full")
    }

    const closeMenu = _ => {
        let myMenu = document.querySelector(".mobile-menu")
        myMenu.classList.add("-left-full")
    }

  return (
    <>
    <header className="">

        <div className="px-8 py-10 absolute z-50 w-full md:w-1/2">

        <div className="flex flex-row-reverse md:flex-row md:gap-24 justify-between md:justify-normal items-center">

            {/* logo */}
            <div className="logo flex-1 md:flex-shrink-1 md:flex-grow-0 basis-auto">
                <Link href="/">
                    <Image src={ logo } alt="logo" />
                </Link>
            </div>

            {/* desktop nav links */}
            <div className="flex-1 hidden md:block">

                <NavLinks colOrRow={ "flex flex-row gap-5" } />

            </div>

            {/* mobile nav menu */}
            <div className="flex-1 md:hidden">
                <button onClick={ e => showMenu(e) }>
                    <Image src={ iconMenu } alt="menu-icon" />
                </button>
            </div>

        </div>

        </div>


        <div className="mobile-menu absolute -left-full w-full py-10 bg-white shadow-2xl px-6 flex flex-row gap-28 items-center">

            {/* close button */}
            <div className="">
                <button onClick={e => closeMenu(e) }>
                    <Image src={ closeIcon } alt="close-icon" />
                </button>
            </div>

            <div className="">
                <NavLinks colOrRow={ "flex flex-row gap-5" } />
            </div>

        </div>


    </header>
    </>
  )
}

export default Header