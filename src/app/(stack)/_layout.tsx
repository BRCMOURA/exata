import icons from "@/src/constants/icons";
import "@/src/style/global.css";
import { Stack } from "expo-router";
import { Image, Platform, Text, View } from "react-native";


export default function StackLayout() {
    return (<Stack screenOptions={{
        headerStyle: { backgroundColor: "#5B33D4" },
        headerTintColor: "#ffffff",
        contentStyle: { backgroundColor: "#F5F5F5" },
    }} >;
        <Stack.Screen
            name="login"
            options={{
                headerStyle: {
                    backgroundColor: "#5B33D4",
                    ...Platform.select({
                        ios: { height: 120 },
                        android: { height: 120 },
                        web: { height: 120 }
                    })
                },
                headerTitle: () => (
                    <View className="items-center justify-center"
                        style={{ height: 130 }}>
                        <Image source={icons.logo3}
                            style={{ width: 90, height: 90 }}
                            resizeMode="contain" />
                    </View>
                ),
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerBackVisible: true
            }}
        />
        <Stack.Screen
            name="register"
            options={{
                headerStyle: {
                    backgroundColor: "#5B33D4",
                    ...Platform.select({
                        ios: { height: 120 },
                        android: { height: 120 },
                        web: { height: 120 }
                    })
                },
                headerTitle: () => (
                    <View className="items-center justify-center"
                        style={{ height: 130 }}>
                        <Image source={icons.logo3}
                            style={{ width: 90, height: 90 }}
                            resizeMode="contain" />
                    </View>
                ),
                headerTitleAlign: 'center',
                headerShadowVisible: false
            }}
        />
        <Stack.Screen
            name="about"
            options={{
                headerStyle: {
                    backgroundColor: "#5B33D4",
                    ...Platform.select({
                        ios: { height: 120 },
                        android: { height: 120 },
                        web: { height: 120 }
                    })
                },
                headerTitle: () => (
                    <View className="items-center justify-center"
                        style={{ height: 130 }}>
                        <Image source={icons.logo3}
                            style={{ width: 90, height: 90 }}
                            resizeMode="contain" />
                    </View>
                ),
                headerTitleAlign: 'center',
                headerShadowVisible: false
            }}
        />
        <Stack.Screen
            name="funcoes"
            options={{
                headerStyle: {
                    backgroundColor: "#5B33D4",
                    ...Platform.select({
                        ios: { height: 120 },
                        android: { height: 120 },
                        web: { height: 120 }
                    })
                },
                headerTitle: () => (
                    <View className={`flex-1 w-full items-center justify-center ${Platform.OS === 'android' ? 'py-0' : Platform.OS === 'ios' ? 'py-0' : 'py-0'}`}
                        style={{ height: 130 }}>
                        <View className={"flex-row items-center gap-3"}>
                            <Image
                                source={icons.abamath}
                                style={{ width: 70, height: 70 }}
                                resizeMode="contain"
                            />
                            <Text className="text-white text-2xl font-semibold pt-1">
                                FUNÇÕES
                            </Text>
                        </View>
                    </View>
                ),
                headerRight: () => (
                    <Image
                        source={icons.logo3}
                        style={{ width: 90, height: 90 }}
                        resizeMode="contain"
                    />
                ),
                headerTitleAlign: 'left',
                headerShadowVisible: false,
                headerBackVisible: true
            }}
        />
        <Stack.Screen
            name="equacoes"
            options={{
                headerStyle: {
                    backgroundColor: "#5B33D4",
                    ...Platform.select({
                        ios: { height: 120 },
                        android: { height: 120 },
                        web: { height: 120 }
                    })
                },
                headerTitle: () => (
                    <View className={`flex-1 w-full items-center justify-center ${Platform.OS === 'android' ? 'py-0' : Platform.OS === 'ios' ? 'py-0' : 'py-0'}`}
                        style={{ height: 130 }}>
                        <View className={"flex-row items-center gap-3"}>
                            <Image
                                source={icons.abaequacoes}
                                style={{ width: 60, height: 60 }}
                                resizeMode="contain"
                            />
                            <Text className="text-white text-2xl font-semibold pt-1">
                                EQUAÇÕES
                            </Text>
                        </View>
                    </View>
                ),
                headerRight: () => (
                    <Image
                        source={icons.logo3}
                        style={{ width: 90, height: 90 }}
                        resizeMode="contain"
                    />
                ),
                headerTitleAlign: 'left',
                headerShadowVisible: false,
                headerBackVisible: true

            }}
        />
        <Stack.Screen
            name="geometria"
            options={{
                headerStyle: {
                    backgroundColor: "#5B33D4",
                    ...Platform.select({
                        ios: { height: 120 },
                        android: { height: 120 },
                        web: { height: 120 }
                    })
                },
                headerTitle: () => (
                    <View className={`flex-1 w-full items-center justify-center ${Platform.OS === 'android' ? 'py-0' : Platform.OS === 'ios' ? 'py-0' : 'py-0'}`}
                        style={{ height: 130 }}>
                        <View className={"flex-row items-center gap-3"}>
                            <Image
                                source={icons.abageometria}
                                style={{ width: 60, height: 60 }}
                                resizeMode="contain"
                            />
                            <Text className="text-white text-2xl font-semibold pt-1">
                                GEOMETRIA
                            </Text>
                        </View>
                    </View>
                ),
                headerRight: () => (
                    <Image
                        source={icons.logo3}
                        style={{ width: 90, height: 90 }}
                        resizeMode="contain"
                    />
                ),
                headerTitleAlign: 'left',
                headerShadowVisible: false,
                headerBackVisible: true

            }}
        />
        <Stack.Screen
            name="trigonometria"
            options={{
                headerStyle: {
                    backgroundColor: "#5B33D4",
                    ...Platform.select({
                        ios: { height: 120 },
                        android: { height: 120 },
                        web: { height: 120 }
                    })
                },
                headerTitle: () => (
                    <View className={`flex-1 w-full items-center justify-center ${Platform.OS === 'android' ? 'py-0' : Platform.OS === 'ios' ? 'py-0' : 'py-0'}`}
                        style={{ height: 130 }}>
                        <View className={"flex-row items-center gap-3"}>
                            <Image
                                source={icons.abacos}
                                style={{ width: 70, height: 70 }}
                                resizeMode="contain"
                            />
                            <Text className="text-white text-xl font-semibold pt-1">
                                TRIGONOMETRIA
                            </Text>
                        </View>
                    </View>
                ),
                headerRight: () => (
                    <Image
                        source={icons.logo3}
                        style={{ width: 90, height: 90 }}
                        resizeMode="contain"
                    />
                ),
                headerTitleAlign: 'left',
                headerShadowVisible: false,
                headerBackVisible: true

            }}
        />
        <Stack.Screen
            name="cinematica"
            options={{
                headerStyle: {
                    backgroundColor: "#5B33D4",
                    ...Platform.select({
                        ios: { height: 120 },
                        android: { height: 120 },
                        web: { height: 120 }
                    })
                },
                headerTitle: () => (
                    <View className={`flex-1 w-full items-center justify-center ${Platform.OS === 'android' ? 'py-0' : Platform.OS === 'ios' ? 'py-0' : 'py-0'}`}
                        style={{ height: 130 }}>
                        <View className={"flex-row items-center gap-5"}>
                            <Image
                                source={icons.abacinematica}
                                style={{ width: 60, height: 60 }}
                                resizeMode="contain"
                            />
                            <Text className="text-white text-2xl font-semibold pt-1">
                                CINEMÁTICA
                            </Text>
                        </View>
                    </View>
                ),
                headerRight: () => (
                    <Image
                        source={icons.logo3}
                        style={{ width: 90, height: 90 }}
                        resizeMode="contain"
                    />
                ),
                headerTitleAlign: 'left',
                headerShadowVisible: false,
                headerBackVisible: true

            }}
        />
        <Stack.Screen
            name="eletricidade"
            options={{
                headerStyle: {
                    backgroundColor: "#5B33D4",
                    ...Platform.select({
                        ios: { height: 120 },
                        android: { height: 120 },
                        web: { height: 120 }
                    })
                },
                headerTitle: () => (
                    <View className={`flex-1 w-full items-center justify-center ${Platform.OS === 'android' ? 'py-0' : Platform.OS === 'ios' ? 'py-0' : 'py-0'}`}
                        style={{ height: 130 }}>
                        <View className={"flex-row items-center gap-5"}>
                            <Image
                                source={icons.abaeletricidade}
                                style={{ width: 50, height: 50 }}
                                resizeMode="contain"
                            />
                            <Text className="text-white text-2xl font-semibold pt-1">
                                ELETRICIDADE
                            </Text>
                        </View>
                    </View>
                ),
                headerRight: () => (
                    <Image
                        source={icons.logo3}
                        style={{ width: 90, height: 90 }}
                        resizeMode="contain"
                    />
                ),
                headerTitleAlign: 'left',
                headerShadowVisible: false,
                headerBackVisible: true

            }}
        />
        <Stack.Screen
            name="termodinamica"
            options={{
                headerStyle: {
                    backgroundColor: "#5B33D4",
                    ...Platform.select({
                        ios: { height: 120 },
                        android: { height: 120 },
                        web: { height: 120 }
                    })
                },
                headerTitle: () => (
                    <View className={`flex-1 w-full items-center justify-center ${Platform.OS === 'android' ? 'py-0' : Platform.OS === 'ios' ? 'py-0' : 'py-0'}`}
                        style={{ height: 130 }}>
                        <View className={"flex-row items-center"}>
                            <Image
                                source={icons.abatermodinamica}
                                style={{ width: 60, height: 60 }}
                                resizeMode="contain"
                            />
                            <Text className="text-white text-2xl font-semibold pt-1">
                                TERMODINÂMICA
                            </Text>
                        </View>
                    </View>
                ),
                headerRight: () => (
                    <Image
                        source={icons.logo3}
                        style={{ width: 90, height: 90 }}
                        resizeMode="contain"
                    />
                ),
                headerTitleAlign: 'left',
                headerShadowVisible: false,
                headerBackVisible: true

            }}
        />
        <Stack.Screen
            name="optica"
            options={{
                headerStyle: {
                    backgroundColor: "#5B33D4",
                    ...Platform.select({
                        ios: { height: 120 },
                        android: { height: 120 },
                        web: { height: 120 }
                    })
                },
                headerTitle: () => (
                    <View className={`flex-1 w-full items-center justify-center ${Platform.OS === 'android' ? 'py-0' : Platform.OS === 'ios' ? 'py-0' : 'py-0'}`}
                        style={{ height: 130 }}>
                        <View className={"flex-row items-center gap-5"}>
                            <Image
                                source={icons.abaoptica}
                                style={{ width: 60, height: 60 }}
                                resizeMode="contain"
                            />
                            <Text className="text-white text-2xl font-semibold pt-1">
                                ÓPTICA
                            </Text>
                        </View>
                    </View>
                ),
                headerRight: () => (
                    <Image
                        source={icons.logo3}
                        style={{ width: 90, height: 90 }}
                        resizeMode="contain"
                    />
                ),
                headerTitleAlign: 'left',
                headerShadowVisible: false,
                headerBackVisible: true

            }}
        />
    </Stack >
    );
}
