import React from "react";
// import getYouTubeId from "get-youtube-id";
// import YouTube from "react-youtube";

// const Preview = ({ value }) => {
//   const { url } = value;
//   const id = getYouTubeId(url);
//   return <YouTube videoId={id} />;
// };

export default {
  name: "vimeo",
  type: "object",
  title: "Vimeo Embed",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Vimeo Title",
    },
    {
      name: "vimeo_id",
      type: "string",
      title: "Vimeo ID",
    },
  ],
  // preview: {
  //   select: {
  //     url: "url",
  //   },
  //   component: Preview,
  // },
};
