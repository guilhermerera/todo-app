import Logo from "../../assets/logo/logo.svg";
import style from "./Header.module.css";

export default function Header() {
	return (
		<header className={style.container}>
			<img className={style.logo} src={Logo} />
		</header>
	);
}
