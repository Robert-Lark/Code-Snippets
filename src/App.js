import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Form from "./Components/Form.js";
import Javascript from "./Components/Javascript";
import CSS from "./Components/CSS";
import About from "./Components/About";
import Home from "./Components/Home";
import styled from "styled-components";

function App() {
	const NavBar = styled.div`
		display: flex;
		justify-content: space-around;
		font-size: 2rem;
		font-family: Impact, Charcoal, sans-serif;
		border: 2px solid black;
	`;
	const P = styled.p`
		color: red;
	`;
	return (
		<div className="App">
			<header>
				<NavBar>
					<Link to="/" style={{ textDecoration: "none" }}>
						<P>Home</P>
					</Link>
					<Link to="/About" style={{ textDecoration: "none" }}>
						<P>About</P>
					</Link>
					<Link to="/Javascript" style={{ textDecoration: "none" }}>
						<P>Javascript</P>
					</Link>
					<Link to="/CSS" style={{ textDecoration: "none" }}>
						<P>CSS</P>
					</Link>
					<Link to="/Add" style={{ textDecoration: "none" }}>
						<P>Add Your Own Code Snippet</P>
					</Link>
				</NavBar>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/About" component={About} />
					<Route path="/Javascript" component={Javascript} />
					<Route path="/CSS" component={CSS} />
					<Route path="/Add" component={Form} />
				</Switch>
			</header>
			
		</div>
	);
}

export default App;
