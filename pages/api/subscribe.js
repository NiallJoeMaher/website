export default async function handler(req, res) {
  const { email } = req.body;
  const url = `https://api.convertkit.com/v3/forms/${process.env.FORM_ID}/subscribe`;
  try {
    if (!email) throw "No email provided";
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
    if (data.error) throw data.error;
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ error });
  }
}
