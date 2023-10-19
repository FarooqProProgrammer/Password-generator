import React from 'react'

export default function Cta() {
    return (
        <section className="bg-black body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                    <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
                        Your passwords, wherever you are
                    </h1>
                    <button className="flex-shrink-0 text-white bg-[#FE3E57] border-0 py-2 px-8 focus:outline-none hover:bg-[#FE3E57] rounded text-lg mt-10 sm:mt-0">
                        Try Free For 14 days
                    </button>
                </div>
            </div>
        </section>

    )
}
