export const [SUCCESS, ERROR, ACTIVE_SUB] = ["SUCCESS", "ERROR", "ACTIVE_SUB"];

export const submitEmail = async ({
  email,
  onAlreadyActive,
  onError,
  onSuccess,
}) => {
  const url = `/api/subscribe`;
  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const data = await response.json();

    if (data?.subscription.state === "active") onAlreadyActive();
    if (data?.subscription.state === "inactive") onSuccess();
    if (data.error) throw new Error();
  } catch (error) {
    onError();
  }
};
