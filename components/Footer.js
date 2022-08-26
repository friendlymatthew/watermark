import Signature from "./Signature";

export default function Footer() {
	return (
		<div className="bg-slate-700 flex flex-col space-y-10 px-8 lg:px-56 text-white py-12">
			<div>
				<div className="font-playfair text-3xl font-semibold">
					The Watermark
				</div>
				<div className="font-raleway mt-1">
					<div>1551 Ala Wai Blvd</div>
					<div>Honolulu, HI 96815</div>
				</div>
			</div>

			<div className="text-sm font-raleway grid grid-cols-1 gap-y-8 md:gap-y-0 md:grid-cols-2 gap-x-2 w-full">
				<div className="flex flex-col space-y-1">
					<div className="font-semibold text-base mb-1">CONTACT</div>
					<div className="text-white ">Julia Choi</div>
					<div className="text-gray-200 hover:text-white transition ease-in duration-75 cursor-pointer font-thin hover:underline underline-offset-1">
						+1 (609) 819 - 6858
					</div>
					<a
						className="text-gray-200 hover:text-white transition ease-in duration-75 cursor-pointer font-thin hover:underline underline-offset-1"
						href="mailto:juliac1970@gmail.com"
					>
						juliac1970@gmail.com
					</a>
				</div>
				<div className="flex flex-col space-y-1">
					<div className="font-semibold mb-1 text-base ">PROPERTY</div>
					<div>
						<a
							href="#photos"
							className="text-gray-200 hover:text-white transition ease-in duration-75 cursor-pointer font-thin hover:underline underline-offset-1"
						>
							Photos
						</a>
					</div>
					<div>
						<a
							href="#details"
							className="text-gray-200 hover:text-white transition ease-in duration-75 cursor-pointer font-thin hover:underline underline-offset-1"
						>
							Property Details
						</a>
					</div>
					<div>
						<a
							href="#amenities"
							className="text-gray-200 hover:text-white transition ease-in duration-75 cursor-pointer font-thin hover:underline underline-offset-1"
						>
							Apartment Amenities
						</a>
					</div>
					<div>
						<a
							href="#reviews"
							className="text-gray-200 hover:text-white transition ease-in duration-75 cursor-pointer font-thin hover:underline underline-offset-1"
						>
							Reviews
						</a>
					</div>
					<div>
						<a
							href="#map"
							className="text-gray-200 hover:text-white transition ease-in duration-75 cursor-pointer font-thin hover:underline underline-offset-1"
						>
							Map
						</a>
					</div>
				</div>
			</div>

			<Signature />
		</div>
	);
}
