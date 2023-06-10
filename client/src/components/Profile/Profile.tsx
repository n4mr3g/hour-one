import Button from "../Button/Button";
import "./Profile.css";
export default function Profile() {
  //  TODO Need to change the date coming in here
  const mock = {
    imageUrl: "https://i.pravatar.cc/150?u=17@pravatar.com",
    firstName: "Florence",
    lastName: "Hills",
    email: "Hills@gmail.com",
  };
  return (
    <div className="profile_container">
      <img className="profile-image" src={mock.imageUrl} alt="user" />

      <p className="profile-content name">
        {mock.firstName} {mock.lastName}
      </p>
      <p className="profile-content email">{mock.email}</p>
      <Button value="update" />
    </div>
  );
}
