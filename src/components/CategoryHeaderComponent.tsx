import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

//#region Props
interface Props {
  Title: string;
  ImageUri: string;
}
//#endregion

//#region UI
const CategoryHeaderComponent: React.FC<Props> = ({Title, ImageUri}) => {
  return (
    <View style={styles.container}>
      <FastImage
        style={{width: 200, height: 200}}
        source={{
          uri: ImageUri,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text>{Title}</Text>
    </View>
  );
};

export default CategoryHeaderComponent;
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
