import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { sanityClient, urlFor } from '../sanity'
import { Collection } from '../typings'

interface Props {
  collections: Collection[]
}

const Home = ({ collections }: Props) => {
  return (
    <div className="">
      <Head>
        <title>NFT DROP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
        The{' '}
        <span className="font-extrabold underline decoration-purple-600/50">
          SLAYFEST
        </span>{' '}
        NFT Market Place
      </h1>

      <main>
        <div>
          {collections.map((collection) => (
            <div>
              <img 
              className="h-96 w-60 rounded-2xl object-cover"
              src={urlFor(collection.mainImage).url()} 
              alt="main image" />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `*[_type == "collection"]{
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

  const collections = await sanityClient.fetch(query)

  return {
    props: {
      collections,
    },
  }
}
