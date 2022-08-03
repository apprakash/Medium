import { createClient, createCurrentUserHook } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: "uewrjtga",
    apiVersion: "2022-03-25",
    useCdn: process.env.NODE_ENV === "production",
};


export const sanityClient = createClient(config);

export const urlFor = (source) => imageUrlBuilder(sanityClient).image(source);