; (function () {
  // 0f45b2
  var currentScript = document.currentScript;
  var currentHost = currentScript && currentScript.src
    ? new URL(currentScript.src).host
    : '';
  var script = document.createElement('script');
  var isPreview = window.name === 'kimi-website-preview';
  script.src = isPreview
    ? 'https://statics.kimi.ai/sdk/preview.1XL1Ndry.min.js'
    : 'https://statics.kimi.ai/sdk/publish.CN1wH0Em.min.js'
  script.setAttribute('data-host', currentHost);
  script.async = true;
  document.head.appendChild(script);
})()
