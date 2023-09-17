import insta from "../../public/insta.png";
import twitter from "../../public/twiiter.png";
function Footer() {
	return (
		<div className="mx-12 md:mx-32 ">
			<main className="flex justify-start gap-44 mb-12">
				<ul className="gap-2">
					<li>Help</li>
					<li>Forum</li>
					<li>Contact</li>
					<li>FAQ</li>
				</ul>
				<ul>
					<li>Legal </li>
					<li>Terms</li>
					<li>Privacy</li>
					<li>Resources</li>
				</ul>
			</main>

			<aside className="flex justify-between items-center mb-8 flex-col gap-3 md:flex-row">
				<h2>© 2023 Child Rights Game. All Rights Reserved.</h2>
				<div className="flex gap-12">
					<img src={insta} alt="instagram icon" className="h-8 " />
					<img src={twitter} alt="twitter icon" className="h-8 " />
				</div>
			</aside>
		</div>
	);
}

export default Footer;
