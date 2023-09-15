import { Agent, setGlobalDispatcher } from "undici";

const agent = new Agent({
  connect: {
    rejectUnauthorized: false,
  },
});

setGlobalDispatcher(agent);

const getOneStuff = async (id) => {
  try {
    const res = await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        query: `query getOneStuff {
            staffBy(id: "${id}") {
              employee {
                biography
                image {
                  sourceUrl
                }
                name
                position
              }
            }
          }`,
      }),
      next: { revalidate: 10 },
    });

    const data = await res.json();

    return data.data.staffBy.employee;
  } catch (error) {
    console.log(error);
  }
};

export { getOneStuff };
