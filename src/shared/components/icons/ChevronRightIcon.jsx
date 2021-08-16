import React from 'react';
import {Svg, Path} from 'react-native-svg';

function ChevronRightIcon() {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40">
      <Path
        fill="#8d89a3"
        d="M.307.3a1.014,1.014,0,0,0-.1,1.34l.1.115L8.717,10,.307,18.244a1.014,1.014,0,0,0-.1,1.34l.1.115a1.065,1.065,0,0,0,1.366.1l.118-.1,9.151-8.971a1.014,1.014,0,0,0,.1-1.34l-.1-.115L1.792.3A1.064,1.064,0,0,0,.307.3Z"
        transform="translate(15.625 10)"
      />
    </Svg>
  );
}

export {ChevronRightIcon};
