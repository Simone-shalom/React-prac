
const ProgressBar = ({ percent = 12 }) => {

	const barWidth = Math.min(Math.max(0, percent), 100)

	return (
		<div data-testid="wrapper" style={{width:'100%', backgroundColor: "lightgray", borderRadius:'5px', height:'20px'}}>
			<div data-testid="progress" style={{ width: `${barWidth}%`, backgroundColor: 'green', zIndex:'20', borderRadius:'5px', height:'20px'}}/>
		</div>
	)
}

export default ProgressBar
