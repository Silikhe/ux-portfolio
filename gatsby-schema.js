  const { createTypes } = require("gatsby-graphql-import-node");

  const typeDefs = `
    type MediumPost {
      title: String
      link: String
      createdAt: Date
    }

    type Query {
      allMediumPost: [MediumPost]
    }
  `;

  exports.createTypes = ({ actions }) => {
    const { createTypes } = actions;
    createTypes(typeDefs);
  };
