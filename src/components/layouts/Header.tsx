// BUILT-IN IMPORTS
import { Link } from "react-router-dom";
// INTERNAL IMPORTS
import ThemeSwitcher from "../UI/ThemeSwitcher";
import Logo from "../../assets/icons/logo.svg";

function Header() {
	return (
		<div className="bg-[url('../../assets/bg-pattern-header/bg-pattern-header-mobile.svg')] bg-cover md:bg-[url('../../assets/bg-pattern-header/bg-pattern-header-tablet.svg')] lg:bg-[url('../../assets/bg-pattern-header/bg-pattern-header-desktop.svg')] bg-bottom bg-c-light-grey dark:bg-c-midnight">
			<div className="container">
				<div className="flex justify-between p-8 pb-16 sm:px-0">
					<Link to="/jobs" reloadDocument>
						<img src={Logo} alt="Devjobs logo" />
					</Link>
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	);
}

export default Header;
