import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://buyiq.app',
      lastModified: new Date(),
    },
    {
      url: 'https://buyiq.app/product/airpods3',
      lastModified: new Date(),
    },
    {
      url: 'https://buyiq.app/product/airpods4',
      lastModified: new Date(),
    },
  ]
}