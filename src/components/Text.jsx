import ShopNow from "./ShopNow"

function Text({ heading, para }) {
  return (
    <>
    <div className="">

        <div className="px-10 py-3">

            <h1 className={`text-very-dark-gray font-extrabold mb-5 text-4xl leading-[1.4]`}>
                { heading }
            </h1>

            <p className={`text-dark-gray font-bold text-xl`}>
                { para }
            </p>

            <ShopNow />

        </div>

    </div>
    </>
  )
}

export default Text