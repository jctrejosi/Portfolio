import { ScrollSnap } from "@/components/ScrollSnap";

const example1 = (
  <div>
    <h1>Section 1</h1>
    <p>This is the first section.</p>
  </div>
);
const example2 = (
  <div>
    <h1>Section 2</h1>
    <p>This is the second section.</p>
  </div>
);
const example3 = (
  <div>
    <h1>Section 3</h1>
    <p>This is the third section.</p>
  </div>
);

export const Home = () => {
  return <ScrollSnap>{[example1, example2, example3]}</ScrollSnap>;
};
