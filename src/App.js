
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/globalStyles";
import UserPage from "./pages/users/userPage";

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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <UserPage />
      </div>
    </ThemeProvider>

  );
}

export default App;
