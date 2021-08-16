import React from 'react';
import {Text} from 'react-native';

import {HomeLayout} from './screenStyles';

import {OnomyLogoIcon} from 'shared/components';

function HomeScreen() {
  return (
    <HomeLayout>
      <OnomyLogoIcon />
      <Text>
        Home screen Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
        consequatur doloribus illum magnam maxime nostrum omnis placeat quia,
        ratione. Assumenda dolorem esse harum hic obcaecati provident qui
        quibusdam temporibus voluptate?
      </Text>
    </HomeLayout>
  );
}

export {HomeScreen};
