import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://maggiesilveiraadv.com.br',
      lastModified: new Date(),
    },
    {
      url: 'https://maggiesilveiraadv.com.br/artigos',
      lastModified: new Date(),
    },
  ]
}