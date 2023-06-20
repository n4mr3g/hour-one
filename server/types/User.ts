export type Offer = {
  author: String,
  authorId: String,
  offer: String,
  image: String,
  message: String,
  comment: String,
  type: String,
}

export type User = {
  name: string,
  email: string,
  profilePicture: string,
  offers: Offer[],
  favorites: Offer[],
}
