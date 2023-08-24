export default async function handler(req, res) {
  try {
    const graphqlEndpoint = "https://u2175719.isp.regruhosting.ru/graphql";
    const response = await fetch(graphqlEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query getAllPosts {
          posts {
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
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}
