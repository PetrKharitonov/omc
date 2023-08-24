const getPosts = async () => {
  const res = await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query: `query getAllPosts {
          posts( where: { categoryName: "posts" } ) {
            nodes {
              date
              excerpt
              slug
              title
              featuredImage {
                node {
                  mediaDetails {
                    file
                    sizes {
                      sourceUrl
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }`,
    }),
    next: { revalidate: 10 },
  });

  const data = await res.json();

  return data.data.posts.nodes;
};

export { getPosts };
