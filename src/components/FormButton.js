export default function FormButton({ name, handleClick, styles }) {
	return (
		<button onClick={handleClick} className={styles}>
			{name}
		</button>
	);
}
