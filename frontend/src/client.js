import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '',
  dataset: 'production',
  useCdn: true, 
  token: '',
})