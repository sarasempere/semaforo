import React, { useState } from "react";

export const Traffic = () => {
	//initilize a count variable at 0, the setCount function
	// will be used to re-set the "count" value.
	const [color, setColor] = useState("red");

	return (
		<div>
			<h2>{color}</h2>

			<div className="container">
				<div
					onClick={() => setColor("red")}
					className="circulo redlight"
				/>
				<div
					onClick={() => setColor("yellow")}
					className="circulo yellowlight">
					{" "}
				</div>
				<div
					onClick={() => setColor("green")}
					className="circulo greenlight">
					{" "}
				</div>
			</div>
			<h3>Tengo hambre</h3>
		</div>
	);
};
