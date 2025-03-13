import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/posts' }),
  schema({ image }) {
    return z.object({
      cover: image(),
      date: z.string(),
      title: z.string(),
      description: z.string(),
      bibliography: z.array(
        z.object({
          author: z.string(),
          year: z.string(),
          title: z.string(),
          editorial: z.string(),
          link: z.string().url()
        })
      )
    })
  }
})

export const collections = { blog }
