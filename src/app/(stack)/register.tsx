import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Keyboard, Platform, ScrollView, View } from "react-native";
import BoxInput from "../../components/Boxinput";
import Button from "../../components/Button";

export default function Register() {

  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whats, setWhats] = useState("");
  const [passwdone, setPasswdone] = useState("");
  const [passwdtwo, setPasswdtwo] = useState("");

  function ProcessarRegister() {

    Keyboard.dismiss();

    if (!nome.trim() || !email.trim() || !whats.trim() || !passwdone.trim() || !passwdtwo.trim()) {
      const titulo = "Campos vazios";
      const mensagem = "Por favor, preencha todos os campos para continuar.";

      if (Platform.OS === 'web') {
        window.alert(`${titulo}: ${mensagem}`);
      } else {
        Alert.alert(titulo, mensagem, [{ text: "OK" }]);
      }

      return;
    }

    if (passwdone !== passwdtwo) {
      validaSenhas("Senhas diferentes", "As senhas digitadas não conferem.");
      return;
    }

    router.navigate('/');

  }

  function validaSenhas(titulo: string, mensagem: string) {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}: ${mensagem}`);
    } else {
      Alert.alert(titulo, mensagem, [{ text: "OK" }]);
    }
  }

  return (

    <View className="flex-1 bg-[#F5F5F5]">

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 32 }}
        className="px-8 pt-6"
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full">
          <BoxInput label="Nome Completo" placeholder="Digite seu nome" onChangeText={setNome} value={nome} />
          <BoxInput label="E-mail" placeholder="Digite seu melhor e-mail" onChangeText={setEmail} value={email} />
          <BoxInput label="WhatsApp" placeholder="Digite seu WhatsApp" onChangeText={setWhats} value={whats} />
          <BoxInput label="Senha" placeholder="Digite uma senha segura" isPassword onChangeText={setPasswdone} value={passwdone} />
          <BoxInput label="Confirme a Senha" placeholder="Confirme a senha segura" isPassword onChangeText={setPasswdtwo} value={passwdtwo} />
        </View>

        <View className="w-full mt-6">
          <Button label="CRIAR CONTA" funcao={ProcessarRegister} />
        </View>

      </ScrollView>
    </View>
  );
}