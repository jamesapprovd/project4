import React from "react";
// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Router />
      <>
        <p>Test: Why no show?</p>
      </>
    </ThemeProvider>
  );
};

export default App;
