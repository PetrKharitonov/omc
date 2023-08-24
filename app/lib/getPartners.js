import { Agent, setGlobalDispatcher } from "undici";

const agent = new Agent({
  connect: {
    rejectUnauthorized: false,
  },
});

setGlobalDispatcher(agent);

const getPartners = async () => {
  try {
    const res = await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        query: `query getPartners {
            partners {
              edges {
                node {
                  partner {
                    link
                    logo {
                      sizes
                      mediaDetails {
                        height
                        width
                      }
                      sourceUrl
                    }
                    title
                    opisanie
                    doc1 {
                      mediaItemUrl
                      title
                    }
                    doc2 {
                      mediaItemUrl
                      title
                    }
                    doc3 {
                      mediaItemUrl
                      title
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

    return data.data.partners.edges;
  } catch (error) {
    console.log(error);
  }
};

export { getPartners };
