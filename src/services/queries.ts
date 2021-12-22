import {useQuery} from 'react-query';
import {getCategoryDetails, getSubCategoryDetails} from './api';

export const useCategoryDetails = (catId: String) =>
  useQuery(['categoryDetails', catId], () => getCategoryDetails(catId));

export const useSubCategoryDetails = (subCatId: String) =>
  useQuery(['subCategoryDetails', subCatId], () =>
    getSubCategoryDetails(subCatId),
  );
