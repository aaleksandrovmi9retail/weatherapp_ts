import { useEffect } from "react";

const addBodyClass = className => document.body.classList.add(className);
const removeBodyClass = className => document.body.classList.remove(className);

export const useBodyClass = className => {
  useEffect(() => {
    // Set up
    className instanceof Array
      ? className.map(addBodyClass)
      : addBodyClass(className);

    // Clean up
    return () => {
      className instanceof Array
        ? className.map(removeBodyClass)
        : removeBodyClass(className);
    };
  }, [className]);
};

export const formatTime = time => {
  return time.toString().length < 4
    ? "0" + time.split("")[0] + ":00"
    : time.split("")[0] + time.split("")[1] + ":00";
};

export const weatherImage = (isDayTime, weather) => {
  // night
  if (isDayTime === "no") {
    switch (weather) {
      case "116":
      case "119":
        return "./images/icons/clowdy.png";

      case "263":
      case "176":
      case "293":
      case "386":
      case "353":
        return "./images/icons/night-3.png";

      case "143":
      case "122":
        return "./images/icons/night-1.png";

      case "113":
        return "./images/icons/night.png";

      case "200":
        return "./images/icons/night-7.png";

      case "227":
      case "332":
      case "338":
      case "179":
        return "./images/icons/4.png";

      case "182":
      case "185":
      case "314":
      case "311":
      case "317":
      case "320":
      case "350":
      case "362":
      case "365":
      case "374":
      case "377":
        return "./images/icons/5.png";

      case "230":
      case "323":
      case "326":
      case "329":
      case "335":
      case "368":
      case "371":
      case "392":
      case "395":
        return "./images/icons/8.png";

      case "248":
        return "images/icons/10.png";

      case "260":
        return "./images/icons/9.png";

      case "266":
      case "296":
      case "302":
      case "299":
        return "./images/icons/11.png";

      case "284":
        return "./images/icons/12.png";

      case "308":
      case "305":
      case "356":
      case "359":
      case "389":
        return "./images/icons/13.png";

      default:
        return "images/icons/14.png";
    }
    // day
  } else {
    switch (weather) {
      case "113":
        return "images/icons/sunny.png";

      case "116":
      case "119":
        return "images/icons/clowdy.png";

      case "143":
      case "122":
        return "images/icons/1.png";

      case "176":
      case "293":
      case "386":
        return "images/icons/3.png";

      case "179":
        return "images/icons/4.png";

      case "182":
      case "185":
      case "314":
      case "311":
      case "317":
      case "320":
      case "350":
      case "362":
      case "365":
      case "374":
      case "377":
        return "images/icons/5.png";

      case "200":
        return "images/icons/7.png";

      case "227":
      case "332":
      case "338":
        return "images/icons/4.png";

      case "230":
      case "323":
      case "326":
      case "329":
      case "335":
      case "368":
      case "371":
      case "392":
      case "395":
        return "images/icons/8.png";

      case "248":
        return "images/icons/10.png";

      case "260":
        return "images/icons/9.png";

      case "263":
        return "images/icons/3.png";

      case "266":
      case "296":
      case "302":
      case "299":
      case "353":
        return "images/icons/11.png";

      case "284":
        return "images/icons/12.png";

      case "308":
      case "305":
      case "356":
      case "359":
      case "389":
        return "images/icons/13.png";

      default:
        return "images/icons/14.png";
    }
  }
};

export const bodyBackgroundClass = (isDayTime, weather) => {
  if (isDayTime === "no") {
    return "night-bkg";
  } else {
    switch (weather) {
      case "113":
        return "sunny-bkg";

      case "116":
      case "119":
      case "143":
      case "122":
        return "clowdy-bkg";

      case "296":
      case "266":
      case "302":
      case "299":
      case "353":
      case "176":
      case "293":
      case "308":
      case "305":
      case "356":
      case "359":
      case "389":
        return "rainy-bkg";

      case "200":
      case "386":
        return "thunder-bkg";

      case "227":
      case "332":
      case "338":
      case "230":
      case "323":
      case "326":
      case "329":
      case "335":
      case "368":
      case "371":
      case "392":
      case "395":
        return "snow-bkg";

      case "248":
      case "260":
        return "fog-bkg";

      default:
        return "sunny-bkg";
    }
  }
};
