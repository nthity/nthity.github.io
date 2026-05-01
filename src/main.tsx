import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Removed the .js extension
import "./index.css"; // Ensure CSS imports are allowed with a declaration file

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
