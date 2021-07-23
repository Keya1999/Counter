
import React, { useState } from 'react';

const Counter = () => {
    const [values,setValues] = useState({
        counter_value : 1,
        max_value : 1000
    })

    const {counter_value,max_value} = values;

    const handleChange = (name) => event => {
        console.log("name value : ",name + " " + event.target.value)
        setValues({...values, [name]: parseInt(event.target.value)})
    }

    const incrementCounter = () => {
        console.log("increment")
        if (counter_value === null || Number.isNaN(counter_value))
            setValues({...values,counter_value : parseInt(1)})
        else
            setValues({...values,counter_value : parseInt(counter_value + 1)})
        

    }

    const decrementCounter = () => {
        console.log("decrement")
        setValues({counter_value : counter_value - 1})
    }

    const displayCounter = () => {
        return (<React.Fragment><div><button onClick={decrementCounter}>-</button>
                <input type="number" value={counter_value} name="counter_value" onChange={handleChange('counter_value')}/>
                <button onClick={incrementCounter} disabled={counter_value===max_value}>+</button></div>
                <div>Maximum value : <input type="number" value={max_value} onChange={handleChange('max_value')}/></div>
                </React.Fragment>
            )
    }
    return <div>{displayCounter()}</div>
}

export default Counter