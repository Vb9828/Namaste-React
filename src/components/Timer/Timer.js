import { useState, useEffect } from "react";

const Timer = () => {
	const [timer, setTimer] = useState(1);
	//const [flag, setFlag] = useState(false);

	useEffect(() => {
		if (timer < 10) {
			const interval = setInterval(() => {
				setTimer((timer) => {
					var incrementedVal = timer + 1;
					if (incrementedVal > 10) {
						return clearInterval(interval);
					}
					return incrementedVal;
				});
			}, 1000);
		}
	}, []);

	return (
		<div>
			<label
				onClick={() => {
					{
						timer == 6 ? alert("Success") : "";
					}
				}}>
				{timer}
			</label>
		</div>
	);
};
export default Timer;
