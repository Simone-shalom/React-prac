import React, { useEffect, useState } from 'react'

function Counter() {
	const initialCount = localStorage.getItem('count') ? JSON.parse(localStorage.getItem('count')) : 0;
	const [count, setCount] = useState(initialCount);

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('count', JSON.stringify(count))
  };

  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
    localStorage.setItem('count', JSON.stringify(newCount));
  };

	return (
		<div>
			<h2 data-testid="count-id">Count: {count}</h2>
			<button data-testid="inc-id" onClick={handleIncrease}>
				+
			</button>
			<button data-testid="dec-id" onClick={handleDecrease}>
				-
			</button>
		</div>
	)
}

export default Counter
