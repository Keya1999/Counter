import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [values, setValues] = useState({
    counter_value: 1,
    max_value: 1000,
  });

  const { counter_value, max_value } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: parseInt(event.target.value) });
  };

  const incrementCounter = () => {
    if (counter_value === null || Number.isNaN(counter_value))
      setValues({ ...values, counter_value: parseInt(1) });
    else setValues({ ...values, counter_value: parseInt(counter_value + 1) });
  };

  const decrementCounter = () => {
    setValues({ counter_value: counter_value - 1 });
  };

  const displayCounter = () => {
    return (
      <React.Fragment>
        <div>
          <Button onClick={decrementCounter}>-</Button>
          <input
            type="number"
            value={counter_value}
            name="counter_value"
            onChange={handleChange("counter_value")}
          />
          <Button
            onClick={incrementCounter}
            disabled={counter_value === max_value}
          >
            +
          </Button>
        </div>
      </React.Fragment>
    );
  };
  return <div>{displayCounter()}</div>;
};

export default Counter;
