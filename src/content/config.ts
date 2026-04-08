import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

const results = defineCollection({
  type: 'data',
  schema: z.object({
    studentName: z.string(),
    school: z.string(),
    program: z.string(),
    year: z.number(),
    quote: z.string(),
    country: z.string(),
    tier: z.enum(['T10', 'T25', 'T50', 'Other']),
  }),
});

const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    quote: z.string(),
    school: z.string(),
    country: z.string(),
    featured: z.boolean().default(false),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    student: z.string(),
    challenge: z.string(),
    outcome: z.string(),
    programs: z.array(z.string()),
    slug: z.string(),
  }),
});

export const collections = { blog, results, testimonials, caseStudies };
