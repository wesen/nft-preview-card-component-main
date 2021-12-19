import {useState} from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

    return (
        <div className="bg-main-bg overflow-auto font-outfit">
            <div className="bg-card-bg rounded-xl w-[327px] mx-auto m-16 p-6
            flex flex-col divide-y divide-line">
                <div className="mb-4">
                    <img src="images/image-equilibrium.jpg" className="rounded-xl"/>
                    <h1 className="text-white text-heading font-semibold mt-6">Equilibrium #3429</h1>

                    <div>
                        <div className="text-soft-blue text-body font-light mt-3">Our Equilibrium collection promotes
                            balance
                            and calm.
                        </div>

                        <div className="flex flex-row justify-between mt-4">
                            <div className="flex flex-row gap-2">
                                <img className="object-contain" src="images/icon-ethereum.svg"/>
                                <div className="text-cyan text-caption  font-semibold">0.041 ETH</div>
                            </div>
                            <div className="flex flex-row gap-2">
                                <img className="object-contain" src="images/icon-clock.svg"/>
                                <div className="text-soft-blue  text-caption">3 days left</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-start items-center gap-4 pt-4">
                    <img className="w-8 border-white border border-1 rounded rounded-full"
                         src="images/image-avatar.png"/>
                    <div className="text-soft-blue ">Creation of <span className="text-white">Jules Wyvern</span></div>
                </div>
            </div>
        </div>
    )
}

export default App
