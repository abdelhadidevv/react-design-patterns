import {
  DangerButton,
  BigSuccessButton,
} from "./partially-applied-components/partiallyApply";

function App() {
  return (
    <>
      <DangerButton text="Don't do it!" />
      <BigSuccessButton text="Yes!!!" />
    </>
  );
}

export default App;
