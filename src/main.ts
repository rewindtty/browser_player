import "./style.css";
import "@xterm/xterm/css/xterm.css";
import { RewindTTYPlayer } from "./player";
import type { Routing } from "./types";

const player = new RewindTTYPlayer();

function handleRouting(): Routing {
  const path = window.location.pathname;
  const playMatch = path.match(/^\/play\/(.+)$/);
  
  if (playMatch) {
    const sessionId = playMatch[1];
    return { route: 'play' as const, sessionId };
  }
  
  return { route: 'home' as const };
}

document.addEventListener("DOMContentLoaded", async () => {
  const routing = handleRouting();
  await player.initialize(routing);
});

window.addEventListener("popstate", async () => {
  const routing = handleRouting();
  await player.handleRouteChange(routing);
});
