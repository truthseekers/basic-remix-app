export default {
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
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
      name: "feeType",
      title: "Fee Type",
      type: "string",
      options: {
        list: [
          { title: "free", value: "free" },
          { title: "paid", value: "paid" },
        ],
      },
    },
    {
      name: "todos",
      type: "text",
      title: "todos",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "sections",
      title: "Course Sections",
      type: "array", // array of sections. sections have "title" and array of lessons. Maybe a description.
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Section Title",
              name: "sectionTitle",
              type: "string",
            },
            {
              title: "Section Description",
              name: "sectionDescription",
              type: "text",
            },
            {
              name: "lessons",
              title: "lessons",
              type: "array",
              // find the lesson where lesson.course == the document.
              of: [
                {
                  type: "reference",
                  to: [{ type: "lesson" }, { type: "exercise" }],
                  options: {
                    // filter: 'role == $role',
                    // filterParams: {role: 'director'}
                    filter: ({ document }) => {
                      const publishedID = document._id.substring(
                        7,
                        document._id.length
                      );
                      return {
                        // filter: '_type == "lesson"',
                        filter: "$courseId in courses[]._ref",
                        params: { courseId: publishedID },
                      };
                    },
                  },
                },
                // {
                //   type: "reference",
                //   to: { type: "exercise" },
                //   options: {
                //     // filter: 'role == $role',
                //     // filterParams: {role: 'director'}
                //     filter: ({ document }) => {
                //       const publishedID = document._id.substring(
                //         7,
                //         document._id.length
                //       );
                //       return {
                //         // filter: '_type == "lesson"',
                //         filter: "$courseId in courses[]._ref",
                //         params: { courseId: publishedID },
                //       };
                //     },
                //   },
                // },
              ],
            },
          ],
        },
      ],
    },
  ],

  // Content
  /////////  list of sections
  ////////////// list of "lessons"

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
