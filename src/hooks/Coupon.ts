import { coupons } from '@data/index';
import { ICoupon } from '@src/interfaces';

export const useCouponList = (): ICoupon[] => {
  return coupons;
};
