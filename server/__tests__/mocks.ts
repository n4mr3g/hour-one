export const mockOffer = {
  author: "Gary Newman",
  message:
    "I wanted to learn a bit of japanese cooking. I am interested in soups and sushi but I am open to your suggestions as well. I have been playing guitar for a year now and would be happy to share my knowledge to you",
  comment: "Make an offer for other learnings",
  type: "Learn",
  title: "Japanese cooking for basic guitar",
};

export const mockOffersDb = [
  {
    //TODO: Check with id instead (in tests)
    _id: "648b5011bf4ab0dbb37326b1",
    author: "Gary Newman",
    message:
      "I wanted to learn a bit of japanese cooking. I am interested in soups and sushi but I am open to your suggestions as well. I have been playing guitar for a year now and would be happy to share my knowledge to you",
    comment: "Make an offer for other learnings",
    type: "Learn",
    title: "Japanese cooking for basic guitar",
  },
];

export const validLoginCredentials = {
  email: "test@test.com",
  password: "123456789",
};

export const invalidLoginCredentials = {
  email: "wrong@wrong.fake",
  password: "14574563454",
};

export const userCreationData = {
  valid: {
    name: "test2",
    email: "test2@test2.com",
    password: "supersecurepassword123",
    profilePicture: "",
  },
  shortPassword: {
    name: "shortpassword",
    email: "test3@test3.com",
    password: "1234567",
    profilePicture: "",
  },
  invalidEmail: {
    name: "bad email",
    email: "not an email",
    password: "123456789",
    profilePicture: "",
  }
};
