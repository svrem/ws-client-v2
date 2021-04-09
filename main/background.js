import { app } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";
import path from "path";

const isProd = process.env.NODE_ENV === "production";

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow("main", {
    width: 1000,
    height: 600,
    minHeight: 600,
    minWidth: 500,
    backgroundColor: "#373737",
    webPreferences: {
      devTools: !isProd,
    },
    logo: path.join(__dirname + "/Icon/logo3.png"),
  });

  mainWindow.title = "WS-client";

  if (isProd) {
    mainWindow.removeMenu();
    await mainWindow.loadURL("app://./home.html");
  } else {
    // mainWindow.webPreferences.devTools = false;
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    // mainWindow.webContents.openDevTools();
  }
})();

app.on("window-all-closed", () => {
  app.quit();
});
