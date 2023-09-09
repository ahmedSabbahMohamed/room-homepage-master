import Link from "next/link"

function NavLinks({ colOrRow }) {
  return (
    <>
    <nav>

        <ul className={ colOrRow }>

            <li className="nav-link">
                    <Link href="/">home</Link>
            </li>
            <li className="nav-link">
                <Link href="/">shop</Link>
            </li>
            <li className="nav-link">
                <Link href="/">about</Link>
            </li>
            <li className="nav-link">
                <Link href="/">contact</Link>
            </li>
     
        </ul>
    </nav>
    </>
  )
}

export default NavLinks