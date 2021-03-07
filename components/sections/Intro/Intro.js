import { useState } from "react";

const [SUCESS, ERROR, ACTIVE_SUB] = ["SUCESS", "ERROR", "ACTIVE_SUB"];

export default function Intro() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const setStatusMessage = (status) => {
    const statuses = {
      [SUCESS]:
        "Wooo thanks for subscribing! 🥳 Check your email to confirm your subscription.",
      [ERROR]:
        "Something went wrong, check your email and please try again... 😢",
      [ACTIVE_SUB]:
        "Trying to subscribe again? You are already a subscriber! Check your spam if you haven't been getting my newsletter. 😉",
    };

    return statuses[status];
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      if (data?.subscription.state === "active") setStatus(ACTIVE_SUB);
      if (data?.subscription.state === "inactive") setStatus(SUCESS);
      if (data.error) throw new Error();
      setEmail("");
    } catch (error) {
      setStatus(ERROR);
    }
  };

  return (
    <>
      <section className="relative my-20 mx-2 sm:mx-6 lg:mx-auto">
        <h1 className="text-center text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          Exploring Ideas on Web <br /> Development and Business
        </h1>
        <p className="text-center mt-2 mb-12 text-xl tracking-tight font-semibold  text-gray-400 sm:text-3xl md:text-4xl">
          + some random stuff.
        </p>
        <form className="mb-8 flex max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="relative flex items-stretch flex-grow focus-within:z-10">
            <input
              name="email"
              id="email"
              disabled={status === SUCESS || status === ACTIVE_SUB}
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="focus:ring-pink-500 focus:border-pink-500 block w-full rounded-l-full pl-6 bg-gray-600 bg-opacity-25 hover:bg-opacity-10 hover:animate-pulse blur-background p-4 border-gray-100 border rounded-xl transition-all text-base font-semibold text-white"
              placeholder="name@mail.com"
            />

            <button
              type="submit"
              disabled={status === SUCESS || status === ACTIVE_SUB}
              className="-ml-px relative inline-flex items-center space-x-2 px-6 py-1 border border-gray-300 text-base rounded-r-full text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 font-semibold"
            >
              <span>Subscribe</span>
            </button>
          </div>
        </form>
        {status && (
          <p className="text-center text-gray-400 font-medium text-lg">
            {setStatusMessage(status)}
          </p>
        )}
      </section>
    </>
  );
}
