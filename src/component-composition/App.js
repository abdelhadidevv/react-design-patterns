import {
  DangerButton,
  BigSuccessButton,
} from "./component-composition/composition";

function App() {
  return (
    <>
      <DangerButton text="Don't do it!" />
      <BigSuccessButton text="Yes!!!" />
    </>
  );
}

export default App;
