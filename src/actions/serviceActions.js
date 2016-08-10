import { HIDE_APP_BAR, SHOW_APP_BAR } from './const';

export function hideAppBarAction() {
  return {
    type: HIDE_APP_BAR
  }
}

export function showAppBarAction() {
  return {
    type: SHOW_APP_BAR
  }
}
