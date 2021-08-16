import React from 'react';
import {View, Text} from 'react-native';

import {ChevronRightIcon} from 'shared/components';
import {themeColors} from 'shared/styles/themeColors';
import metamask from 'assets/wallets/metamask.png';

import {
  Button,
  LeftColumn,
  RightColumn,
  ConnectWith,
  Wallet,
  WalletIcon,
  SkeletonRect,
} from './buttonStyles';

const ACTIVE_OPACITY = 0.75;

function AuthMethodButton({wallet, onPress}) {
  return (
    <Button activeOpacity={wallet ? ACTIVE_OPACITY : 1} onPress={onPress}>
      <LeftColumn>
        {wallet ? renderWalletContent() : renderSkeleton()}
      </LeftColumn>
      <RightColumn>
        <ChevronRightIcon />
      </RightColumn>
    </Button>
  );

  function renderWalletContent() {
    const WALLETS = {
      metamask: {
        name: 'Metamask',
        color: themeColors.orange,
        asset: metamask,
      },
    };

    const {asset, color, name} = WALLETS[wallet];

    return (
      <>
        <WalletIcon source={asset} />
        <View>
          <ConnectWith />
          <Wallet>
            <Text style={{color}}>{name}</Text>
          </Wallet>
        </View>
      </>
    );
  }

  function renderSkeleton() {
    return (
      <>
        <SkeletonRect style={{width: 36, height: 36}} />
        <View>
          <SkeletonRect style={{width: 100, height: 19}} />
          <SkeletonRect style={{width: 128, height: 28, marginTop: 10}} />
        </View>
      </>
    );
  }
}

export {AuthMethodButton};
