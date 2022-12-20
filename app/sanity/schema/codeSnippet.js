export default {
  title: "Code Snippet",
  name: "codeSnippet",
  type: "object",
  fields: [
    {
      title: "Snippet Title",
      name: "snippetTitle",
      type: "string",
    },
    {
      title: "Code Files",
      name: "codeFiles",
      type: "array",
      of: [
        {
          // title: "Loot",
          // name: "loot",
          type: "object",
          fields: [
            {
              title: "File Name",
              name: "fileName",
              type: "string",
            },
            {
              title: "File Code",
              name: "fileCode",
              type: "text",
            },
          ],
        },
      ],
    },
    // {
    //   title: "File Name",
    //   name: "fileName",
    //   type: "string",
    // },
    // {
    //   title: "Code",
    //   name: "fileCode",
    //   type: "text",
    // },
  ],
};

// export default {
//   title: "Code Snippet",
//   name: "codeSnippet",
//   type: "object",
//   fields: [
//     {
//       title: "File Name",
//       name: "fileName",
//       type: "string",
//     },
//     {
//       title: "Code",
//       name: "fileCode",
//       type: "text",
//     },
//   ],
// };
