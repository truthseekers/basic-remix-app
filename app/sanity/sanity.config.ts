import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schema from "~/sanity/schema";
import { media } from "sanity-plugin-media";
// import structure from './deskStructure'

export default defineConfig({
  name: "default",
  title: "truthseekers-cms",

  projectId: "rm1xwuar",
  dataset: "production",

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Base")
          .items([
            S.listItem()
              .title("Filtered Posts")
              .child(
                S.list()
                  .title("Filters")
                  .items([
                    S.listItem()
                      .title("Posts By Tag")
                      .child(
                        S.documentTypeList("tag")
                          .title("Posts by Tag")
                          .child((tagId) =>
                            S.documentList()
                              .title("Posts")
                              .filter(
                                '_type == "post" && $tagId in tags[]._ref'
                              )
                              .params({ tagId })
                          )
                      ),
                    S.listItem()
                      .title("Posts By Author")
                      .child(
                        S.documentTypeList("author")
                          .title("Posts by Author")
                          .child((authorId) =>
                            S.documentList()
                              .title("Posts")
                              .filter(
                                '_type == "post" && $authorId == author._ref'
                              )
                              .params({ authorId })
                          )
                      ),
                  ])
              ),
            S.listItem()
              .title("Filtered Lessons")
              .child(
                S.list()
                  .title("Filters")
                  .items([
                    S.listItem()
                      .title("Lessons By Course")
                      .child(
                        S.documentTypeList("course")
                          .title("Lessons by Course")
                          .child((courseId) =>
                            S.documentList()
                              .title("Lessons")
                              .filter(
                                '_type == "lesson" && $courseId in courses[]._ref'
                              )
                              .params({ courseId })
                          )
                      ),
                  ])
              ),
            ...S.documentTypeListItems().filter(
              // @ts-ignore
              (listItem) =>
                !["siteSettings", "navigation", "colors"].includes(
                  // @ts-ignore
                  listItem.getId()
                )
            ),
          ]),
    }),
    visionTool(),
    media(),
  ],

  schema: {
    types: schema,
  },
});
