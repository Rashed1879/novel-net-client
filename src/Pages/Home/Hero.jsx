import heroImg from '../../assets/reading.png';

const Hero = () => {
	return (
		<div className="bg-base-300 px-2 md:px-10 md:flex justify-between items-center">
			<div>
				<h2 className="text-3xl md:text-6xl font-bold">
					Reviews and tips for
					<br />
					books and more
				</h2>
				<p className="my-5">
					Discover reviews of Books, Movies and Series as well as
					<br />
					tips about Gifts, Activities & many more.
				</p>
				<button className="btn bg-orange-600 rounded-3xl normal-case hover:bg-orange-300">
					Exlpore Reviews & Tips
				</button>
			</div>
			<div>
				<img src={heroImg} alt="" />
			</div>
		</div>
	);
};

export default Hero;
