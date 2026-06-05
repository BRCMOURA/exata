import icons from "@/src/constants/icons";
import "@/src/style/global.css";
import { Stack } from "expo-router";
import { Image, View, Text } from "react-native";


export default function StackLayout() {
    return (<Stack screenOptions={{
        headerStyle: { backgroundColor: "#5B33D4" },
        headerTintColor: "#ffffff",
        contentStyle: { backgroundColor: "#ffffff" },
    }} >;
        <Stack.Screen
            name="login"
            options={{
                headerTitle: () => (
                    <Image source={icons.logo2}
                        style={{ width: 100, height: 100, marginBottom: 20 }} />
                ),
                headerTitleAlign: 'center',
                headerShadowVisible: false
            }}
        />
        <Stack.Screen
            name="register"
            options={{
                headerTitle: () => (
                    <Image source={icons.logo2}
                        style={{ width: 100, height: 100, marginBottom: 20 }} />
                ),
                headerTitleAlign: 'center',
                headerShadowVisible: false
            }}
        />
        <Stack.Screen
            name="about"
            options={{
                headerTitle: () => (
                    <Image source={icons.logo2}
                        style={{ width: 100, height: 100, marginBottom: 20 }} />
                ),
                headerTitleAlign: 'center',
                headerShadowVisible: false
            }}
        />
        <Stack.Screen
            name="funcoes"
            options={{
                headerTitle: () => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                        <Image source={icons.abamath}
                            style={{ width: 40, height: 40, marginBottom: 20 }} />
                            <Text className="text-white text-2xl">FUNÇÕES</Text>
                    </View>
                ),
                headerTitleAlign: 'center',
                headerShadowVisible: false
            }}
        />
        <Stack.Screen
            name="equacoes"
            options={{
                headerTitle: () => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                        <Image source={icons.abaequacoes}
                            style={{ width: 40, height: 40, marginBottom: 20 }} />
                            <Text className="text-white text-2xl">EQUAÇÕES</Text>
                    </View>
                ),
                headerTitleAlign: 'center',
                headerShadowVisible: false
            }}
        />
        <Stack.Screen
            name="geometria"
            options={{
                headerTitle: () => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                        <Image source={icons.abageometria}
                            style={{ width: 40, height: 40, marginBottom: 20 }} />
                            <Text className="text-white text-2xl">GEOMETRIA</Text>
                    </View>
                ),
                headerTitleAlign: 'center',
                headerShadowVisible: false
            }}
        />
         <Stack.Screen
            name="trigonometria"
            options={{
                headerTitle: () => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                        <Image source={icons.abacos}
                            style={{ width: 40, height: 40, marginBottom: 20 }} />
                            <Text className="text-white text-2xl">TRIGONOMETRIA</Text>
                    </View>
                ),
                headerTitleAlign: 'center',
                headerShadowVisible: false
            }}
        />
            <Stack.Screen
            name="cinematica"
            options={{
                headerTitle: () => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                        <Image source={icons.abacinematica}
                            style={{ width: 40, height: 40, marginBottom: 20 }} />
                            <Text className="text-white text-2xl">CINEMÁTICA</Text>
                    </View>
                ),
                headerTitleAlign: 'center',
                headerShadowVisible: false
            }}
        />
        <Stack.Screen
            name="eletricidade"
            options={{
                headerTitle: () => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                        <Image source={icons.abaeletricidade}
                            style={{ width: 40, height: 40, marginBottom: 20 }} />
                            <Text className="text-white text-2xl">ELETRICIDADE</Text>
                    </View>
                ),
                headerTitleAlign: 'center',
                headerShadowVisible: false
            }}
        />
        <Stack.Screen
            name="termodinamica"
            options={{
                headerTitle: () => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                        <Image source={icons.abatermodinamica}
                            style={{ width: 40, height: 40, marginBottom: 20 }} />
                            <Text className="text-white text-2xl">TERMODINÂMICA</Text>
                    </View>
                ),
                headerTitleAlign: 'center',
                headerShadowVisible: false
            }}
        />
        <Stack.Screen
            name="optica"
            options={{
                headerTitle: () => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                        <Image source={icons.abaoptica}
                            style={{ width: 40, height: 40, marginBottom: 20 }} />
                            <Text className="text-white text-2xl">ÓPTICA</Text>
                    </View>
                ),
                headerTitleAlign: 'center',
                headerShadowVisible: false
            }}
        />
    </Stack >
    );
}
