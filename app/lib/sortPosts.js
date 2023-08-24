const sortPosts = (arr) => {
  arr.map((el) => {
    if (Object.values(el)[0].customdate == null) {
      Object.values(el)[0].customdate = Object.values(el)[2].slice(0, -9);
    }
    /* console.log(Object.values(el)[0].customdate);
    console.log(new Date(Object.values(el)[0].customdate)); */
  });

  return arr.sort((a, b) => {
    return (
      new Date(Object.values(b)[0].customdate) -
      new Date(Object.values(a)[0].customdate)
    );
  });
};

export { sortPosts };
