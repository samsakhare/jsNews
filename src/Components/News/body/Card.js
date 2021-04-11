import React, { useEffect, useState } from "react";

const NewsCard = ({ article }) => {
  return (
    <>
      <div className="w-full p-4">
        <a
          href={article.url}
          className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
        >
          <div className="relative pb-48 overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={article.urlToImage}
              alt=""
            />
          </div>
          <div className="p-4" style={{ minHeight: "300px" }}>
            <h2 className="mt-2 mb-2  font-bold">{article?.title}</h2>
            <p className="text-sm">{article.description}</p>
          </div>
          <div className="flex display-inline bg-gray-200">
            <div className="p-4 pb-2 text-xs" style={{ width: "70%" }}>
              <span className="flex items-center mb-1 text-sm text-yellow-500 font-bold">
                {article.author}
              </span>
              <span className="flex items-center ">
                {new Date(article.publishedAt).toLocaleString("en-US", {
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </span>
            </div>
            <div
              className="p-4 pb-2 text-xs text-right"
              style={{ width: "30%", marginTop: "auto" }}
            >
              <div className="text-yellow-500">Read More...</div>
            </div>
          </div>
        </a>
      </div>

      <div className="rounded overflow-hidden shadow-lg hidden">
        <img className="w-full" src={article.urlToImage} />

        <div className="px-6 py-4 bg-gray-50" style={{ minHeight: "300px" }}>
          <div className="font-bold text-base mb-2">{article?.title}</div>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>

        <div className="px-6 pt-4 pb-2">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <p className="text-sm text-yellow-500 font-bold">
              {article.author}
            </p>
          </span>
          <p className="text-sm bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {new Date(article.publishedAt).toLocaleString("en-US", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </p>
        </div>

        <div className="px-6 pt-4 pb-2 bg-gray-200 hidden">
          <div className="grid grid-cols-2 grid-rows-1">
            <div className="pr-2 text-base">
              <p className="text-sm text-yellow-500 font-bold">
                Sameer Sakhare
              </p>
              <p className="text-sm ">
                {new Date(article.publishedAt).toLocaleString("en-US", {
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </p>
            </div>
            <div className="px-2 text-xs text-right self-end">
              <i className="text-grey-darker far fa-building"></i> Read More...
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
