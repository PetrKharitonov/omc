import { Agent, setGlobalDispatcher } from "undici";

const agent = new Agent({
  connect: {
    rejectUnauthorized: false,
  },
});

setGlobalDispatcher(agent);

const getThankyouLetters = async () => {
  try {
    const res = await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        query: `query getThankyouLetters {
                thankyouletters {
                    nodes {
                    thankyouletter {
                        file {
                        sourceUrl
                        }
                    }
                    title
                    }
                }
            }`,
      }),
      next: { revalidate: 10 },
    });

    const data = await res.json();

    return data.data.thankyouletters.nodes;
  } catch (error) {
    console.log(error);
  }
};

export { getThankyouLetters };
