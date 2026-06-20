import icons from "@/src/constants/icons";
import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import "../../style/global.css";

export default function TabsLayout() {
  return (<Tabs screenOptions={{
    headerStyle: {
      backgroundColor: '#5B33D4',
      height: 180
    },
    sceneStyle: { backgroundColor: '#F5F5F5' },
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
          <View className="pl-8">
            <Text className="text-white text-2xl font-bold">
              Olá Estudante,
            </Text>
            <Text className="text-white/80 pt-2 text-lg">
              Escolha uma disciplina
            </Text>
          </View>
        ),
        headerRight: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={icons.logo3}
              style={{ width: 90, height: 90 }}
              resizeMode="contain" />
          </View>
        ),
        headerTitleAlign: 'left',
        headerShadowVisible: false
      }} />
    <Tabs.Screen
      name="math"
      options={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => (
          <Image source={icons.abamath}
            style={{ width: 42, height: 42, opacity: focused ? 1 : 0.3 }} />
        ),
        headerTitle: () => (
          <View className="pl-8">
            <Text className="text-white text-3xl font-bold">
              MATEMÁTICA
            </Text>
            <Text className="text-white/80 pt-2 text-lg">
              Escolha o conteudo que{"\n"} gostaria de estudar
            </Text>
          </View>
        ),
        headerRight: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={icons.logo3}
              style={{ width: 90, height: 90 }}
              resizeMode="contain" />
          </View>
        ),
        headerTitleAlign: 'left',
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
          <View className="pl-8">
            <Text className="text-white text-3xl font-bold">
              FÍSICA
            </Text>
            <Text className="text-white/80 pt-2 text-lg">
              Escolha o conteudo que{"\n"} gostaria de estudar
            </Text>
          </View>
        ),        headerRight: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={icons.logo3}
              style={{ width: 90, height: 90 }}
              resizeMode="contain" />
          </View>
        ),
        headerTitleAlign: 'left',
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
          <View className="pl-8">
            <Text className="text-white text-3xl font-bold">
              Meu Perfil
            </Text>
          </View>
        ),
        headerRight: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={icons.logo3}
              style={{ width: 90, height: 90 }}
              resizeMode="contain" />
          </View>
        ),
        headerTitleAlign: 'center',
        headerShadowVisible: false
      }} />
  </Tabs >
  );
}