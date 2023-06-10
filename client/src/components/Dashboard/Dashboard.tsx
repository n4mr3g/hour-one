import "./dashboard.css";
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";
// import Profile from "../Profile/Profile";
// import Form from "../Form/Form";
import Ad from "../Ad/Ad";

const mocks = [
  {
    imageUrl: "https://i.pravatar.cc/150?u=1@pravatar.com",
    tagline: "Japanese cooking for basic guitar",
    message: `
    Hi There,
    I wanted to learn a bit of japanese cooking. I am interested in soups
    and sushi the most but if I am open to other options as well.
    In return I am happy to teach you some basic guitar we can cover the
    major chords and a few songs.
    looking forward to hearing from you`,
    interests: `Make an offer for other learnings`,
    offer: "Teach",
  },
  {
    imageUrl: "https://i.pravatar.cc/150?u=2@pravatar.com",
    tagline: "Yoga for Qigong",
    message: `
    I have been practiing Qigong for quite a year now but was keen to learn some basic yoga and philosopy. Would be amazing if someone would like to have and exchange`,
    interests: `sorry but i am not taking other offers`,
    offer: "Learn",
  },
];

export default function Dashboard() {
  return (
    <div>
      <Navigation />
      <Menu />
      <div className="dashboard-container">
        {/* <Profile /> */}
        {/* <Form /> */}
        {mocks.map((ad) => (
          <Ad ad={ad} key={crypto.randomUUID()}></Ad>
        ))}
      </div>
    </div>
  );
}
