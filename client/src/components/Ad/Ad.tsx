import { useState } from "react";
import "./ad-listing.css";

export default function Ad({ ad }) {
  const [isExpanded, setIsExpanded] = useState(false);

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
        <button className="connect-btn">Connect</button>
        <div className="interests-logo-message">
          <p> {ad.interests} </p>
          <span className="material-symbols-outlined favorite">
            playlist_add
          </span>
        </div>
      </div>
    </div>
  );
}

{
  /* <span class="material-symbols-outlined">expand_circle_up</span>; */
  // <span class="material-symbols-outlined">playlist_add_check</span>;
}
