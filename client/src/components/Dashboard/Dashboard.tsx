import "./dashboard.css";
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";
// import Profile from "../Profile/Profile";
// import Form from "../Form/Form";
import Ad from "../Ad/Ad";

const mocks = [
  {
    author: "Jennine young",
    authorId: "93326cd6-9d7b-4cb7-8fd7-ad9e17b5c3be",
    offer: "French speaking practice for English",
    image: "https://i.pravatar.cc/200?u=3@pravatar.com",
    message:
      "I have been learning french for sometime now and would love to speak with a native speaker in exchange I am also happy to speak with you in english, its my mother tongue",
    comment: "Sorry cant be flexible with other offers",
    type: "Learn",
  },
  {
    author: "Jake holmes",
    authorId: "71c93918-1651-4792-bd1c-8a8ae78ffdac",
    offer: "Astanga yoga for Qigong",
    image: "https://i.pravatar.cc/200?u=2@pravatar.com",
    message:
      "I have been doing Astanga yoga for couple of years and recently got interested learning some basic Qigong. If you have any level of knowledge in Qigong and want to exchage that would be great",
    comment: "sorry but i am not taking other offers",
    type: "Teach",
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
