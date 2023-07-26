export default {
  name: "certifications",
  title: "Certifications",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },

    {
      name: "shadow",
      title: "Box Shadow Color",
      type: "string",
    },

    {
      name: "courseLink",
      title: "Certification Link",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImageUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
