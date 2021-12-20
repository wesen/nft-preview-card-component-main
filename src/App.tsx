import './App.css'

import equilibriumUrl from '../images/image-equilibrium.jpg'
import iconEthereumUrl from "../images/icon-ethereum.svg"
import iconClockUrl from "../images/icon-clock.svg"
import avatarUrl from "../images/image-avatar.png"

function App() {
    return (
        <div className="bg-main-bg overflow-auto font-outfit h-screen w-screen">
            <article className="bg-card-bg rounded-xl w-[327px]
            lg:w-[350px] mx-auto m-16 mt-[152px] p-6
            flex flex-col divide-y divide-line gap-[7px]
            shadow-card">
                <main className="mb-[15px]">
                    <figure className="bg-cyan rounded-xl">
                        <a href="#">
                            <img src={equilibriumUrl}
                                 alt="Image of a glassy cube"
                                 className="rounded-xl lg:cursor-pointer lg:hover:opacity-50 lg:background-cyan
                     "/>
                        </a>
                    </figure>
                    <h1 className="mt-[22px]">
                        <a href="#" className="
                    text-white text-heading font-semibold
                    lg:hover:text-cyan
                    ">
                            Equilibrium #3429
                        </a>
                    </h1>

                    <div>
                        <section className="text-soft-blue text-body font-light mt-[14px]">
                            Our Equilibrium collection promotes balance and calm.
                        </section>

                        <section className="pt-[1px] flex flex-row justify-between mt-5 items-center">
                            <div className="flex flex-row whitespace-nowrap gap-[7px]">
                                <img className="object-contain" alt="" src={iconEthereumUrl}/>
                                <p className="text-cyan text-caption inline font-semibold">0.041 ETH</p>
                            </div>
                            <div className="flex flex-row gap-[7px] pr-[3px]">
                                <img className="object-contain" alt="" src={iconClockUrl}/>
                                <p className="text-soft-blue  text-caption whitespace-nowrap">3 days left</p>
                            </div>
                        </section>
                    </div>
                </main>

                <footer className="flex flex-row justify-start items-center gap-4 pt-4">
                    <img className="w-[33px] border-white border border-1 rounded rounded-full"
                         src={avatarUrl} alt="Jules Wyvern Avatar"/>
                    <p className="text-soft-blue pb-[1px]">
                        Creation of
                        <a href="#" className="ml-[6px] cursor-pointer lg:hover:text-cyan text-white">
                            Jules Wyvern
                        </a>
                    </p>
                </footer>
            </article>
        </div>
    )
}

export default App
