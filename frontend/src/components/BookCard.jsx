import React from "react";

function BookCard({ title, author, cover }) {
  return (
    <div className="relative bg-[#161b22] border border-[#30363d] rounded-xl p-5 shadow-lg transition-transform transform hover:scale-105 hover:shadow-[#58a6ff]">
      {/* Book Cover */}
      <img
        src={cover}
        alt={title}
        className="w-full h-60 object-cover rounded-lg border border-[#30363d] shadow-md"
      />

      {/* Book Details */}
      <div className="mt-4 text-center">
        <h2 className="text-xl font-bold text-[#58a6ff]">{title}</h2>
        <p className="text-md text-gray-400 mt-2">{author}</p>
      </div>
    </div>
  );
}

export default BookCard;
