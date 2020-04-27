import { useEffect } from "react";
import { backgrounds } from "./Backgrounds";
import { executeAction } from "../store/interfaces/interfaces";

const addBodyClass = (className: string) =>
  document.body.classList.add(className);
const removeBodyClass = (className: string) =>
  document.body.classList.remove(className);

export const useBodyClass = (className: Array<string>) => {
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

export const formatTime = (time: string) => {
  return time.toString().length < 4
    ? "0" + time.split("")[0] + ":00"
    : time.split("")[0] + time.split("")[1] + ":00";
};
// class weatherBackgrounds {
//   private backgroundShuffle = () => {
//     return Math.floor(Math.random() * 10 + 1);
//   };

//   public getBackground = (type: string) => {
//     return `${type}-bkg-${this.backgroundShuffle()}`;
//   };
// }
// const myBackgrounds = new weatherBackgrounds();
// console.info(myBackgrounds.getBackground("sunny"));

export const bodyBackgroundClass = (
  isDayTime: string,
  weather: keyof typeof Enumerator
) => {
  return isDayTime == "no"
    ? `${backgrounds[weather]}-night`
    : backgrounds[weather];
};

export const weatherImage = (
  isDayTime: string,
  weather: keyof typeof Enumerator
) => {
  return isDayTime == "no"
    ? `/src/images/icons/${backgrounds[weather]}-night.png`
    : `/src/images/icons/${backgrounds[weather]}.png`;
};
