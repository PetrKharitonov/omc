const getCompanyDocs = async () => {
  const res = await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query: `
                query getCompanyDocs {
                        companyDocs {
                          nodes {
                          clientdoc {
                              description
                              file {
                              mediaItemUrl
                              }
                          }
                          }
                      }
                  }`,
    }),
    next: { revalidate: 10 },
  });

  const data = await res.json();

  return data.data.companyDocs.nodes;
};

export { getCompanyDocs };
