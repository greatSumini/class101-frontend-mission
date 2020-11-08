import { productItems } from '@data/index';
import { IProductItem } from '@src/interfaces';

export const useProductItemList = (): IProductItem[] => {
  return productItems;
};
