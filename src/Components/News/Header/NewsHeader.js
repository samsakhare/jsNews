import React, { useEffect } from "react";
const NewsHeader = ({ newsTopics, selectNewsTopic, selectedNewsTopic }) => {
  useEffect(() => {
    console.log(selectedNewsTopic);
  }, [selectedNewsTopic]);
  return (
    <>
      <div className="grid lg:grid-cols-5 lg:gap-4">
        {newsTopics &&
          newsTopics.map((topic) => {
            return (
              <a key={topic.newsId} onClick={() => selectNewsTopic(topic)}>
                <div
                  className={`${
                    topic.newsId === selectedNewsTopic.newsId
                      ? `border-yellow-800 shadow-lg border-transparent`
                      : `hover:border-yellow-400 hover:shadow-lg hover:border-transparent`
                  } p-2 bg-white text-center rounded-full text-yellow-500 border-yellow-200 border-2 md:my-1 sm:my-1 my-1 w-auto min-w-max uppercase cursor-pointer`}
                >
                  {topic.displayTitle}
                </div>
              </a>
            );
          })}
      </div>
    </>
  );
};

export default NewsHeader;
