import { GameStartr } from "../GameStartr";

export const createContainer = (gameStarter: GameStartr) =>
    gameStarter.utilities.createElement<HTMLDivElement>("div", {
        children: [
            gameStarter.canvas,
        ],
        className: "GameStarter",
        style: {
            position: "relative",
            width: `${gameStarter.settings.width}px`,
            height: `${gameStarter.settings.height}px`,
        },
    });
