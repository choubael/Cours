import React from "react";
import {
  NativeBaseProvider,
} from "native-base";
import S_2018_2019 from "./components/INF111/S_2018_2019";


export default function App() {
  return (
    <NativeBaseProvider>

      {/* page dont tu veux voir le contenu ici */}
      <S_2018_2019/>

      
    </NativeBaseProvider>
  );
}

