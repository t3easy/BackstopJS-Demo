module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  if (!!vp.prefersColorScheme) {
    await page.emulateMediaFeatures([{
      name: 'prefers-color-scheme', value: vp.prefersColorScheme }]);
  }
};
