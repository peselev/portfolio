import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    company: z.string(),
    role: z.string(),
    period: z.string(),
    order: z.number().default(99),
    tags: z.array(z.string()),
    featured: z.boolean().default(true),
  }),
});

export const collections = { projects };
