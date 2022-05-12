import { implementsInterface } from "@thirdweb-dev/sdk"

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