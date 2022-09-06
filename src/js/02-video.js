import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const STORAGE_KEY = "videoplayr-current-time";

const inframe = document.querySelector("iframe");
const player = new Player(inframe);

function onPlay(data) {
  console.log(data);
  localStorage.setItem(STORAGE_KEY, data.seconds);
}

player.on("timeupdate", throttle(onPlay, 1000));

player.setCurrentTime(Number(localStorage.getItem(STORAGE_KEY)));
