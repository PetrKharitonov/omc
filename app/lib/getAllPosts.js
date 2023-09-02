import { Agent, setGlobalDispatcher } from "undici";

const agent = new Agent({
  connect: {
    rejectUnauthorized: false,
  },
});

setGlobalDispatcher(agent);

const getAllPosts = async () => {
  try {
    const res = await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        query: `query getAlPosts {
              postEvents {
                nodes {
                  omcPostEvent {
                    title
                    customdate
                    subtitle
                    preview {
                      mediaDetails {
                        height
                        width
                      }
                      sourceUrl
                    }
                  }
                  id
                  date
                }
              }
              postNews {
                nodes {
                  omcPostNews {
                    customdate
                    description
                    subtitle
                    title
                    preview {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                  }
                  id
                  date
                }
              }
            }
          `,
      }),
      next: { revalidate: 10 },
    });

    const data = await res.json();

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllPosts };
