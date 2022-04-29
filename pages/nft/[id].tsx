import React from 'react'

function NFTDropPage() {
  return (
    <div className="flex h-screen flex-col">
      {/*left*/}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500">
        <div>
          <img
            className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
            src="https://pbs.twimg.com/media/E_gu7t9WEAwJKzr?format=jpg&name=4096x4096"
            alt="nft ape"
          />
          <div>
              <h1>
                  SLAYFEST APES
              </h1>
              <h2>
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
