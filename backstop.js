const id = "google_com";
const live = "https://www.google.com";
const staging = "";

const sites = [
  {"label": "home", "url": "/?hl=en", "referenceUrl": "/?hl=ru"},
  {"label": "home2", "url": "/?hl=fr", "referenceUrl": "/?hl=ru"},
  {"label": "home3", "url": "/?hl=es", "referenceUrl": "/?hl=ru"},
  {"label": "home4", "url": "/?hl=ru", "referenceUrl": "/?hl=ru", "delay": 100}
];

const scenarios = [];
const viewports = require("./viewports");
const defaultScenario = require("./defaultScenario");

sites.map(site => {
  scenarios.push({
    ...defaultScenario,
    ...{
      ...site,
      ...{
        "label": site.label || site.url + (site.clickSelector || ""),
        "url": staging ? staging + site.url : live + site.url,
        "referenceUrl": live + (site.referenceUrl || site.url)
      }
    }
  });
});

module.exports = {
  "id": id,
  "viewports": viewports,
  "onBeforeScript": "puppet/onBefore.js",
  "onReadyScript": "puppet/onReady.js",
  "scenarios": scenarios,
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "engine_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "report": ["browser"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"]
  },
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
};