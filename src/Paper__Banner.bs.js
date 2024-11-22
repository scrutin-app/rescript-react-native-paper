'use strict';


function renderImage(reRenderIcon) {
  return function (jsIconProps) {
    return reRenderIcon({
                size: jsIconProps.size
              });
  };
}

exports.renderImage = renderImage;
/* No side effect */
