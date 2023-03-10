import groq from "groq";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getClient } from "~/sanity/client";
import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";
import Image from "remix-image";

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
      <Layout>
        <Image
          src="/images/profile.jpg"
          className=""
          style={{ borderRadius: "9999px", height: "144px", width: "144px" }}
        />
        <h1>John Curry</h1>

        <article>
          <h2>Index page</h2>
          <h3>Welcome to my Index page!</h3>
          <div></div>
        </article>
      </Layout>
    </div>
  );
}
