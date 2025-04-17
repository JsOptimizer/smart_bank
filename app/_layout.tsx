import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "./global.css";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ["apparat-bold"]: require("@/assets/fonts/Apparat_Bold.otf"),
    ["apparat"]: require("@/assets/fonts/Apparat_Regular.otf"),
    ["apparat-semibold"]: require("@/assets/fonts/Apparat_Semibold.otf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <ConvexProvider client={convex}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </ConvexProvider>
  );
}
