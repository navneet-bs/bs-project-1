import { createContext, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";

export const BackendURLContext = createContext({
  backend_url: "http://localhost:1337",
});

export const AuthContext = createContext();

function AppProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const [username,setUsername]=useState(localStorage.getItem("username"));

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
