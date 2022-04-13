(function () {
  if (window.h5pCanvasResizerLoaded) {
    console.error('Canvas Reszier has been included more than once.');
    return;
  }
  window.h5pCanvasResizerLoaded = true;

  /**
   * @param {Window} sourceWindow
   * @return {HTMLIFrameElement}
   */
  function getIframeElementByWindow(sourceWindow, doc) {
    doc = doc || document;
    var iframes = doc.getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; i++) {
      if (iframes[i].contentWindow === sourceWindow) {
        return iframes[i];
      }
      if (iframes[i].src.substr(0, 11) === 'javascript:') {
        // Look inside the iframe (typically WYSIWYG)
        var child = getIframeElementByWindow(sourceWindow, iframes[i].contentDocument);
        if (child) {
          return child;
        }
      }
    }
  }

  var cimFrame;
  window.addEventListener('resize', function (event) {
    if (cimFrame) {
      cimFrame.style.height = (parseInt(cimFrame.style.height) - 1) + 'px';
    }
  });

  window.addEventListener('message', function (event) {
    try {
      var message = JSON.parse(event.data);
      if (event.origin && event.origin.indexOf('h5p.com') !== -1 && message.subject === 'lti.frameResize') {

        // Get sender
        var iframe = getIframeElementByWindow(event.source);
        if (!iframe || iframe.id === 'resource_selection_iframe') {
          return; // Cannot find sender or resource selection (needs scrollbar)
        }

        if (!iframe.dataset.frameResizeOk) {
          iframe.dataset.frameResizeOk = true;
          // Let the iframe know that we're resizing it so that any scrollbars can be disabled.
          event.source.postMessage(JSON.stringify({
            subject: 'lti.frameResizeOk'
          }), '*');
        }

        if (iframe.id === 'tool_content') {
          return; // Sender already using ToolLaunchResizer
        }

        var newWidth = '100%';
        if (iframe.id === 'external_tool_button_frame') {
          newWidth = Math.floor((window.innerWidth * 0.95) - 4) + 'px';
          cimFrame = iframe;
        }

        // Get new height
        var newHeight = parseInt(message.height);
        if (newHeight <= 0) {
          // Ensure visibility
          newHeight = 1;
        }

        // Adapt iframe size to content height and wrapper width
        iframe.style.width = newWidth;
        iframe.style.height = newHeight + 'px';
      }
    }
    catch (err) {
    }
  });
})();
