import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "red" }}>{message}</h1>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={4}>
      <LeftHandComponent name="Abd Elhadi" />
      <RightHandComponent message="This just example to split Screen" />
    </SplitScreen>
  );
}

export default App;
