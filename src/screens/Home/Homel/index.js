import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {COLORS} from '../../../constants';
import {horizontalfaltlist, verticalFlatList} from '../../../assets/data';
import styles from './styles';

const Homel = ({navigation}) => {
  const horizontalRenderItem = ({item}) => {
    return (
      <View style={styles.horizontalViewContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', {details: item})}>
          <View
            style={{
              backgroundColor: item.bg_color,
              ...styles.horizontalWrapper,
            }}>
            <Image source={item.image} style={{height: 140, width: 120}} />
          </View>
        </TouchableOpacity>
        <View style={styles.descriptionHoriWrapper}>
          <Text style={styles.txtTitleHori}>{item.title}</Text>
          <View style={styles.iconStarHoriWrapper}>
            <Ionicon name="star" color={COLORS.yellow} size={18} />
            <Ionicon name="star" color={COLORS.yellow} size={18} />
            <Ionicon name="star" color={COLORS.yellow} size={18} />
            <Ionicon name="star" color={COLORS.yellow} size={18} />
            <Ionicon name="star-outline" color={COLORS.yellow} size={18} />
          </View>

          <Text style={styles.txtPriceHori}>{item.price}</Text>
        </View>
        <View style={styles.iconEvent}>
          {/* <Feather name="bookmark" color={COLORS.outline} size={24} /> */}
        </View>
      </View>
    );
  };

  const verticalRenderItem = ({item}) => {
    return (
      <View style={styles.verticalViewContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', {details: item})}>
          <View
            style={{
              backgroundColor: item.bg_color,
              ...styles.verticalWrapper,
            }}>
            <Image source={item.image} style={styles.imageVerticalView} />
          </View>
        </TouchableOpacity>
        <View style={styles.descriptionVertiWrapper}>
          <Text style={styles.txtTitleVerti}>{item.title}</Text>
          <View style={styles.iconStarVertiWrapper}>
            <Ionicon name="star" color={COLORS.yellow} size={18} />
            <Ionicon name="star" color={COLORS.yellow} size={18} />
            <Ionicon name="star" color={COLORS.yellow} size={18} />
            <Ionicon name="star-half" color={COLORS.yellow} size={18} />
            <Ionicon name="star-outline" color={COLORS.yellow} size={18} />
          </View>
          <Text style={styles.txtPriceVerti}>{item.price}</Text>
        </View>
        <TouchableOpacity style={styles.iconFavorite}>
          <Ionicon
            onPress={() => console.log('Onclick')}
            name="heart-outline"
            color={COLORS.outline}
            size={22}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true}
      style={styles.container}>
      <View style={styles.header}>
        <View style={styles.drawerMenu}>
          <Feather name="menu" size={20} />
        </View>
        <View style={styles.drawerMenu}>
          <Feather name="bell" size={20} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 15,
          marginVertical: 20,
        }}>
        <View style={styles.searchBar}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <Feather
              name="search"
              style={{color: COLORS.holderText}}
              size={22}
            />
            <TextInput placeholder="Search products..." />
          </View>
        </View>
        <View
          style={[
            styles.serachBar,
            {width: '18%', marginHorizontal: 25, alignItems: 'center'},
          ]}>
          <Feather name="filter" size={22} />
        </View>
      </View>
      <View style={{paddingHorizontal: 15}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Best Selling</Text>
      </View>
      <View style={{paddingHorizontal: 10, marginVertical: 20}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={horizontalfaltlist}
          renderItem={horizontalRenderItem}
        />
      </View>
      <View style={{paddingHorizontal: 15, marginBottom: 50}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Popular</Text>
        <FlatList
          style={{paddingBottom: 20}}
          data={verticalFlatList}
          showsVerticalS
          crollIndicator={false}
          renderItem={verticalRenderItem}
        />
      </View>
    </ScrollView>
  );
};
export default Homel;
