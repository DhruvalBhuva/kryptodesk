import { useEffect } from "react";
import { useState } from "react";
const GIPHY_KEY = process.env.GIPHY_KEY;

const useFetch = ({ keyword }) => {
  const [gifURL, setGifURL] = useState("");

  const ferchGif = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_KEY}&q=${keyword
          .split(" ")
          .join("")}&limit=1`
      );
      const { data } = await response.json();

      setGifURL(data[0]?.images?.downsize_medium?.url);
    } catch (error) {
      setGifURL(
        "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284"
      );
    }
  };

  useEffect(() => {
    if (keyword) ferchGif();
  }, [keyword]);
  return gifURL;
};

export default useFetch;
