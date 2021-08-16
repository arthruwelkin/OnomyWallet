import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthSwitch} from './AuthSwitch';

function Root() {
  return (
    <NavigationContainer>
      <AuthSwitch />
    </NavigationContainer>
  );
}

export {Root};
