import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {IcHelp, IcPaper, IcVirus} from '../../../assets';

const Icon = ({label, active}) => {
  switch (label) {
    case 'Kasus':
      return active ? <IcVirus /> : <IcVirus />;
    case 'Informasi':
      return active ? <IcPaper /> : <IcPaper />;
    case 'Bantuan':
      return active ? <IcHelp /> : <IcHelp />;
    default:
      <IcVirus />;
  }
  return <IcVirus />;
};

const BottomNavigation = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
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
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.menu}>
              <Icon label={label} active={isFocused} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    paddingVertical: normalize(15),
    paddingHorizontal: normalize(70),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  menu: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
