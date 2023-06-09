import { useState } from "react";
import "./ad-listing.css";

export default function Ad({ ad }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // const mock = {
  //   imageUrl: "https://i.pravatar.cc/150?u=1@pravatar.com",
  //   tagline: "Japanese cooking for basic guitar",
  //   message: `
  //   Hi There,
  //   I wanted to learn a bit of japanese cooking. I am interested in soups
  //   and sushi the most but I am open to other options as well.
  //   In return I am happy to teach you some basic guitar we can cover the
  //   major chords and a few songs.
  //   looking forward to hearing from you`,
  //   interests: `Make an offer for other learnings`,
  // };
  return (
    <div className="ad-container">
      <div className="ad-container-top">
        <div className="ad-user-tagline">
          <img className="ad-image" src={ad.imageUrl} alt="user" />
          <p>{ad.tagline}</p>
        </div>
        <div className="ad-offer-expand">
          <div className="ad-offer">{ad.offer}</div>
          <span
            className="material-symbols-outlined expand"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            expand_circle_down
          </span>
        </div>
      </div>
      {isExpanded && <div className="ad-info">{ad.message}</div>}
      <div className="ad-container-bottom">
        <span className="material-symbols-outlined">interests</span>
        <p> {ad.interests} </p>
      </div>
    </div>
  );
}

{
  /* <span class="material-symbols-outlined">expand_circle_up</span>; */
}
