function ThemeSwitcher() {
	return (
		<div className="bg-[url('../../assets/mobile/bg-pattern-header.svg')] bg-cover">
			<img src="../../assets/desktop/logo.svg" alt="" />
			<img src="../../assets/desktop/icon-sun.svg" alt="" />
			<input type="checkbox" className="toggle" defaultChecked />
			<img src="../../assets/desktop/icon-moon.svg" alt="" />
		</div>
	);
}

export default ThemeSwitcher;
