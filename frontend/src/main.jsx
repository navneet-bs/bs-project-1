import { createContext, useState, useSyncExternalStore } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";

export const BackendURLContext = createContext({
  backend_url: "http://localhost:1337",
});

export const AuthContext = createContext({
  isLoggedIn: false,
  setLoggedIn: () => {},
});


function AppProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")));
  const [username,setUsername]=useState((localStorage.getItem("userInfo")));

  return (
    <BackendURLContext.Provider value={{ backend_url: "http://localhost:1337" }}>
      <AuthContext.Provider value={{ isLoggedIn, setLoggedIn,username,setUsername}}>
        {children}
      </AuthContext.Provider>
    </BackendURLContext.Provider>
  );
}


createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
