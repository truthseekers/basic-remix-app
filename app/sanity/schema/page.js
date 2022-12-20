// import React from "react";
import { createContentObject } from "./content";

export default {
  name: "page",
  title: "Page",
  type: "document",
  fieldsets: [
    {
      title: "SEO & metadata",
      name: "metadata",
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
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
      name: "todos",
      type: "text",
      title: "todos",
    },
    // {
    //   name: "learnToCode",
    //   title: "Show on Learn To Code",
    //   type: "boolean",
    // },
    createContentObject(),
    {
      name: "courses",
      title: "courses",
      type: "array",
      of: [{ type: "reference", to: { type: "course" } }],
    },
    {
      name: "tags",
      title: "tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],
};
