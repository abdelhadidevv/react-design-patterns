import { useState } from "react";
import { UncontrolledForm } from "./controlled-vs-uncontrolled/UncontrolledForm";
import { ControlledForm } from "./controlled-vs-uncontrolled/ControlledForm";
import { ControlledModal } from "./controlled-vs-uncontrolled/ControlledModal";
import { UncontrolledModal } from "./controlled-vs-uncontrolled/UncontrolledModal";
import { ControlledOnboardingFlow } from "./controlled-vs-uncontrolled/ControlledOnboardingFlow";
import { UncontrolledOnboardingFlow } from "./controlled-vs-uncontrolled/UncontrolledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 50 })}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <p>Congratulations! You qualify for our senior discount</p>
    <button onClick={() => goToNext({})}>Next</button>
  </>
);
const StepFour = ({ goToNext }) => (
  <>
    <h1>Step 4</h1>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <h1>UncontrolledForm</h1>
      <UncontrolledForm />
      <h1>ControlledForm</h1>
      <ControlledForm />

      <h1>UncontrolledModal</h1>
      <UncontrolledModal />
      <h1>ControlledModal</h1>
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <h1>Hello!</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Modal" : "Show Modal"}
      </button>
      <h1>UncontrolledOnboardingFlow</h1>
      <UncontrolledOnboardingFlow
        onFinish={(data) => {
          console.log(data);
          alert("Onboarding complete!");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>
      <h1>ControlledOnboardingFlow</h1>
      <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        {onboardingData.age >= 62 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>
    </>
  );
}

export default App;
