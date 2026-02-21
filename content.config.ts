import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export const projectSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  tech: z.array(z.string()).optional(),
  featured: z.boolean().optional(),
  url: z.string().optional(),
  github: z.string().optional(),
  order: z.number().optional(),
})

export const homeSchema = z.object({
  title: z.string(),
  paragraph: z.string(),
  techs: z.array(z.string()),
  langs: z.array(z.string()),
  github: z.string(),
  email: z.string(),
})

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: '*.md',
      schema: homeSchema,
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: projectSchema,
    }),
  },
})
