const ALREADY_ACTIVE_MESSAGE = "This email address has already been subscribed";

export default async function handler(req, res) {
  const { email } = req.body;
  const url = `https://www.getrevue.co/api/v2/subscribers`;
  try {
    if (!email) throw "No email provided";
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: `Token ${process.env.REVUE_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        double_opt_in: false,
      }),
    });
    const data = await response.json();
    if (data?.email) return res.status(200).json(data);
    // get an array with a string with the error message
    if (data?.error.email[0] === ALREADY_ACTIVE_MESSAGE)
      return res.status(200).json({ alreadySubscribed: true });
    throw data;
  } catch (error) {
    res.status(400).json({ error });
  }
}
