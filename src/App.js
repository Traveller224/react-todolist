import React from "react"
import "./App.css"

import Header from "./components/header/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/footer/Footer"

function App() {
	return (
		<div className="page-wrap">
			<Header />
			<MainContent />
			<Footer />
		</div>
	)
}

export default App
