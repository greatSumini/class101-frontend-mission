import { ICoupon } from '@src/interfaces';
import { CouponType } from '@src/types';

// transpile시 각각 'rate', 'amount'로 변환되기 때문에 raw 값을 변경하지 않았다고 생각했습니다.

export const coupons: ICoupon[] = [
  {
    type: CouponType.Rate,
    title: '10% 할인 쿠폰',
    discountRate: 10,
  },
  {
    type: CouponType.Amount,
    title: '10,000원 할인 쿠폰',
    discountAmount: 10000,
  },
];
