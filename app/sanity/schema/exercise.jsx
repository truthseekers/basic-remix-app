import { createContentObject } from "./content";
import React from "react";
const codeRender = (props) => (
  <span style={{ background: "aqua" }}>{props.children}</span>
);

export default {
  name: "exercise",
  title: "Exercise",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    // can make the slug query also use a "type" to avoid duplicates between lessons/posts/pages.
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    createContentObject("exercise", "Exercise"),
    createContentObject("solution", "Solution"),
    {
      name: "courses",
      title: "Courses",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "course" },
        },
      ],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],

  // preview: {
  //   select: {
  //     title: "title",
  //     author: "author.name",
  //     media: "mainImage",
  //   },
  //   prepare(selection) {
  //     const { author } = selection;
  //     return Object.assign({}, selection, {
  //       subtitle: author && `by ${author}`,
  //     });
  //   },
  // },
};
