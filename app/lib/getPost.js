import { Agent, setGlobalDispatcher } from "undici";

const agent = new Agent({
  connect: {
    rejectUnauthorized: false,
  },
});

setGlobalDispatcher(agent);

const getPost = async (id) => {
  try {
    const res = await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        query: `query getPost {
              postNewBy(id: "${id}") {
                date
                id
                omcPostNews {
                  preview {
                    mediaDetails {
                      height
                      width
                    }
                    sourceUrl
                  }
                  customdate
                  description
                  subtitle
                  title
                  files {
                    file1 {
                      mediaItemUrl
                      title
                    }
                    file2 {
                      mediaItemUrl
                      title
                    }
                    file3 {
                      mediaItemUrl
                      title
                    }
                    file4 {
                      mediaItemUrl
                      title
                    }
                    file5 {
                      mediaItemUrl
                      title
                    }
                  }
                  images {
                    image1 {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                    image2 {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                    image3 {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                    image4 {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                    image5 {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                    image6 {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                    image7 {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                    image8 {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                    image9 {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                    image10 {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                  }
                }
              }
              postEventBy(id: "${id}") {
                date
                id
                omcPostEvent {
                  adress
                  customdate
                  description
                  subtitle
                  title
                  files {
                    file1 {
                      mediaItemUrl
                      title
                    }
                    file2 {
                      mediaItemUrl
                      title
                    }
                    file3 {
                      mediaItemUrl
                      title
                    }
                    file4 {
                      mediaItemUrl
                      title
                    }
                    file5 {
                      mediaItemUrl
                      title
                    }
                  }
                  images {
                    image1 {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                    image2 {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                    image3 {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                    image4 {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                    image5 {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                    image6 {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                    image7 {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                    image8 {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                    image9 {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                    image10 {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                  }
                  subtitle
                  registertoggle
                  preview {
                    mediaDetails {
                      height
                      width
                    }
                    sourceUrl
                  }
                }
              }
            }`,
      }),
      next: { revalidate: 10 },
    });

    const data = await res.json();

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export { getPost };
