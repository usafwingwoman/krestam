import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
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
  loader: glob({ pattern: '**/*.json', base: './src/content/results' }),
  schema: z.object({
    studentName: z.string(),
    school: z.string(),
    program: z.string(),
    year: z.number(),
    quote: z.string().optional(),
    country: z.string(),
    tier: z.enum(['T10', 'T25', 'T50', 'Other']),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/testimonials' }),
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
  loader: glob({ pattern: '**/*.md', base: './src/content/caseStudies' }),
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
