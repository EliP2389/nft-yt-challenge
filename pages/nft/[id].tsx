import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
import { GetServerSideProps } from 'next'
import { sanityClient, urlFor } from '../../sanity'
import Link from 'next/link'
import { Collection } from '../../typings'

interface Props {
  collection: Collection
}

function NFTDropPage({ collection }: Props) {
  // Auth
  const connectWithMetaMask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/*left*/}
      <div className="bg-gradient-to-br from-yellow-500 to-purple-500 lg:col-span-3">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-rose-500 to-blue-400 p-2 shadow-2xl">
            <iframe
              src="https://giphy.com/embed/5hvKNH3QAA4jPaMfcG"
              width="250"
              height="300"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">
              {collection.nftCollectionName}
            </h1>
            <h2 className="text-xl text-gray-200">{collection.description}</h2>
          </div>
        </div>
      </div>
      {/* {right} */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-7">
        {/* {Header} */}
        <header className="flex items-center justify-between">
          <Link href={'/'}>
            <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
              The{' '}
              <span className="font-extrabold underline decoration-purple-600/50">
                SLAYFEST SAIYANS
              </span>{' '}
              NFT Market Place
            </h1>
          </Link>

          <button
            onClick={() => (address ? disconnect() : connectWithMetaMask())}
            className="rounded-full bg-purple-400 px-4 py-2 text-xs font-bold 
          text-white shadow-md shadow-purple-400/70 lg:px-5 lg:py-3 lg:text-base"
          >
            {address ? 'Connected' : 'Connect'}
          </button>
        </header>

        <hr className="my-2 border" />
        {address && (
          <p className="animate-pulse text-center text-sm text-purple-400">
            You're logged in with wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}

        {/* {Content} */}
        <div
          className="mt-8 flex flex-1 flex-col items-center
        space-y-6 text-center lg:justify-center lg:space-y-0"
        >
          <img
            className="w-80 object-cover pb-10 lg:h-40 lg:animate-bounce"
            src={urlFor(collection.previewImage).url()}
            alt="ape nft"
          />

          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            {collection.title}
          </h1>

          <p className="pt-2 text-xl text-green-400">13/21 NFT's claimed</p>
        </div>

        {/* {Button} */}
        <button
          className="mt-10 h-16 w-full rounded-full bg-purple-400
        font-bold text-white shadow-md shadow-purple-400/70 "
        >
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  )
}
export default NFTDropPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const query = `*[_type == "collection" && slug.current == $id][0]{
    _id,
    title,
    address,
    description,
    nftCollectionName,
    mainImage {
    asset
  },
  previewImage {
    asset
  },
  slug {
    current
  },
  creator-> {
    _id,
    name,
    address,
    slug {
    current
  },
  },
  }`

  const collection = await sanityClient.fetch(query, {
    id: params?.id,
  })

  if (!collection) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      collection,
    },
  }
}
