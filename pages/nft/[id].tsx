import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

function NFTDropPage() {
  // Auth
  const connectWithMetaMask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()
 
  console.log(address)
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/*left*/}
      <div className="bg-gradient-to-br from-yellow-500 to-purple-500 lg:col-span-3">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-rose-500 to-blue-400 p-2">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="https://pbs.twimg.com/media/E_gu7t9WEAwJKzr?format=jpg&name=4096x4096"
              alt="nft ape"
            />
          </div>

          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">SLAYFEST APES</h1>
            <h2 className="text-xl text-gray-200">
              A collection of SLAYFEST APES killing it using REACT!
            </h2>
          </div>
        </div>
      </div>
      {/* {right} */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-7">
        {/* {Header} */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{' '}
            <span className="font-extrabold underline decoration-purple-600/50">
              SLAYFEST
            </span>{' '}
            NFT Market Place
          </h1>

          <button
            onClick={() => connectWithMetaMask()}
            className="rounded-full bg-purple-400 px-4 py-2 text-xs font-bold 
          text-white lg:px-5 lg:py-3 lg:text-base"
          >
            {address ? 'Sign Out' : 'Sign In'}
          </button>
        </header>

        <hr className="my-2 border" />

        {/* {Content} */}
        <div
          className="mt-10 flex flex-1 flex-col items-center 
        space-y-6 text-center lg:justify-center lg:space-y-0"
        >
          <img
            className="w-80 object-cover pb-10 lg:h-40 lg:animate-bounce"
            src="https://www.artnews.com/wp-content/uploads/2021/09/Apes-Collage.jpg?w=682"
            alt="ape nft"
          />

          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            SLAYFEST APES | NFT Drop
          </h1>

          <p className="pt-2 text-xl text-green-400">13/21 NFT's claimed</p>
        </div>

        {/* {Button} */}
        <button
          className="mt-10 h-16 w-full rounded-full bg-purple-400
        font-bold text-white"
        >
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  )
}
export default NFTDropPage
