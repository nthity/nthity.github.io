import React from "react";
import "./App.css";

const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						height: "100vh",
						backgroundColor: "#282c34",
						color: "#61dafb",
					}}
				>
					<div
						style={{
							width: "150px",
							height: "150px",
							borderRadius: "50%",
							background: "linear-gradient(135deg, #61dafb, #282c34)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							fontSize: "2rem",
							fontWeight: "bold",
							color: "#fff",
						}}
					>
						N
					</div>
					<h1>NTHITY</h1>
				</div>
			</header>
		</div>
	);
};

export default App;
