import React from "react";
import NewsBadge from "./Badge";
const NewsHeader = ({ newsTopic }) => {
  return (
    <>
      <div className="grid lg:grid-cols-5 lg:gap-4">
        {newsTopic &&
          newsTopic.map((topic) => {
            return (
              <NewsBadge
                key={topic.newsId}
                newsId={topic.newsId}
                api={topic.api}
              >
                {topic.displayTitle}
              </NewsBadge>
            );
          })}
        {/* <NewsBadge newsId="bitcoin"> bitcoin </NewsBadge>
        <NewsBadge newsId="usa"> usa </NewsBadge>
        <NewsBadge newsId="apple"> apple </NewsBadge>
        <NewsBadge newsId="techcrunch"> techcrunch </NewsBadge>
        <NewsBadge newsId="wsj"> wall street journal </NewsBadge> */}
      </div>
    </>
  );
};

export default NewsHeader;
