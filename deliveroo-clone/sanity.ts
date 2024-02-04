import _sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const sanityClient = _sanityClient({
    projectId: "iffkhmyo",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (src?: SanityImageSource) => src ? builder.image(src) : undefined;
export default sanityClient;

/**
 * Useful commands
 * sanity cors add http://localhost:3000 // will fix cors error
 * sanity deploy // will deploy our local sanity cms to a hosted sanity url
 * 
 */