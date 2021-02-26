export default async function handler(req, res) {
  const { email } = req.body;
  const url = `https://api.convertkit.com/v3/forms/${process.env.FORM_ID}/subscribe`;
  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: process.env.CONVERT_KIT_PUBLIC,
        email,
      }),
    });
    const data = await response.json();
    res.status(201).json({ response: data });
  } catch (error) {
    res.status(400);
  }
}
