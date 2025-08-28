import { useState } from "react"
import { FaAccessibleIcon } from "react-icons/fa"

export default function Carousel() {
    const [current, setCurrent] = useState(0)
    const ll = 4
    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? ll - 1 : prev - 1))
    }

    const nextSlide = () => {
        setCurrent((prev) => (prev === ll - 1 ? 0 : prev + 1))
    }
    return (

        <div className="">
            <div className="relative w-full min-h-40 overflow-hidden rounded-2xl shadow-lg">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    <div className="w-full flex-shrink-0 object-cover" key={1}>
                        <FaAccessibleIcon />
                    </div>
                    <div className="w-full flex-shrink-0 object-cover" key={2}>
                        <p></p>
                    </div>
                    <div className="w-full flex-shrink-0 object-cover" key={3}>
                        <p></p>
                    </div>
                    <div className="w-full flex-shrink-0 object-cover" key={4}>
                        <p></p>
                    </div>
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                >
                    ◀
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                >
                    ▶
                </button>

            </div>
        </div>
    )
}