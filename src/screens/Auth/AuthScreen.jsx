import React from 'react';
import {View} from 'react-native';
import {useWeb3React} from '@web3-react/core';

import {OnomyLogoIcon} from 'shared/components';

import {AuthMethodButton} from './AuthMethodButton/AuthMethodButton';

import {
  AuthLayout,
  AuthMethodsWrapper,
  GreetingText,
  SignInText,
} from './screenStyles';

import {injected} from '../../features/connectors';

function AuthScreen() {
  const {activate} = useWeb3React();

  const onWalletPress = () => {
    activate(injected).then(r => console.log(r));
  };

  return (
    <AuthLayout>
      <View>
        <OnomyLogoIcon />
        <GreetingText>Hello, please</GreetingText>
        <SignInText>Sign In</SignInText>
      </View>
      <AuthMethodsWrapper>
        <AuthMethodButton wallet="metamask" onPress={onWalletPress} />
        <AuthMethodButton />
        <AuthMethodButton />
      </AuthMethodsWrapper>
    </AuthLayout>
  );
}

export {AuthScreen};
