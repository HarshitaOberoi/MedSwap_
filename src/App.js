import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../src/components/Routing/route';
const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

function App() {
  return (
    <>
    <Router>
      <Suspense fallback={null}>
        <GlobalStyle />
        {/* Hi There! */}
        <ScrollToTop />
        <Header />
        <Routes/>
        <Home />
        <Footer />
        
      </Suspense>
      </Router>
    </>
  );
}

export default App;
