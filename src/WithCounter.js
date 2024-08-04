import React, { useState } from 'react';


const withCounter = (WrappedComponent) => {
    return (props) => {
        const [count, setCount] = useState(0);

        const incrementCount = () => {
        setCount((prevCount) => prevCount + 1);
        };

        return (
            <WrappedComponent
                count={count}
                incrementCount={incrementCount}
                {...props}
            />
        );
  };
};

export default withCounter;
