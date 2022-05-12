interface Image {
    asset: {
        url: string
    }
}

export interface Creator {
    _id,
  name,
  address,
  slug: {
  current: string
}
  image: image
  bio: string
}

export interface Collection {
    _id: string
    title: string
    description: string
    nftCollectionName: string
    address: string
    slug: {
        current: string
    }
    creator: Creator
    mainImage: Image
    previewImage: Image
}