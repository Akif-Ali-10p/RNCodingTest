import {Product} from 'models';
import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';

const windowWidth = Dimensions.get('window').width;

//#region Props
interface ProductListItemComponentProps {
  product: Product;
}
//#endregion

//#region UI

const ProductListItemComponent: React.FC<ProductListItemComponentProps> = ({
  product,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <FastImage
          style={styles.image}
          source={{
            uri: 'https://icon2.cleanpng.com/20171220/qpw/shampoo-png-5a3a5e3778d1e4.5214417115137746474949.jpg',
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={styles.innerContent}>
        <Text style={styles.brandName}>{product.brand?.name}</Text>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
      </View>
    </View>
  );
};

export default ProductListItemComponent;
//#endregion

//#region Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageWrapper: {
    backgroundColor: '#D5DBDB',
    width: windowWidth / 2 - 24,
    height: 200,
    borderRadius: 12,
  },
  image: {
    flex: 1,
  },
  innerContent: {
    flex: 1,
    width: windowWidth / 2 - 24,
  },
  brandName: {
    color: '#707B7C',
    marginTop: 3,
    fontSize: 13,
  },
  productName: {
    color: '#1C2833',
    marginTop: 5,
    fontSize: 16,
    fontWeight: '600',
  },
  productPrice: {
    color: '#1C2833',
    marginTop: 5,
    fontSize: 16,
    fontWeight: '600',
  },
});
//#endregion
