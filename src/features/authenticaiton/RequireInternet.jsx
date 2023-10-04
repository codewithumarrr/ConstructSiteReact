import { useEffect, useState } from "react";
import InternetFailure from "../../components/not-found/InternetFailure";

const RequireInternet = (props) => {
  const [online, setOnline] = useState(navigator.onLine);
  console.log("online", online);

  useEffect(() => {
    function handleOnline() {
      setOnline(true);
      console.log("handleOnline");
    }

    function handleOffline() {
      setOnline(false);
      console.log("handleOffline");
    }

    console.log("mounted");
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      console.log("unmounted");
    };
  }, []);

  if (online) return props.children;
  return <InternetFailure />;
};

export default RequireInternet;
