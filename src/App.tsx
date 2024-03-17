import { useContext } from "react";
import { DashboardPage } from "./pages/Dashboard";
import { LoginPage } from "./pages/LoginPage";
import { AuthContext } from "./context/authenticationContext";

function App() {
  const { isAuthenticaded } = useContext(AuthContext)!;
  return <>{isAuthenticaded ? <DashboardPage /> : <LoginPage />}</>;
}

export default App;
