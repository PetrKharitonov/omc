import { Agent, setGlobalDispatcher } from "undici";

const agent = new Agent({
  connect: {
    rejectUnauthorized: false,
  },
});

setGlobalDispatcher(agent);

const getStuff = async () => {
  try {
    const res = await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        query: `query getStuff {
              staffs {
                edges {
                  node {
                    employee {
                      name
                      position
                      image {
                        sourceUrl
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

    return data.data.staffs.edges;
  } catch (error) {
    console.log(error);
  }
};

export { getStuff };
