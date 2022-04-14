import React, { useEffect, useState } from "react";
import "../../App.css";
import LoadingSpinner from "./LoadingSpinner";
import News from "./News/News";

const Body = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=346c7bdd368b4b0fb5724669204c3d81")
      .then((res) => res.json())
      .then((data) => setArticle(data.articles));
  }, []);

  return (
    <div className="body">
      {article === null ? <LoadingSpinner /> : article.map((item) => <News article={item} />)}
    </div>
  );
};

export default Body;
