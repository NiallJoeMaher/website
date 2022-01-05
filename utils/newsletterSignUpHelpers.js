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
    if (data?.alreadySubscribed) return onAlreadyActive();
    if (response.status === 200) return onSuccess();
    if (response.status >= 400) throw new Error();
  } catch (error) {
    console.error(error);
    onError();
  }
};
