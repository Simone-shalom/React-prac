import { useState } from "react"

const App = () => {

	const [count, setCount] = useState(0)

	const increaseCount =() => {
		setCount(prev => prev+1)
	}

	// Edit this component
	return (
		<div style={{margin:'5px'}}>
			<button data-testid="button" style={{padding:'5px'}}onMouseOver={increaseCount}>Hover Me</button>
			<h1 data-testid="count">{count}</h1>
		</div>
	)
}

export default App