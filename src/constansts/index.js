import {Platform} from 'react-native';
const productSkus = Platform.select({
  android: ['japanese_in_ads_product'],
  ios: ['com.eflashapps.japfree.proupgrade'],
});
export const constants = {
  productSkus,
};
