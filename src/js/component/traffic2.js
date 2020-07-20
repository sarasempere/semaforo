import React, { useState } from "react";

export const Traffic2 = () => {
	const [color, setColor] = useState("red");

	switch (color) {
		case "red":
			return (
				<div className="container">
					<h2>{color}</h2>

					<div
						onClick={() => setColor("red")}
						className="circulo redlight selected"
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
			);

		case "yellow":
			return (
				<div className="container">
					<h2>{color}</h2>

					<div
						onClick={() => setColor("red")}
						className="circulo redlight"
					/>
					<div
						onClick={() => setColor("yellow")}
						className="circulo yellowlight selected">
						{" "}
					</div>
					<div
						onClick={() => setColor("green")}
						className="circulo greenlight">
						{" "}
					</div>
				</div>
			);

		case "green":
			return (
				<div className="container">
					<h2>{color}</h2>

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
						className="circulo greenlight selected">
						{" "}
					</div>
				</div>
			);
	}
};
