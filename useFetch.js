import { useEffect, useState } from "react";
// custom hook
const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [isloading, setisloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const abort = new AbortController();
    fetch(url, { signal: abort.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        console.log("response: " + response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setdata(data);
        setisloading(false);
        seterror(null);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setisloading(false);
          seterror(error.message);
        }
      });
    return () => {
      console.log("abort");
      abort.abort();
    };
  }, [url]);

  return { data, isloading, error };
};

export default useFetch;
