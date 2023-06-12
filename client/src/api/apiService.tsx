export async function postOffer(offer) {
  const res = await fetch("http://localhost:4000/offer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(offer),
  });
  const json = await res.json();
  return json;
}
