import CategoryHeaderComponent from 'components/CategoryHeaderComponent';
import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {useCategoryDetails, useSubCategoryDetails} from 'services/queries';

//#region Props
interface Props {
  categoryId: string;
}
//#endregion

//#region UI
const CategoryDetailScreen: React.FC<Props> = ({categoryId}) => {
  const {data: categoryDetail} = useCategoryDetails(categoryId);
  const {data: subCategoryDetail} = useSubCategoryDetails('hand-wash');

  console.log(JSON.stringify(categoryDetail));
  console.log(JSON.stringify(subCategoryDetail));

  return (
    <View style={styles.container}>
      {categoryDetail && categoryDetail?.length > 0 && (
        <CategoryHeaderComponent
          Title={categoryDetail[0].name}
          ImageUri={categoryDetail[0].imageUri}
        />
      )}
    </View>
  );
};

export default CategoryDetailScreen;
//#endregion

//#region Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
});
//#endregion

//#region Default Props
CategoryDetailScreen.defaultProps = {
  categoryId: 'personal-care',
};
//#endregion
