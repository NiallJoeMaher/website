/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useCallback, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ReactCanvasConfetti from "react-canvas-confetti";
import {
  SUCCESS,
  ERROR,
  ACTIVE_SUB,
} from "../../utils/newsletterSignUpHelpers";
import { set } from "date-fns";
export default function NewsletterAlert({ open, onClose, status }) {
  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  };

  const statuses = {
    [SUCCESS]: {
      emoji: "🎉",
      header: "Successfully Subscribed",
      body: "Check your email to confirm your subscription.",
    },
    [ERROR]: {
      emoji: "😢",
      header: "Something went wrong",
      body: "Check your email and please try again.",
    },
    [ACTIVE_SUB]: {
      emoji: "🕺",
      header: "Already Subscribed",
      body: `Trying to subscribe again? Or just like seeing confetti? 🎉`,
    },
  };

  const showConfetti = status === SUCCESS || status === ACTIVE_SUB;

  const { emoji, header, body } = statuses[status] || statuses[ERROR];

  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 40,
    });

    makeShot(0.35, {
      spread: 60,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  useEffect(() => {
    if (showConfetti) {
      setTimeout(function () {
        fire();
      }, 100);

      const audio = new Audio(
        "/audio/Halo_Reach_Grunt_Birthday_Party_Sound.mp3"
      );
      audio.play();
    }
  }, [status]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-400 bg-opacity-50 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-gray-100">
                  <span className="text-5xl">{emoji}</span>
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    {header}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{body}</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full bg-gradient-to-b from-niall-pink to-niall-orange hover:from-niall-pink-600 hover:to-niall-orange-600 border border-transparent rounded-md py-2 px-4 items-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-nialls-pink-800 focus:ring-nialls-pink"
                  onClick={onClose}
                >
                  Back to the site
                </button>
              </div>
              <ReactCanvasConfetti
                refConfetti={getInstance}
                style={canvasStyles}
              />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
