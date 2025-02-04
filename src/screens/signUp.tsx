import { useNavigation } from "@react-navigation/native";
import {
  VStack,
  Image,
  Text,
  Center,
  Heading,
  ScrollView,
} from "@gluestack-ui/themed";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import Logo from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";
import { Input } from "@components/input";
import { Button } from "@components/Button";
export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.navigate("signIn");
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Image
          w="$full"
          h={624}
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          position="absolute"
        ></Image>

        <VStack flex={1} px="$10" pb="$10">
          <Center my="$24">
            <Logo />
            <Text color="$gray100" fontSize="$sm">
              Treine sua mente e o seu corpo
            </Text>
          </Center>

          <Center gap="$2" flex={1}>
            <Heading color="$gray100">Crie sua conta</Heading>
            <Input placeholder="Nome" />
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />
            <Button title="Criar e acessar"></Button>
          </Center>
          <Button
            title="Voltar para o login"
            variant="outline"
            mt="$12"
            onPress={handleGoBack}
          ></Button>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
