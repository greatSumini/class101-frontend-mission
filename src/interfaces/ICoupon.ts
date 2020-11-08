import { CouponType } from '@src/types';

export interface ICoupon {
  type: CouponType;
  title: string;
  discountRate?: number;
  discountAmount?: number;
}
