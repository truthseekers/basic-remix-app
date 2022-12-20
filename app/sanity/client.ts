import SanityClient from "@sanity/client"; // weird how this has the @ but the package installed to fix the error does not.

import { projectDetails } from "~/sanity/projectDetails";

export const client = new SanityClient({
  ...projectDetails(),
  useCdn: true,
});

export const previewClient = new SanityClient({
  ...projectDetails(),
  useCdn: false,
  //   token: process.env.SANITY_READ_TOKEN,
});

export const getClient = (previewMode = false) => client; // Don't know what this previewClient thing is
// previewMode ? previewClient : client;

export const writeClient = new SanityClient({
  ...projectDetails(),
  useCdn: false,
  //   token: process.env.SANITY_WRITE_TOKEN,
});
