import groq from "groq";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getClient } from "~/sanity/client";
import { Outlet, useLoaderData } from "@remix-run/react";
import ShopLayout from "~/components/ShopLayout";

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
      <ShopLayout />
      <h1>Welcome to Remix</h1>

      <article>
        <h2>Shop index</h2>
        <div>{/* @ts-ignore */}</div>
      </article>

      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
