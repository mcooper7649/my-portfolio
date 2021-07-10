import React from 'react'
import image from '../images/palm.jpg'

export default function Home(){
    return (
        <main>
            <img src={image} alt="Palm Leaves" className="absolute h-full w-full" />
            <section className="relative lg:flex justify-center min-h-screen pt-12 lg:pt-64 lg:px-8 ">
                <h1 className="text-center text-3xl lg:text-6xl text-green-100 font-bold cursive lg:home-name">Hello. I'm <span className="text-red-400">Michael</span></h1>
            </section>
        </main>
    )
}