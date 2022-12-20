import groq from "groq";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getClient } from "~/sanity/client";
import { useLoaderData } from "@remix-run/react";

export const loader = async (props: LoaderArgs) => {
  const query = groq`*[_type == "post"]{
        title,
        slug,
        mainImage{
            asset->{
                _id,
                url
            }
        }
    }`;
  console.log("fuuuuck is this?");

  const posts = await getClient()
    .fetch(query)
    .then((res) => {
      console.log("response: ", res);
      return res;
    });

  return json({ posts });
};

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();

  console.log("posts: ", posts);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>INNER page</h1>

      <article>
        <h2>Learn To Code Page!!!</h2>
        <h3>Welcome to my blog posts page!</h3>
        <div></div>
      </article>

      <ul>
        <li>ITEM ONE</li>
        <li>ITEM TWO</li>
        <li>lalalala la la la</li>
      </ul>
    </div>
  );
}
