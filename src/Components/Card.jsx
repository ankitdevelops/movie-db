import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Card({ content, loading }) {
  const [rating, setRating] = useState(0);

  if (loading) {
    return (
      <div className="sm:w-8/12 mx-auto mt-10">
        <div className="card sm:card-side bg-base-100 flex flex-col justify-center items-center  py-10 shadow-xl w-full h-auto">
          <>
            <ClipLoader
              color="#fff"
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </>
          <p>No Content Found. Search Again</p>
        </div>
      </div>
    );
  }
  if (!content) {
    console.log("empty");
  }
  return (
    <div className="sm:w-10/12 mx-auto mt-10">
      <div className="card sm:card-side bg-base-100 shadow-xl w-full h-auto">
        <figure className="w-6/12">
          <img src={content?.Poster} className=" h-auto w-auto " />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">
            {content?.Title}
            <div className="badge badge-secondary">{content?.Type}</div>
            <div className="badge badge-secondary">{content?.Year}</div>
          </h2>
          <p>{content?.Plot}</p>
          <div className="grid gap-3 grid-cols-3 mt-5">
            <div className="flex flex-col items-center text-center indicator p-3 rounded-xl  shadow-sm w-full bg-base-200">
              <h3 className="font-semibold">IMDb RATING</h3>
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  className="ipc-icon ipc-icon--star sc-e457ee34-4 dzsYfH"
                  id="iconContext-star"
                  viewBox="0 0 24 24"
                  fill="#fb923c"
                  role="presentation"
                >
                  <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                </svg>
                <h3 className="text-2xl font-bold">
                  {content?.imdbRating} / 10
                </h3>
              </div>
              <p>{content?.imdbVotes}</p>
            </div>
            <div className="flex flex-col items-center text-center indicator p-3 rounded-xl  shadow-sm w-full bg-base-200">
              <h3 className="font-semibold">Director</h3>
              <div className="flex items-center justify-center">
                <h3 className="">{content?.Director} </h3>
              </div>
            </div>
            <div className="flex flex-col items-center text-center indicator p-3 rounded-xl  shadow-sm  w-full bg-base-200">
              <h3 className="font-semibold">Language</h3>
              <div className="flex items-center justify-center">
                <h3 className="">{content?.Language} </h3>
              </div>
            </div>
            <div className="flex flex-col items-center text-center indicator p-3 rounded-xl  shadow-sm w-full bg-base-200">
              <h3 className="font-semibold">Writer</h3>
              <div className="flex items-center justify-center">
                <h3 className="">{content?.Writer} </h3>
              </div>
            </div>
            <div className="flex flex-col items-center text-center indicator p-3 rounded-xl  shadow-sm w-full bg-base-200">
              <h3 className="font-semibold">Actors</h3>
              <div className="flex items-center justify-center">
                <h3 className="">{content?.Actors} </h3>
              </div>
            </div>
            <div className="flex flex-col items-center text-center indicator p-3 rounded-xl  shadow-sm w-full bg-base-200">
              <h3 className="font-semibold">Genre</h3>
              <div className="flex items-center justify-center">
                <h3 className="">{content?.Genre} </h3>
              </div>
            </div>
          </div>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
