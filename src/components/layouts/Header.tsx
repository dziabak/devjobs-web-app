// BUILT-IN IMPORTS
import { Link } from "react-router-dom";
// INTERNAL IMPORTS
import ThemeSwitcher from "../UI/ThemeSwitcher";

function Header() {
	return (
		<div className="bg-[url('../../assets/mobile/bg-pattern-header.svg')] bg-cover md:bg-[url('../../assets/tablet/bg-pattern-header.svg')] lg:bg-[url('../../assets/desktop/bg-pattern-header.svg')] bg-bottom bg-c-light-grey dark:bg-c-midnight">
			<div className="container">
				<div className="flex justify-between p-8 pb-16 sm:px-0">
					<Link to="/jobs" reloadDocument>
						<img src="../../assets/desktop/logo.svg" alt="" />
					</Link>
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	);
}

export default Header;
