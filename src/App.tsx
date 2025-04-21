import "./App.css";
import Container from "./Components/Container";
import AppContext from "./Context";
function App() {
  return (
    <>
      <AppContext>
        <Container />
      </AppContext>
    </>
  );
}

export default App;
