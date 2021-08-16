import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {Web3ReactProvider} from '@web3-react/core';
import {Web3Provider} from '@ethersproject/providers';

import '../shim';

import {themeColors} from './shared/styles/themeColors';
import {Root} from './screens';

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={themeColors.black900} />
      <Web3ReactProvider getLibrary={getLibrary}>
        <ThemeProvider theme={themeColors}>
          <Root />
        </ThemeProvider>
      </Web3ReactProvider>
    </SafeAreaView>
  );
}

export {App};
