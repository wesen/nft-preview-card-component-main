import {useState} from 'react'
import logo from './logo.svg'
import './App.css'

import equilibriumUrl from '../images/image-equilibrium.jpg'
import iconEthereumUrl from "../images/icon-ethereum.svg"
import iconClockUrl from "../images/icon-clock.svg"
import avatarUrl from "../images/image-avatar.png"

function App() {

    return (
        <div className="bg-main-bg overflow-auto font-outfit h-screen w-screen">
            <div className="bg-card-bg rounded-xl w-[327px] lg:w-[350px] mx-auto m-16 p-6
            flex flex-col divide-y divide-line
            shadow-card">
                <div className="mb-4">
                    <div className="bg-cyan rounded-xl">
                        <img src={equilibriumUrl} className="rounded-xl
                     lg:cursor-pointer lg:hover:opacity-50 lg:background-cyan"/>
                    </div>
                    <h1 className="
                    text-white text-heading font-semibold mt-6
                    lg:hover:text-cyan lg:cursor-pointer
                    ">Equilibrium #3429</h1>

                    <div>
                        <div className="text-soft-blue text-body font-light mt-3">Our Equilibrium collection promotes
                            balance
                            and calm.
                        </div>

                        <div className="flex flex-row justify-between mt-4">
                            <div className="flex flex-row gap-2">
                                <img className="object-contain" src={iconEthereumUrl}/>
                                <div className="text-cyan text-caption  font-semibold">0.041 ETH</div>
                            </div>
                            <div className="flex flex-row gap-2">
                                <img className="object-contain" src={iconClockUrl}/>
                                <div className="text-soft-blue  text-caption">3 days left</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-start items-center gap-4 pt-4">
                    <img className="w-8 border-white border border-1 rounded rounded-full"
                         src={avatarUrl}/>
                    <div className="text-soft-blue ">Creation of <span className="cursor-pointer lg:hover:text-cyan text-white">Jules Wyvern</span></div>
                </div>
            </div>
        </div>
    )
}

export default App
