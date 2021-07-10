import React from 'react'
import image from '../images/palm.jpeg'

export default function Home(){
    return (
        <main>
            <img src={image} alt="Palm Leaves" className="absolute object-cover min-w-full min-h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 ">
                <h1 className="text-3xl lg:text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug lg:home-name">Hello. I'm <span className="text-red-400">Michael</span></h1>
            </section>
        </main>
    )
}