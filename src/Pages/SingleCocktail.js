import React, { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    getCocktail();
  }, [id]);

  return <div></div>;
};

export default SingleCocktail;
