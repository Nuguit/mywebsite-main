import { ChakraProvider } from "@chakra-ui/react";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <ChakraProvider>
      <div className="custom-scrollbar">
        <AppRoutes />
      </div>
    </ChakraProvider>
  );
}

export default App;

