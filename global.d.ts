import en from './messages/en.json';

type Messages = typeof en;

declare global {
  // use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
