import React from "react";
const NewsBadge = ({ children, newsId, api }) => {
  return (
    <>
      <a
        onClick={() => {
          console.log("clicked", newsId);
          console.log("clicked", api);
        }}
      >
        <div>
          <div className="p-2 bg-white text-center rounded-full text-yellow-500 border-yellow-200 border-2 md:my-1 sm:my-1 my-1 w-auto min-w-max uppercase hover:border-yellow-400 hover:shadow-lg hover:border-transparent cursor-pointer">
            {children}
          </div>
        </div>
      </a>
    </>
  );
};

export default NewsBadge;
