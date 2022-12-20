import { createContentObject } from "./content";

export default {
  name: "lesson",
  title: "Lesson",
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
    createContentObject(),
    {
      name: "courses",
      title: "Courses",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "course" },
          // remove entire options property.
          options: {
            // filter: 'role == $role',
            // filterParams: {role: 'director'}
            filter: ({ document }) => {
              return {
                filter: '_type == "course"',
                // filter: "$courseId in courses[]._ref",
                // params: { courseId: document._id },
              };
            },
          },
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
