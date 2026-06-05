import icons from "@/src/constants/icons";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import "../../style/global.css";

export default function TabsLayout() {
  return (<Tabs screenOptions={{
    headerStyle: { 
      backgroundColor: '#5B33D4', 
      height: 180
    },
    sceneStyle: { backgroundColor: '#ffffff' },
    // headerShown: false,
    tabBarItemStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#5B33D4'
    },
  }}
  >
    <Tabs.Screen
      name="home"
      options={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => (
          <Image source={icons.abahome}
            style={{ width: 32, height: 32, opacity: focused ? 1 : 0.3 }} />
        ),
        headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={icons.logo2}
              style={{ width: 52, height: 52 }} />
          </View>
        ),
        headerTitleAlign: 'center',
        headerShadowVisible: false
      }} />
    <Tabs.Screen
      name="math"
      options={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => (
          <Image source={icons.abamath}
            style={{ width: 32, height: 32, opacity: focused ? 1 : 0.3 }} />
        ),
        headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
            <Image source={icons.logo2}
              style={{ width: 52, height: 52 }} />
          </View>
        ),
        headerTitleAlign: 'center',
        headerShadowVisible: false
      }} />
    <Tabs.Screen
      name="fisica"
      options={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => (
          <Image source={icons.abacinematica}
            style={{ width: 32, height: 32, opacity: focused ? 1 : 0.3 }} />
        ),
        headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
            <Image source={icons.logo2}
              style={{ width: 52, height: 52 }} />
          </View>
        ),
        headerTitleAlign: 'center',
        headerShadowVisible: false
      }} />
    <Tabs.Screen
      name="perfil"
      options={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => (
          <Image source={icons.abaperfil}
            style={{ width: 32, height: 32, opacity: focused ? 1 : 0.3 }} />
        ),
        headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
            <Image source={icons.logo2}
              style={{ width: 52, height: 52 }} />
          </View>
        ),
        headerTitleAlign: 'center',
        headerShadowVisible: false
      }} />
  </Tabs >
  );
}
