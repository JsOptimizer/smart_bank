import onboarding from "@/assets/images/illustration/onboarding.png";
import CustomButton from "@/shared/components/custom-button";
import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <Fragment>
      <View className="items-center justify-center w-full px-4 h-full bg-neutral-50">
        <View>
          <Text className="text-brand-600 font-apparat-bold text-4xl text-center">
            Welcome to SmartBank
          </Text>
          <Text className="text-center font-apparat-semibold text-neutral-700 text-lg">
            Your money , your way , anywhere , anytime.
          </Text>
        </View>
        <Image
          source={onboarding}
          resizeMode="contain"
          className=" w-[300px] h-[290px]"
        />
        <Text className="text-neutral-800">
          Track your balance, send money securely, and stay in control with just
          a few taps.
        </Text>
        <CustomButton title="Let’s get started!" buttonStyle="mt-10" />
      </View>
      <StatusBar style="inverted" backgroundColor="#0404fc" />
    </Fragment>
  );
}
