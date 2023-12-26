// client.js
import { createClient } from 'next-sanity';

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-03-25', // Use the latest API version
  useCdn: process.env.NODE_ENV === 'production', // Enable CDN for production
};

export const sanityClient = createClient(config);

export async function getBlogBySlug(slug) {
  const query = `*[_type == "blog" && slug.current == $slug][0]`;
  const params = { slug };
  return await client.fetch(query, params);
}


  
