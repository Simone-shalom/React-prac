import React, { useState } from 'react'
import styled from 'styled-components'

const SignUpForm = () => {

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmedPassword, setConfirmedPassword] = useState('')

	const [firstNameError, setFirstNameError] = useState(false)
	const [lastNameError, setLastNameError] = useState(false)
	const [emailError, setEmailError] = useState(false)
	const [passwordError, setPasswordError] = useState(false)
	const [confirmedPasswordError, setConfirmedPasswordError] = useState(false)


	const checkedEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/

	const handleSubmit = (e) => {
		e.preventDefault()
		if(firstName ===''){
			console.log("First name cannot be empty")
			setFirstNameError(true)

		}else if(lastName === ''){
			console.log("last name cannot be empty")
				setLastNameError(true)
		
		} else if (!checkedEmail.test(email)){
			console.log("email t name cannot be empty")
				setEmailError(true)

		} else if (password.length < 8){
			console.log("Password must be greater than 7 characters")
				setPasswordError(true)

		}else if (confirmedPassword !== password){
			console.log("confimred email error")
				setConfirmedPasswordError(true)
		} else {
			console.log('’Form submitted successfully’')
		}
	}

console.log(firstName)
console.log(lastName)
console.log(password)
console.log(confirmedPassword)



	return (
		<Wrapper>
			<form onSubmit={handleSubmit}>
				<input
					data-testid="first-name-id"
					type="text"
					name="firstName"
					placeholder="First Name"
					value={firstName}
					onChange={(e) => {setFirstName(e.target.value)}}
				/>
				{firstNameError && (
						<p data-testid="first-name-error-id" className="error">First name cannot be empty</p>
				)}
				<input
					data-testid="last-name-id"
					type="text"
					name="lastName"
					placeholder="Last Name"
					value={lastName}
					onChange={(e) => {setLastName(e.target.value)}}
				/>
			{lastNameError && (
						<p data-testid="first-name-error-id" className="error">Last name cannot be empty</p>
				)}
				<input
					data-testid="email-id"
					type="email"
					name="email"
					placeholder="Email Address"
						value={email}
					onChange={(e) => {setEmail(e.target.value)}}
				/>
					{emailError && (
						<p data-testid="first-name-error-id" className="error">Invalid email address</p>
				)}
				<input
					data-testid="password-id"
					type="password"
					name="password"
					placeholder="Password"
						value={password}
					onChange={(e) => {setPassword(e.target.value)}}
				/>
				{passwordError && (
						<p data-testid="first-name-error-id" className="error">Password must be greater than 7 characters</p>
				)}
				<input
					data-testid="confirm-password-id"
					type="password"
					name="confirmPassword"
					placeholder="Confirm Password"
						value={confirmedPassword}
					onChange={(e) => {setConfirmedPassword(e.target.value)}}
				/>
					{confirmedPasswordError && (
						<p data-testid="first-name-error-id" className="error">Passwords do not match</p>
				)}
				<button type="submit">Sign Up</button>
			</form>
		</Wrapper>
	)
}

export default SignUpForm

const Wrapper = styled.div`
	margin-top: 24px;
	font-family: sans-serif;

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	input {
		padding: 8px 12px;
		font-size: 18px;
		margin-bottom: 6px;
		width: clamp(200px, 40%, 400px);
	}

	button {
		padding: 10px 20px;
		font-size: 18px;
		border: none;
		border-radius: 4px;
		background-color: #333;
		color: #fff;
		cursor: pointer;
		margin-top: 24px;

		&:hover {
			opacity: 0.8;
		}
	}

	.error {
		margin: 0 0 24px 0;
		color: red;
	}
`
