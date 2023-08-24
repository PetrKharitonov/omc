/* import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import * as ymaps from "ymaps";

const YMapComponent = () => {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    ymaps.ready.then(() => setLoaded(false));
  });

  if (loaded) {
    return <div>Loading...</div>;
  }

  const reactify = ymaps.reactify.bindTo(React, ReactDOM);
  const { YMap } = reactify.module(ymaps);

  return <YMap />;
};
export default YMapComponent; */
