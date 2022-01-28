export default {
  id: 'pan-chain',
  name: 'Moonbys Testnet',
  description: 'Pan is the first Moonbys testnet',
  logo: `logo.svg`,
  website: 'https://moonbys.com',
  apiURL: 'http://139.59.167.214:1317/', // use `npx lcp --proxyUrl http://34.123.30.100:1317`
  rpcURL: 'http://139.59.167.214:26657/',
  stakingDenom: 'upan',
  coinLookup: [
    {
      viewDenom: 'PAN',
      chainDenom: 'upan',
      chainToViewConversionFactor: 1e-6,
      icon: `images/Moonbys.png`,
    },
  ],
  addressPrefix: 'pan',
  validatorAddressPrefix: 'panvaloper',
  validatorConsensusaddressPrefix: 'panvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `14 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'upan',
          amount: 0.001,
        },
      ],
    },
  },
  icon: `https://moonbys.com/favicon.ico`,
  // This is only to be used as a developer tool and for testing purposes
  // NEVER ENABLE LOCALSIGNING IN PRODUCTION OR FOR MAINNETS
  localSigning: false,
}
