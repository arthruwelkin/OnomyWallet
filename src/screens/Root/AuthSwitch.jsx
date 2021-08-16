import React from 'react';

import {AuthNavigator, ProtectedNavigator} from './Navigators';

/**
 * A function that takes responsibility for redirecting to authorized / protected screens.
 */

function AuthSwitch() {
  return 2 % 2 !== 0 ? <ProtectedNavigator /> : <AuthNavigator />;
}

export {AuthSwitch};
