import ShopNow from "./ShopNow"

function Text({ addHeadingClass, heading, addParaClass, para }) {
  return (
    <>
    <div className="">

        <div className="px-10 py-3">

            <h1 className={`text-very-dark-gray font-extrabold mb-8 text-4xl ${ addHeadingClass }`}>
                { heading }
            </h1>

            <p className={`text-dark-gray font-bold text-xl ${ addParaClass }`}>
                { para }
            </p>

            <ShopNow />

        </div>

    </div>
    </>
  )
}

export default Text