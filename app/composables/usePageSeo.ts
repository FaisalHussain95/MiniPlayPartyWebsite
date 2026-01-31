type PageLike = {
  title?: string
  description?: string
  image?: string
}

const normalizeUrl = (baseUrl: string, path: string) => {
  if (!baseUrl) {
    return path
  }
  const trimmedBase = baseUrl.replace(/\/$/, '')
  const trimmedPath = path.startsWith('/') ? path : `/${path}`
  return `${trimmedBase}${trimmedPath}`
}

export const usePageSeo = (page?: PageLike) => {
  const route = useRoute()
  const config = useRuntimeConfig()
  const site = config.public.site

  const title = page?.title
    ? `${page.title} | ${site.name}`
    : site.defaultTitle
  const description = page?.description ?? site.defaultDescription
  const image = page?.image ?? site.defaultImage
  const url = normalizeUrl(site.url, route.path)
  const imageUrl = image?.startsWith('http') ? image : normalizeUrl(site.url, image)

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: imageUrl,
    ogUrl: url,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: imageUrl,
    twitterSite: site.twitterHandle
  })

  useHead({
    link: [
      {
        rel: 'canonical',
        href: url
      }
    ]
  })
}