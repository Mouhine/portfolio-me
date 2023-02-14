import { Cover } from "@/types/project";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "67jpec6m",
  dataset: "production",
  apiVersion: new Date().toISOString().split("T")[0],
  useCdn: false,
});
const builder = imageUrlBuilder({
  projectId: "67jpec6m",
  dataset: "production",
});

export function urlFor(source: Cover) {
  return builder.image(source);
}
export default client;
