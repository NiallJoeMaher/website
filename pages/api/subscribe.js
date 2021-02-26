export default async function handler(req, res) {
  const url = `https://api.convertkit.com/v3/forms/${process.env.FORM_ID}/subscribe`;
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key: process.env.CONVERT_KIT_PUBLIC,
      email: "niall@codu.ie",
    }),
  });
  const data = await response.json();
  res.status(200).json({ data });
}
