import { useEffect, useState } from "react";
import { getPing } from "../firebase";

export default () => {

  const [ping, setPing] = useState<Number>(0);

  useEffect(() => {
    getPing().then(v => setPing(v));
  }, []);

  return (
    <h1>{ping.toString()}</h1>
  );
};
