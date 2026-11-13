const { defineConfig } = require("cypress");
const { existsSync } = require("node:fs");
const { execFileSync } = require("node:child_process");
const path = require("node:path");

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 900,
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 90000,
  video: false,
  e2e: {
    baseUrl: "https://www.automationexercise.com",
    setupNodeEvents(on, config) {
      const browsers = Array.isArray(config.browsers) ? config.browsers : [];
      const browserPath = getBravePath();
      if (!browserPath) return config;
      const version = getBraveVersion(browserPath);

      config.browsers = [
        ...browsers.filter((browser) => browser.name !== "brave"),
        {
          name: "brave",
          channel: "stable",
          family: "chromium",
          displayName: "Brave",
          version,
          majorVersion: Number(version.split(".")[0]),
          path: browserPath,
        },
      ];

      return config;
    },
  },
});

function getBravePath() {
  const paths = {
    win32: [process.env.ProgramFiles, process.env["ProgramFiles(x86)"], process.env.LOCALAPPDATA]
      .filter(Boolean)
      .map((root) => path.join(root, "BraveSoftware", "Brave-Browser", "Application", "brave.exe")),
    darwin: ["/Applications/Brave Browser.app/Contents/MacOS/Brave Browser"],
    linux: ["/usr/bin/brave-browser", "/usr/bin/brave", "/opt/brave.com/brave/brave"],
  };

  const candidates = process.env.BRAVE_PATH
    ? [process.env.BRAVE_PATH]
    : paths[process.platform] || [];
  const browserPath = candidates.find((candidate) => existsSync(candidate));

  return browserPath;
}

function getBraveVersion(browserPath) {
  const output = process.platform === "win32"
    ? execFileSync("powershell.exe", [
        "-NoProfile",
        "-NonInteractive",
        "-Command",
        `(Get-Item -LiteralPath '${browserPath.replace(/'/g, "''")}').VersionInfo.ProductVersion`,
      ], { encoding: "utf8", timeout: 10000, windowsHide: true })
    : execFileSync(browserPath, ["--version"], { encoding: "utf8", timeout: 10000 });
  const version = output.match(/\d+\.\d+\.\d+\.\d+/)?.[0];

  if (!version) {
    throw new Error(`Não foi possível identificar a versão do Brave em ${browserPath}.`);
  }

  return version;
}
