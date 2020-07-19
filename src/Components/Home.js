import React from "react";
import styled from "styled-components";

function Home() {
    const H1 = styled.h1`
			padding-top: 50px;
			font-size: 5rem;
		`;
	return (
		<div className="App">
			<header className="App-header">
				<H1>CODE SNIPPET OF THE DAY!</H1>
			</header>
		</div>
	);
}

export default Home;
