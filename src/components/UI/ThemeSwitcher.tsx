// EXTERNAL IMPORTS
import { useDarkMode } from "usehooks-ts";
// INTERNAL IMPORTS
import iconSun from "../../assets/icons/icon-sun.svg";
import iconMoon from "../../assets/icons/icon-moon.svg";

function ThemeSwitcher() {
	const { isDarkMode, toggle } = useDarkMode();

	if (isDarkMode) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}

	return (
		<div className="flex items-center justify-center">
			<label htmlFor="themeSwitcher" className="p-2 px-3 cursor-pointer">
				<img
					src={iconSun}
					alt="Icon of a sun"
					className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
				/>
			</label>
			<input
				type="checkbox"
				id="themeSwitcher"
				className="border-transparent toggle toggle-neutral toggle-sm bg-c-violet hover:bg-c-light-violet [--tglbg:white] dark:[--tglbg:white] md:toggle-md"
				onChange={toggle}
				checked={isDarkMode}
			/>

			<label htmlFor="themeSwitcher" className="p-2 px-3 cursor-pointer">
				<img
					src={iconMoon}
					alt="Icon of a moon"
					className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
				/>
			</label>
		</div>
	);
}

export default ThemeSwitcher;
