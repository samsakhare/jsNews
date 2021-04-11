import React from "react";
import News from "../Components/News/News";
import NewsTopic from "../lib/apis/newsTopic.json";
const Demo = () => {
  return (
    <>
      <News defaultTopic={NewsTopic[0]} />
    </>
  );
};

export default Demo;
