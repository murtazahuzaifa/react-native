import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: "iffkhmyo",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
});

const builder = imageUrlBuilder(client);
export const urlFor = (src: string) => builder.image(src);
export default client;

/**
 * Useful commands
 * sanity cors add http://localhost:3000 // will fix cors error
 * sanity deploy // will deploy our local sanity cms to a hosted sanity url
 * 
 */