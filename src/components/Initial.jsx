import { useEffect } from "react";

function InitialAnimation() {
  useEffect(() => {
    history.pushState("", document.title, window.location.pathname + window.location.search);

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    history.replaceState(null, null, "#desktop-nav");

    const timer = setTimeout(() => {
      document.body.classList.remove("loading");
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}

export default InitialAnimation;
