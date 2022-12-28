import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Services from "./pages/Services/Services";
import AppWrap from "./wrapper/AppWrap";

const url_main = "https://dashboard.mahmoud-antiquites.com/api";

function App() {
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState("fr");
  // const [settings, setSettings] = useState([]);
  const [contact_data, setContact_data] = useState({});
  const [social, setSocial] = useState({});
  const [general_Settings, setGeneral_Settings] = useState({});
  const [aboutUs, setAboutUs] = useState({});
  const [siteLogo, setSiteLogo] = useState("");
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  useEffect(() => {
    fetch(`${url_main}/settings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        lang: lang,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        // setSettings(data.data);
        setContact_data(data.data[0].contact_data);
        setSocial(data.data[0].social);
        setSiteLogo(data.data[0].siteLogo);
        setGeneral_Settings(data.data[0].general_Settings);
        setAboutUs(data.data[0].aboutUs);
      });
  }, [lang]);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar siteLogo={siteLogo} setLang={setLang} />
        <Routes>
          <Route
            path="/"
            element={
              <Home url_main={url_main} general_Settings={general_Settings} />
            }
          />
          <Route
            path="/services"
            element={<Services loading={loading} aboutUs={aboutUs} />}
          />
        </Routes>
        <Footer contact_data={contact_data} social={social} />
      </BrowserRouter>
    </div>
  );
}

export default AppWrap(App);
