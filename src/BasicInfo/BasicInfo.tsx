import React, { useState, ChangeEvent } from "react";

interface CharacterFormProps {
	onSubmit: (data: CharacterFormData) => void;
}

interface CharacterFormData {
	name: string;
	alignment: string;
	playerName: string;
	charLevel: number;
	deity: string;
	homeland: string;
	campaign: string;
	race: string;
	gender: string;
	age: number;
	height: number;
	hair: string;
	eyes: string;
}

const alignmentOptions = [
	{ label: "Lawful Good", value: "lawful-good" },
	{ label: "Neutral Good", value: "neutral-good" },
	{ label: "Chaotic Good", value: "chaotic-good" },
	{ label: "Lawful Neutral", value: "lawful-neutral" },
	{ label: "Neutral", value: "neutral" },
	{ label: "Chaotic Neutral", value: "chaotic-neutral" },
	{ label: "Lawful Evil", value: "lawful-evil" },
	{ label: "Neutral Evil", value: "neutral-evil" },
	{ label: "Chaotic Evil", value: "chaotic-evil" },
];

const raceOptions = [
	{ label: "Human", value: "human", size: "Medium" },
	{ label: "Elf", value: "elf", size: "Medium" },
	{ label: "Dwarf", value: "dwarf", size: "Medium" },
	{ label: "Halfling", value: "halfling", size: "Small" },
];

const alignmentOptionsJSON = JSON.stringify(alignmentOptions);
const raceOptionsJSON = JSON.stringify(raceOptions);

function CharacterForm({ onSubmit }: CharacterFormProps) {
	const [formData, setFormData] = useState<CharacterFormData>({
		name: "",
		alignment: "",
		playerName: "",
		charLevel: 1,
		deity: "",
		homeland: "",
		campaign: "",
		race: "human",
		gender: "",
		age: 0,
		height: 0,
		hair: "",
		eyes: "",
	});

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit(formData);
	};

	const {
		name,
		alignment,
		playerName,
		charLevel,
		deity,
		homeland,
		campaign,
		race,
		gender,
		age,
		height,
		hair,
		eyes,
	} = formData;

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Character Name:</label>
			<input
				type="text"
				id="name"
				name="name"
				value={name}
				onChange={handleInputChange}
			/>

			<label htmlFor="alignment">Alignment:</label>
			<select
				id="alignment"
				name="alignment"
				value={alignment}
				onChange={handleInputChange}
			>
				{JSON.parse(alignmentOptionsJSON).map((option: any) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>

			<label htmlFor="playerName">Player Name:</label>
			<input
				type="text"
				id="playerName"
				name="playerName"
				value={playerName}
				onChange={handleInputChange}
			/>

			<label htmlFor="charLevel">Level:</label>
			<input
				type="number"
				id="charLevel"
				name="charLevel"
				value={charLevel}
				onChange={handleInputChange}
			/>

			<label htmlFor="deity">Deity:</label>
			<input
				type="text"
				id="deity"
				name="deity"
				value={deity}
				onChange={handleInputChange}
			/>

			<label htmlFor="homeland">Homeland:</label>
			<input
				type="text"
				id="homeland"
				name="homeland"
				value={homeland}
				onChange={handleInputChange}
			/>

			<label htmlFor="campaign">Campaign:</label>
			<input
				type="text"
				id="campaign"
				name="campaign"
				value={campaign}
				onChange={handleInputChange}
			/>

			<label htmlFor="race">Race:</label>
			<select id="race" name="race" value={race} onChange={handleInputChange}>
				{JSON.parse(raceOptionsJSON).map((option: any) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>

			<label htmlFor="size">Size:</label>
			<input
				type="text"
				id="size"
				name="size"
				value={race === "halfling" ? "Small" : "Medium"}
				readOnly
			/>

			<label htmlFor="gender">Gender:</label>
			<input
				type="text"
				id="gender"
				name="gender"
				value={gender}
				onChange={handleInputChange}
			/>

			<label htmlFor="age">Age:</label>
			<input
				type="number"
				id="age"
				name="age"
				value={age}
				onChange={handleInputChange}
			/>

			<label htmlFor="height">Height:</label>
			<input
				type="number"
				id="height"
				name="height"
				value={height}
				onChange={handleInputChange}
			/>

			<label htmlFor="hair">Hair:</label>
			<input
				type="text"
				id="hair"
				name="hair"
				value={hair}
				onChange={handleInputChange}
			/>

			<label htmlFor="eyes">Eyes:</label>
			<input
				type="text"
				id="eyes"
				name="eyes"
				value={eyes}
				onChange={handleInputChange}
			/>

			<button type="submit">Submit</button>
		</form>
	);
}
