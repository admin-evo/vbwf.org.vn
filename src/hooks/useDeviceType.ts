import { useEffect, useState } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

export const useDeviceType = (): DeviceType => {
  const getDeviceType = (): DeviceType => {
    if (typeof window === "undefined") {
      return "desktop";
    }

    const width = window.innerWidth;

    if (width < 768) {
      return "mobile";
    }

    if (width < 1024) {
      return "tablet";
    }

    return "desktop";
  };

  const [deviceType, setDeviceType] = useState<DeviceType>(getDeviceType);

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
};
