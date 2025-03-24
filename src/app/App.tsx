import "./App.css";
import { FooterLayout } from "./layouts/footer/footer.layout";
import { HeaderLayout } from "./layouts/header/header.layout";
import { LandingPage } from "./pages/landing.page";

function App() {
  return (
    <>
      <HeaderLayout />
      <LandingPage />
      <FooterLayout />
    </>
  );
}

export default App;
