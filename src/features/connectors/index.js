import {InjectedConnector} from '@web3-react/injected-connector';

const Networks = {
  Rinkeby: 4,
};

export const injected = new InjectedConnector({
  supportedChainIds: [Networks.Rinkeby],
});
