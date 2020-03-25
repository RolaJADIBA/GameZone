import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles, images } from '../style/global';
import Card from '../shared/card';

export default function ReviewDetails({ navigation }) {
   
  const rating = navigation.getParam('rating');

    const pressHandler = () => {
        // navigation.navigate('ReviewDetails');
        navigation.goBack();
    }

    // const rating = navigation.getParam('rating');


  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
        <Text style={globalStyles.titleText}>{navigation.getParam('body')}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>

        {/* <Button title='go to Home Screen' onPress={pressHandler} /> */}
      </Card>  
    </View>
  );
}

const styles = StyleSheet.create({

  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }

});
