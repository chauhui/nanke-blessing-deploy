import sanityClient from './sanityClient'

export async function getBanners() {
  const query = `*[_type == "banner"] | order(_createdAt desc){
    title,
    description,
    url,
    image{
      asset->{
        url
      }
    }
  }`
  const banners = await sanityClient.fetch(query)
  return banners
}