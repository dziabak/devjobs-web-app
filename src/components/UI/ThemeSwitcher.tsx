function ThemeSwitcher() {
	return (
		<div className="flex items-center space-x-2">
			<img src="../../assets/desktop/icon-sun.svg" alt="" />
			<input
				type="checkbox"
				className="toggle toggle-neutral toggle-sm"
				defaultChecked
			/>
			<img src="../../assets/desktop/icon-moon.svg" alt="" />
		</div>
	);
}

export default ThemeSwitcher;
