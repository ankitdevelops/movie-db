import React, { useState } from "react";
function Card({ content, loading }) {
  const [rating, setRating] = useState(0);
  //   const handleRating = (rate) => {
  //     if(!loading){

  //     }

  //     // other logic
  //   }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="sm:w-8/12 mx-auto mt-10">
      <div className="card sm:card-side bg-base-100 shadow-xl w-full">
        <figure>
          <img src={content?.Poster} className="h-full w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {content?.Title}
            <div className="badge badge-secondary">{content?.Type}</div>
          </h2>
          <p>{content?.Plot}</p>
          <div className="rating rating-lg rating-half">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              className="ipc-icon ipc-icon--star sc-e457ee34-4 dzsYfH"
              id="iconContext-star"
              viewBox="0 0 24 24"
              fill="#fb923c"
              role="presentation"
            >
              <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
            </svg>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
