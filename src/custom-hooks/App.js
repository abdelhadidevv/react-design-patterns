import { UserInfo } from "./custom-hooks/UserInfo";
import { UserInfoWithDataSource } from "./custom-hooks/UserInfoWithDataSource";
import { ProductInfo } from "./custom-hooks/ProductInfo";

function App() {
  return (
    <>
      <h1>useUser</h1>
      <UserInfo userId={3} />
      <h1>useResource</h1>
      <ProductInfo productId={2} />
      <h1>UserInfoWithDataSource</h1>
      <UserInfoWithDataSource userId="2" />
    </>
  );
}

export default App;
