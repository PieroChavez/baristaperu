import React, { useEffect, useState } from 'react'
import { ImgPortada } from '@/assets/ImgPortada/ImgPortada'
import LoginButton from '@/components/Pages/Auth/LoginButton'
import Footer from '../Layaouts/Footer'

function getRandomImages(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const Index = () => {
  const [randomImages, setRandomImages] = useState(() => getRandomImages(ImgPortada, 7))
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setRandomImages(getRandomImages(ImgPortada, 7))
        setFade(true)
      }, 500)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const fadeClass = fade
    ? 'transition-opacity duration-800 opacity-100'
    : 'transition-opacity duration-800 opacity-0'

  return (
    <>
      <div className="relative overflow-hidden gray-900 transition-colors duration-500">
        <div className="pt-20 pb-120 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-300 dark:text-gray-500 sm:text-6xl">
                Súmate y deja que la pasión hable por ti
              </h1>
              <p className="mt-4 text-xl text-gray-500 dark:text-gray-00">
                La caficultura en el Perú crece, y necesita de tu ayuda. Súmate.
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className={`h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 ${fadeClass}`}>
                          <img
                            alt=""
                            src={randomImages[0].image || randomImages[0]}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className={`h-64 w-44 overflow-hidden rounded-lg ${fadeClass}`}>
                          <img
                            alt=""
                            src={randomImages[1].image || randomImages[1]}
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className={`h-64 w-44 overflow-hidden rounded-lg ${fadeClass}`}>
                          <img
                            alt=""
                            src={randomImages[2].image || randomImages[2]}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className={`h-64 w-44 overflow-hidden rounded-lg ${fadeClass}`}>
                          <img
                            alt=""
                            src={randomImages[3].image || randomImages[3]}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className={`h-64 w-44 overflow-hidden rounded-lg ${fadeClass}`}>
                          <img
                            alt=""
                            src={randomImages[4].image || randomImages[4]}
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className={`h-64 w-44 overflow-hidden rounded-lg ${fadeClass}`}>
                          <img
                            alt=""
                            src={randomImages[5].image || randomImages[5]}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className={`h-64 w-44 overflow-hidden rounded-lg ${fadeClass}`}>
                          <img
                            alt=""
                            src={randomImages[6].image || randomImages[6]}
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                  
                  <div className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition-colors duration-300">
                    <LoginButton />
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Index
