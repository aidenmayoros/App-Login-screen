export default function InputField({ name, value, onChange, type }) {
	return (
		<input
			type={type}
			placeholder={name}
			className='input'
			onChange={(e) => onChange(e.target.value)}
			value={value}></input>
	);
}
