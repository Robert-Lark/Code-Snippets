import React, { useState } from "react";
import Input from "./Input.js";
import styled from "styled-components";
import * as Yup from "yup";

function Form() {
	const FormWrapper = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100vh;
	`;
	const Form = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		height: 100vh;
	`;
	const FormP = styled.p`
		font-family: imperial;
		font-size: 2rem;
		margin-top: 20px;
		margin-bottom: -20px;
	`;
	const FormH1 = styled.h1`
		margin-top: 10%;
		margin-bottom: -0.1%;
	`;
	const defaultState = {
		language: "",
		uses: "",
		code: "",
		comments: "",
		terms: false,
	};
	const [formState, setFormState] = useState(defaultState);
	const [errors, setErrors] = useState({
		uses: "",
		code: "",
		terms: "",
	});
	const onSubmit = (event) => {
		event.preventDefault();
	};
	const formSchema = Yup.object().shape({
		language: Yup.array().required("Please select a language"),
		uses: Yup.string()
			.min(20, "must include more then six words")
			.required("must include at least one use"),
		code: Yup.string().required("field cannot be blank"),
		terms: Yup.boolean().oneOf(
			[false],
			"Please agree to the terms and conditions"
		),
	});
	const validateChange = (e) => {
		e.persist();
		Yup.reach(formSchema, e.target.name)
			.validate(e.target.value)
			.then((valid) =>
				setErrors({
					...errors,
					[e.target.name]: "",
				})
			)
			.catch((error) =>
				setErrors({
					...errors,
					[e.target.name]: error.errors[0],
				})
			);
	};
	const changeHandler = (e) => {
		const value =
			e.target.type === "checkbox" ? e.target.checked : e.target.value;
		setFormState({
			...formState,
			[e.target.name]: value,
		});
		validateChange(e);
	};
	return (
		<div>
			<h1>Submit your own code by using the form below.</h1>
			<form onSubmit={onSubmit}>
				<label>
					<FormP>Language</FormP>
					<br />
					<br />
					<select
						id="languageInput"
						name="language"
						value={formState.language}
						onChange={changeHandler}
						errors={errors}
						label="Language"
					>
						<option value="Select Language">Select Language</option>
						<option value="Javascript">Javascript</option>
						<option value="CSS">CSS</option>
						<option value="HTML">HTML</option>
						<option value="React">React</option>
					</select>
				</label>
				<label className="input">
					<FormP>Uses</FormP>
					<br />
					<br />
					<Input
						name="uses"
						type="text"
						placeholder="Uses"
						onChange={changeHandler}
						value={formState.uses}
						errors={errors}
					/>
				</label>
				<br />
				<br />
				<label className="input">
					<FormP>Code Snippets</FormP>
					<br />
					<br />
					<Input
						id="codeInput"
						name="code"
						type="text"
						placeholder="Code Snippet"
						onChange={changeHandler}
						value={formState.code}
						errors={errors}
					/>
				</label>
				<br />
				<br />
				<label className="input">
					<FormP>Other Comments</FormP>
					<br />
					<br />
					<Input
						id="commentsInput"
						name="comments"
						type="text"
						placeholder="Other Comments"
						value={formState.comments}
						onChange={changeHandler}
						errors={errors}
					/>
				</label>
				<br />
				<br />
				<label className="input" htmlFor="terms">
					TOC
					<input
						name="terms"
						type="checkbox"
						onChange={changeHandler}
						checked={formState.terms}
						errors={errors}
					/>
				</label>
				<br />
				<br />
				<button className="button">Submit</button>
			</form>
		</div>
	);
}

export default Form;
