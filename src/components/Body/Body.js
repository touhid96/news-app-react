import React, { useEffect, useState } from "react";
import "../../App.css";
import LoadingSpinner from "./LoadingSpinner";
import News from "./News/News";

const Body = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=5e005fc4211a49ac956db9183c8466ef")
      .then((res) => res.json())
      .then((data) => setArticle(data.articles))
      .catch((error) => console.error(error));
  }, []);
  console.log(article);

  return (
    <div className="body">
      {article === null ? (
        <LoadingSpinner />
      ) : (
        article.map((item) => <News article={item} key={item.content} />)
      )}
    </div>
  );
};

export default Body;
