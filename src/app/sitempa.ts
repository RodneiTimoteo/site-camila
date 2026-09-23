import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://camilatimoteovieira.com.br',
      lastModified: new Date(),
    },
  ]
}
