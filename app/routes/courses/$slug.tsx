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
      <h1>Welcome to Remix</h1>

      <article>
        <h2>Courses Page!!!</h2>
        <h3>Welcome to my blog posts page!</h3>
        <div>
          {/* @ts-ignore */}
          {posts.map((post, index) => (
            <a href={`/${post.slug.current}`} key={index}>
              <span key={index}>
                <img
                  style={{ width: "25%" }}
                  src={post.mainImage.asset.url}
                  alt=""
                />
                <span>
                  <h2>{post.title}</h2>
                </span>
              </span>
            </a>
          ))}
        </div>
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
    </div>
  );
}
