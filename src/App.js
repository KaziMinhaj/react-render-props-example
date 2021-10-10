import "./styles.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Counter from "./components/RenderProp/Counter";

export default function App() {
  return (
    <div className="App">
      <h1>React render props pattern</h1>

      {/* <Counter
        myRender={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      /> */}

      <Counter>
        {(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>

      <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
}
