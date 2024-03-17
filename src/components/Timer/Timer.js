import { useState, useEffect } from "react";

const Timer = () => {
	const [timer, setTimer] = useState(1);

	useEffect(() => {
		const timeout = () => {
			setTimeout(() => {
				setTimer(timer + 1);
			}, 1000);
		};
		return timer < 10 ? timeout() : clearTimeout(timeout);
	}, [timer]);

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
