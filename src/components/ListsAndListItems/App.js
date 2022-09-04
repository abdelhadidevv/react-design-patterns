import { RegularList } from "./RegularList";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallProductListItem } from "./product/SmallProductListItem";
import { LargeProductListItem } from "./product/LargeProductListItem";

const people = [
  {
    name: "Abd Elhadi",
    age: 22,
    hairColor: "black",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    name: "Ahmad",
    age: 25,
    hairColor: "black",
    hobbies: ["reding", "bicycling", "video games"],
  },
  {
    name: "Mohammad",
    age: 33,
    hairColor: "brown",
    hobbies: ["sleeping", "sleeping", "video games"],
  },
];

const products = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
  },
  {
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum",
    rating: 4.2,
  },
];

function App() {
  return (
    <>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />
    </>
  );
}

export default App;
