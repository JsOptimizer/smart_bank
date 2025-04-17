import onboarding from "@/assets/images/illustration/onboarding.png";
import CustomButton from "@/shared/components/custom-button";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <Fragment>
      <View className="px-4 h-dvh">
        <Image
          source={onboarding}
          resizeMode="contain"
          className=" w-full mt-14 h-[290px]"
        />
        <View className="h-[45vh]  ">
          <View className="gap-4">
            <View>
              <Text className="text-brand-600 font-apparat-bold text-4xl text-center">
                Welcome to SmartBank
              </Text>
            </View>
            <Text className="text-neutral-800 text-center text-lg">
              Your money , your way , anywhere , anytime. Track your balance,
              send money securely, and stay in control with just a few taps.
            </Text>
          </View>
          <CustomButton
            handlePress={() => router.push("/(auth)/login")}
            title="Let’s get started!"
            buttonStyle="mt-auto"
          />
        </View>
      </View>
      <StatusBar style="inverted" backgroundColor="#0404fc" />
    </Fragment>
  );
}
