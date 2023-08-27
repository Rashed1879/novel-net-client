import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import footerBg from '../../../assets/footer-bg.jpg';
const Footer = () => {
	return (
		<footer
			className="footer footer-center p-10 rounded text-white"
			style={{ backgroundImage: `url(${footerBg})` }}
		>
			<div className="grid grid-flow-col gap-4">
				<a className="link link-hover">About us</a>
				<a className="link link-hover">Contact</a>
				<a className="link link-hover">Partners</a>
				<a className="link link-hover">Press kit</a>
			</div>
			<div>
				<div className="grid grid-flow-col gap-4">
					<a className="border-2 border-teal-700 p-2 rounded-full hover:bg-teal-700 duration-500">
						<FaTwitter className="w-6 h-6" />
					</a>
					<a className="border-2 border-teal-700 p-2 rounded-full hover:bg-teal-700 duration-500">
						<FaFacebook className="w-6 h-6" />
					</a>
					<a className="border-2 border-teal-700 p-2 rounded-full hover:bg-teal-700 duration-500">
						<FaYoutube className="w-6 h-6" />
					</a>
				</div>
			</div>
			<div>
				<p>Copyright © 2023 - All right reserved by Novel Net Ltd</p>
			</div>
		</footer>
	);
};

export default Footer;
