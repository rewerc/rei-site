// Global context management
import { BrowserRouter } from "react-router-dom";
import Routers from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
};

export default App;
