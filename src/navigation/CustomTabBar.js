import {getSize} from '../utils/reponsive';
import React from 'react';
import {Image, Platform, Pressable, StyleSheet, View, Text} from 'react-native';
import {Badge} from 'react-native-elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants';
import {icons} from '../assets';

const CustomTabBar = ({state, descriptors, navigation}) => {
  const {bottom} = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingBottom: Platform.OS === 'ios' ? bottom : 10,
        paddingTop: 10,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const icon =
          index === 0
            ? icons.home
            : index === 1
            ? icons.product
            : index === 2
            ? icons.favorite
            : icons.profile;
        const iconselect =
          index === 0
            ? icons.home
            : index === 1
            ? icons.product
            : index === 2
            ? icons.favorite
            : icons.profile;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.btn}>
            {index === 3 && (
              <Badge
                status="error"
                containerStyle={styles.containerStyle}
                badgeStyle={styles.badgeStyle}
                textProps={{allowFontScaling: false}}
                value="1"
              />
            )}
            <Image
              source={isFocused ? iconselect : icon}
              style={styles.iconstyle(isFocused)}
            />
            <Text style={styles.textlabel(isFocused)}>{label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};
export default CustomTabBar;
const styles = StyleSheet.create({
  btn: {flex: 1, alignItems: 'center'},
  textlabel: isFocused => ({
    color: isFocused ? COLORS.greenLight : COLORS.black,
    marginTop: 5,
    fontSize: 10,
  }),
  iconstyle: isFocused => ({
    width: getSize.s(20),
    height: getSize.s(20),
    resizeMode: 'contain',
    tintColor: isFocused ? COLORS.greenLight : COLORS.black,
  }),
  containerStyle: {
    position: 'absolute',
    zIndex: 10,
    top: getSize.s(-7),
    right: getSize.s(21),
  },
  badgeStyle: {borderColor: '#fff', borderWidth: 1},
});
