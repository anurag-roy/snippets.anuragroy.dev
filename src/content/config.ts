import { defineCollection, z } from 'astro:content';

const snippetCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  snippet: snippetCollection,
};
