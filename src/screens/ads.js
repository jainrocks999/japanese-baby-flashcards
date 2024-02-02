import {Platform} from 'react-native';
import {TestIds} from 'react-native-google-mobile-ads';
export const Addsid = {
  ...Platform.select({
    android: {
      BANNER: 'ca-app-pub-3339897183017333/6000218381',
      Interstitial: 'ca-app-pub-3339897183017333/7476951587',
    },
    ios: {
      BANNER: TestIds.BANNER,
      Interstitial: TestIds.INTERSTITIAL,
    },
  }),
};
