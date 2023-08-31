const getFaqs = async () => {
  const res = await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query: `
            query getFaqs {
                faqs {
                  nodes {
                    faq {
                      question
                      answer
                    }
                  }
                }
              }`,
    }),
    next: { revalidate: 10 },
  });

  const data = await res.json();

  return data.data.faqs.nodes;
};

export { getFaqs };
