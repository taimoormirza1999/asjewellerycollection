import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'qshndjal',
  dataset: 'production',
  apiVersion: '2021-10-21',
    useCdn: true, // Set to true for production
});

export default client;
