import React from "react";
const codeRender = (props) => (
  <span style={{ background: "aqua" }}>{props.children}</span>
);

export const createContentObject = (
  name = "content",
  title = "Content Area"
) => {
  return {
    name: name,
    type: "array",
    title: title,
    of: [
      {
        type: "block",
        marks: {
          annotations: [
            {
              name: "link",
              type: "object",
              title: "External link",
              fields: [
                {
                  name: "href",
                  type: "url",
                  title: "URL",
                },
                {
                  title: "Open in new tab",
                  name: "blank",
                  description: "Open in a new tab",
                  type: "boolean",
                },
              ],
              initialValue: {
                blank: true,
              },
            },
            {
              name: "internalLink",
              type: "object",
              title: "Internal link",
              fields: [
                {
                  name: "reference",
                  type: "reference",
                  title: "Reference",
                  to: [
                    { type: "post" },
                    { type: "page" },
                    // { type: "course" }, // Keep this. I need to make the links to courses internal.
                    // { type: "course", testProp: "does this work?" }, // would be great if I could do this and just use testProp to prefix slug.
                    // other types you may want to link to
                  ],
                },
                {
                  name: "paidUrl",
                  type: "string", // should be select
                  title: "Paid Url",
                  options: {
                    list: [
                      "sql-course",
                      "mongodb",
                      "html-css",
                      "javascript",
                      "vscode",
                      "react",
                    ],
                  },
                },
              ],
            },
          ],
          decorators: [
            { title: "Strong", value: "strong" },
            {
              title: "Code",
              value: "code",
              blockEditor: {
                render: codeRender,
              },
            },
          ],
        },
        // h1-h6, quote, bold, "emphasis" (italic), code, underline,strike, bullet, numbered, link
      },
      {
        type: "reference",
        title: "Email optin",
        to: [{ type: "emailOptin" }],
      },
      // { type: "emailOptin" },
      {
        title: "Advanced image",
        name: "advancedImage",
        type: "object",
        fields: [
          { title: "lightbox", name: "lightbox", type: "boolean" },
          { type: "image", name: "image" },
        ],
        initialValue: { lightbox: true },
      },
      { type: "codeSnippet" },
      { type: "youtube" },
      { type: "vimeo" },
      // {type: 'text'}, // not sure why this worked in the previous project but broke this one?.
    ],
    // do I need a text section? the tutorials use one. but isn't that covered by block?
  };
};

// export default {
//   name: "content",
//   type: "array",
//   title: "Content Area",
//   of: [
//     {
//       type: "block",
//       marks: {
//         decorators: [
//           { title: "Strong", value: "strong" },
//           {
//             title: "Code",
//             value: "code",
//             blockEditor: {
//               render: codeRender,
//             },
//           },
//         ],
//       },
//       // h1-h6, quote, bold, "emphasis" (italic), code, underline,strike, bullet, numbered, link
//     },
//     {
//       type: "reference",
//       title: "Email optin",
//       to: [{ type: "emailOptin" }],
//     },
//     // { type: "emailOptin" },
//     { type: "image" },
//     { type: "codeSnippet" },
//     { type: "youtube" },
//     { type: "vimeo" },
//   ],
//   // do I need a text section? the tutorials use one. but isn't that covered by block?
// };
