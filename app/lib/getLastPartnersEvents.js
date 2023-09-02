import { Agent, setGlobalDispatcher } from "undici";

const agent = new Agent({
  connect: {
    rejectUnauthorized: false,
  },
});

setGlobalDispatcher(agent);

const getLastPartnersEvents = async () => {
  try {
    const res = await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        query: `query getLastPartnersEvents {
                partnerEvents(last: 7) {
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
                    adress
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

    return data.data.partnerEvents.nodes;
  } catch (error) {
    console.log(error);
  }
};

export { getLastPartnersEvents };
