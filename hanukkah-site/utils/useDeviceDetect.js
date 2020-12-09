import React from "react";

export default function useDeviceDetect() {
  const [isModerWeb, setModerWeb] = React.useState(false);

  React.useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(userAgent.match(/Firefox|Chrome/i));
    setModerWeb(mobile);
  }, []);
  return { isModerWeb };
}