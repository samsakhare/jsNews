import React from "react";
import NewsTopic from "../../lib/apis/newsTopic.json";
import NewsHeader from "./Header/NewsHeader";
const News = () => {
  return (
    <>
      <div className="grid lg:grid-cols-1 lg:grid-rows-1 md:grid-cols-3 md:gap-2 sm:grid-cols-3 sm:gap-2">
        <NewsHeader
          className="lg:col-span-0 md:col-span-1 sm:col-span-1"
          newsTopic={NewsTopic}
        />
        <div className="grid grid-cols-3 grid-rows-3 md:col-span-2 sm:col-span-2">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
      </div>
    </>
  );
};

//  lg:bg-red-400 md:bg-blue-400 sm:bg-green-400
// lg:w-3/4 md:w-3/4 sm:w-full mx-auto lg:bg-red-400 md:bg-blue-400 sm:bg-green-400
export default News;
