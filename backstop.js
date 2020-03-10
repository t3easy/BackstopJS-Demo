const viewports = require("./viewports");
const defaultScenario = require("./defaultScenario");

const scenarios = [];
const live = "https://www.google.com";
const staging = "";


const sites = [
  {"label": "home", "url": "/?hl=en", "referenceUrl": "/?hl=ru"},
];

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
  "id": "backstop_default",
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