import Form from "./Components/Form";
import MyComponent from "./Components/MyComponent";
import WithLoading from "./Components/WithLoading";

const WrappedComponentWithLoading = WithLoading(MyComponent);

function App() {
  return (
    <div className="App">
      <WrappedComponentWithLoading />
    </div>
  );
}

export default App;
