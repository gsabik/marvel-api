import { useState } from "react";

const Input = ({ setSearch }) => {
	const [inputValue, setInputValue] = useState("");
	
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearch(inputValue);
	}

	return (
		<div className="p-8 w-full">
			<form className="w-full" onSubmit={handleSubmit}>
				<input 
					className="bg-gray-300 placeholder:text-black py-2 text-center w-full"
					onChange={handleInputChange}
					placeholder="Search comic"
					type="text"
					value={inputValue}
				/>
			</form>
		</div>
	);
}

export default Input