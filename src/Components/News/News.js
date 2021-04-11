import React, { useEffect, useState } from "react";
import NewsTopic from "../../lib/apis/newsTopic.json";
import NewsHeader from "./Header/NewsHeader";
import NewsCard from "./body/Card";
import NewsAPI from "../../lib/NewsAPI";

const News = ({ defaultTopic }) => {
  const [articles, setArticles] = useState(null);
  const [selectedNewsTopic, setSelectedNewsTopic] = useState(NewsTopic[0]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    selectTopic(selectedNewsTopic);
  }, [selectedNewsTopic]);

  useEffect(() => {
    selectTopic(defaultTopic);
  }, []);

  function selectTopic(topic) {
    setIsLoading(true);
    if (topic) {
      const api = new NewsAPI();
      api.getNewsDetails(topic.api).then((res) => {
        setArticles(res.data.articles);
        setIsLoading(false);
      });
    }
  }

  return (
    <>
      <div className="grid lg:grid-cols-1 lg:grid-rows-1 md:grid-cols-1 md:gap-2 sm:grid-cols-1 sm:gap-2">
        <NewsHeader
          className="lg:col-span-0 md:col-span-1 sm:col-span-1"
          newsTopics={NewsTopic}
          selectNewsTopic={setSelectedNewsTopic}
          selectedNewsTopic={selectedNewsTopic}
        />
        {isLoading && (
          <h1 className="text-white font-bold text-center bg-gray-400 p-2 rounded-xl w-1/2 m-auto">
            Loading...
          </h1>
        )}
        <div
          className="w-full lg:w-full m-auto p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4"
          style={{
            opacity: isLoading ? "0.2" : "1",
          }}
        >
          {articles &&
            articles.map((article, index) => {
              return <NewsCard key={index} article={article} />;
            })}
        </div>
      </div>
    </>
  );
};

export default News;
