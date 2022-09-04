import axios from "axios";
import { ResourceLoader } from "./container-components/ResourceLoader";
import { CurrentUserLoader } from "./container-components/CurrentUserLoader";
import { DataSource } from "./container-components/DataSource";
import { UserLoader } from "./container-components/UserLoader";
import { UserInfo } from "./container-components/UserInfo";
import { ProductInfo } from "./container-components/ProductInfo";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const getLocalStorageData = (key) => () => {
  return localStorage.getItem(key);
};

const Text = ({ message }) => <p>{message}</p>;

function App() {
  return (
    <>
      <h1>CurrentUserLoader</h1>

      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <h1>UserLoader</h1>
      <UserLoader userId="2">
        <UserInfo />
      </UserLoader>

      <h1>ResourceLoader</h1>

      <ResourceLoader resourceUrl="/users/3" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="/products/2" resourceName="product">
        <ProductInfo />
      </ResourceLoader>

      <h1>DataSource</h1>

      <DataSource getDataFunc={getServerData("/users/3")} resourceName="user">
        <UserInfo />
      </DataSource>

      <h1>DataSource Form LocalStorage</h1>

      <DataSource
        getDataFunc={getLocalStorageData("message")}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </>
  );
}

export default App;
