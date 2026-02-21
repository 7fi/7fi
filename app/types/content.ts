import type { z } from 'zod'
import { homeSchema, projectSchema } from '../../content.config'

export type Project = z.infer<typeof projectSchema> & {
  id: string
  path: string
  body: unknown
}
export type Home = z.infer<typeof homeSchema> & {
  id: string
  path: string
  body: unknown
}
