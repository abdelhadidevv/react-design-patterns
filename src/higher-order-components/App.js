import { printProps } from "./higher-order-components/printProps";
import { UserInfo } from "./higher-order-components/UserInfo";
import { withUser } from "./higher-order-components/withUser";
import { UserInfoForm } from "./higher-order-components/UserInfoForm";
import { UserInfoForm2 } from "./higher-order-components/UserInfoForm2";

const UserInfoWithLoader = withUser(UserInfo, "2");

const UserInfoWrapped = printProps(UserInfo);

function App() {
  return (
    <>
      <h1>UserInfoWrapped</h1>
      <UserInfoWrapped a={1} b="Hello" c={{ name: "Shaun" }} />

      <h1>UserInfoWithLoader</h1>
      <UserInfoWithLoader />

      <h1>UserInfoForm</h1>
      <UserInfoForm />

      <h1>UserInfoForm2</h1>
      <UserInfoForm2 />
    </>
  );
}

export default App;
