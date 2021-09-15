import { useState } from "react"
import Login from "./pages/Login"
import HomePage from "./pages/HomePage";

function App () {
  const [page, setPage] = useState("login");
  if (page === 'login') {
    return (
      <Login
      onLogin={() => setPage("HomePage")}
      />
    )
  } else {
    return <HomePage />
  }
}

export default App;
