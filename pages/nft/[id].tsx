import React from 'react'

function NFTDropPage() {
  return (
    <div className="flex h-screen flex-col">
      {/*left*/}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-500 to-purple-500">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="https://pbs.twimg.com/media/E_gu7t9WEAwJKzr?format=jpg&name=4096x4096"
              alt="nft ape"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-white">SLAYFEST APES</h1>
            <h2 className="text-xl text-gray-200">
              A collection of SLAYFEST APES killing it using REACT!
            </h2>
          </div>
        </div>
      </div>
      {/* {right} */}
      <div></div>
    </div>
  )
}
export default NFTDropPage
