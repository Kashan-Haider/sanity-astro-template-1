import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"2025-01-28","projectId":"5kin5owf","dataset":"landing-page-builder-dataset","useCdn":false}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
