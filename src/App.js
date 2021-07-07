import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import MapView from 'react-native-maps';
import normalize from 'react-native-normalize';
import {ProgressBar} from 'rn-multi-progress-bar';
import {
  Background,
  IcArrowDown,
  IcDeath,
  IcMarker,
  IcPositive,
  IcRecovered,
} from './assets';
import {BottomNavigation, Gap} from './components';

const Tab = createBottomTabNavigator();

const MainApp = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    {label: 'DKI Jakarta', value: 'DKI Jakarta'},
    {label: 'Jawa Barat', value: 'Jawa Barat'},
  ]);
  const [positive] = React.useState(128);
  const [recovered] = React.useState(120);
  const [death] = React.useState(8);
  const data = [
    {progress: positive, color: '#FFA800'},
    {progress: recovered, color: '#58E393'},
    {progress: death, color: '#FF7F7F'},
  ];
  return (
    <View style={styles.page}>
      <StatusBar />
      <Image source={Background} style={styles.background} />
      <LinearGradient colors={['#FFFFFF', '#F3F3F3']} style={styles.card}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.selectContainer}>
            <IcMarker />
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={styles.picker}
              placeholder="Pilih Provinsi"
              textStyle={styles.textPicker}
              placeholderStyle={styles.placeholderStyle}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              listMode="SCROLLVIEW"
            />
          </View>
          <Gap height={16} />
          <Text style={styles.label}>Information total corona virus</Text>
          <View style={styles.row}>
            <Text style={styles.date}>Last updated at 11 nov 2020</Text>
            <View style={styles.row}>
              <Text style={styles.detail}>Detail</Text>
              <Gap width={7} />
              <IcArrowDown />
            </View>
          </View>
          <Gap height={14} />
          <View style={styles.section}>
            <View style={styles.center}>
              <IcPositive />
              <Text style={styles.positiveAmount}>128</Text>
              <Text style={styles.positive}>Positive</Text>
            </View>
            <View style={styles.center}>
              <IcRecovered />
              <Text style={styles.recoveredAmount}>120</Text>
              <Text style={styles.recovered}>Recovered</Text>
            </View>
            <View style={styles.center}>
              <IcDeath />
              <Text style={styles.deathAmount}>8</Text>
              <Text style={styles.death}>Death</Text>
            </View>
          </View>
          <Gap height={16} />
          <Text style={styles.label}>Statistic</Text>
          <Gap height={14} />
          <View style={styles.statistic}>
            <ProgressBar
              shouldAnimate={true}
              animateDuration={1000}
              data={data}
            />
            <View style={styles.row}>
              <View style={styles.row}>
                <View style={styles.dotPositive} />
                <Gap width={8} />
                <Text style={styles.positive}>Positive</Text>
              </View>
              <View style={styles.row}>
                <View style={styles.dotRecovered} />
                <Gap width={8} />
                <Text style={styles.recovered}>Recovered</Text>
              </View>
              <View style={styles.row}>
                <View style={styles.dotDeath} />
                <Gap width={8} />
                <Text style={styles.death}>Death</Text>
              </View>
            </View>
          </View>
          <Gap height={14} />
          <Text style={styles.label}>Map</Text>
          <Gap height={14} />
          <MapView
            style={styles.map}
            region={{
              latitude: -6.7428613,
              longitude: 108.5189335,
              latitudeDelta: 0.515,
              longitudeDelta: 0.0121,
            }}
          />
          <Gap height={11} />
          <Text style={styles.label}>Hospital</Text>
          <Gap height={11} />
          <MapView
            style={styles.map}
            region={{
              latitude: -6.7428613,
              longitude: 108.5189335,
              latitudeDelta: 0.515,
              longitudeDelta: 0.0121,
            }}
          />
          <Gap height={55} />
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
        <Tab.Screen name="Kasus" component={MainApp} />
        <Tab.Screen name="Informasi" component={MainApp} />
        <Tab.Screen name="Bantuan" component={MainApp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  background: {
    width: '100%',
    height: normalize(325),
    zIndex: 0,
  },
  card: {
    flex: 1,
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(23),
    marginTop: normalize(-78),
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(30),
    zIndex: 1,
  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(15),
    borderWidth: 1,
    borderColor: '#2ECC71',
    borderRadius: normalize(100),
  },
  picker: {
    flex: 1,
    width: normalize(280),
    paddingHorizontal: normalize(15),
    borderWidth: 0,
    borderRadius: normalize(8),
    zIndex: 0,
  },
  textPicker: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(16),
    color: '#575757',
  },
  placeholderStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(16),
    color: '#575757',
  },
  dropDownContainerStyle: {
    width: normalize(280),
    backgroundColor: '#FFFFFF',
    borderColor: '#2ECC71',
    zIndex: 1,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: normalize(16),
    color: '#575757',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontFamily: 'Poppins-Light',
    fontSize: normalize(11),
    color: '#BEBEBE',
  },
  detail: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: '#2ECC71',
  },
  section: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(37),
    paddingTop: normalize(12),
    paddingBottom: normalize(20),
    borderRadius: normalize(8),
    shadowColor: '#F1F1F1',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  positiveAmount: {
    fontFamily: 'Poppins-Medium',
    fontSize: normalize(27),
    color: '#FFA800',
  },
  recoveredAmount: {
    fontFamily: 'Poppins-Medium',
    fontSize: normalize(27),
    color: '#58F69B',
  },
  deathAmount: {
    fontFamily: 'Poppins-Medium',
    fontSize: normalize(27),
    color: '#FF7F7F',
  },
  positive: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(12),
    color: '#FFA800',
  },
  recovered: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(12),
    color: '#58F69B',
  },
  death: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(12),
    color: '#FF7F7F',
  },
  statistic: {
    backgroundColor: '#FFFFFF',
    paddingLeft: normalize(21),
    paddingTop: normalize(22),
    paddingRight: normalize(9),
    paddingBottom: normalize(5),
    borderRadius: normalize(8),
    shadowColor: '#F1F1F1',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dotPositive: {
    width: normalize(6),
    height: normalize(6),
    backgroundColor: '#FFA800',
    borderRadius: normalize(6),
  },
  dotRecovered: {
    width: normalize(6),
    height: normalize(6),
    backgroundColor: '#58E393',
    borderRadius: normalize(6),
  },
  dotDeath: {
    width: normalize(6),
    height: normalize(6),
    backgroundColor: '#FF7F7F',
    borderRadius: normalize(6),
  },
  map: {
    width: '100%',
    height: normalize(160),
    borderRadius: normalize(8),
  },
});
