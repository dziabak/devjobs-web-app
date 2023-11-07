import { useEffect, useState } from "react";

function ThemeSwitcher() {
	// const [isChecked, setIsChecked] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
			setIsDarkMode(true);
		} else {
			document.documentElement.classList.remove("dark");
			setIsDarkMode(false);
		}
	}, [localStorage.theme, isDarkMode]);

	const toggleTheme = () => {
		if (localStorage.theme === "dark") {
			localStorage.theme = "light";
			document.documentElement.classList.remove("dark");
			setIsDarkMode(false);
		} else {
			localStorage.theme = "dark";
			document.documentElement.classList.add("dark");
			setIsDarkMode(true);
		}
	};

	return (
		<div className="flex items-center justify-center">
			<label htmlFor="themeSwitcher" className="cursor-pointer p-2 px-3">
				<img
					src="../../assets/desktop/icon-sun.svg"
					alt=""
					className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
				/>
			</label>
			<input
				type="checkbox"
				id="themeSwitcher"
				className="toggle toggle-neutral toggle-sm bg-c-violet border-transparent md:toggle-md"
				onChange={toggleTheme}
				checked={isDarkMode}
			/>

			<label htmlFor="themeSwitcher" className="cursor-pointer p-2 px-3">
				<img
					src="../../assets/desktop/icon-moon.svg"
					alt=""
					className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
				/>
			</label>
		</div>
	);
}

export default ThemeSwitcher;
