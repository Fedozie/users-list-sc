
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/globalStyles";
import { DataProvider } from "./context/dataContext";
import AppRoutes from "./routes/appRoutes";


function App() {
  const theme = {
    colors: {
      white: "#ffffff",
      mainPurple: "#4f005f",
      hoverPurple: "#741188",
      bg: "#1f1f1f"
    }
  }

  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="App">
          <AppRoutes />
        </div>
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
