import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="bg-slate-900 text-white py-5 flex justify-between items-center md:items-end">
			<div className="dropdown dropdown-hover">
				<label
					tabIndex="0"
					className="px-8 lg:px-56 m-1 flex space-x-2 items-center cursor-pointer"
				>
					<Link href="/">
						<div className="text-lg md:text-2xl font-playfair font-semibold ">
							The Watermark
						</div>
					</Link>
				</label>
				<ul
					tabIndex="0"
					className="px-8 lg:px-56 text-white font-thin font-raleway text-md dropdown-content menu p-2 bg-slate-900 w-screen"
				>
					<li>
						<a href="#photos">Photos</a>
					</li>
					<li className="">
						<a href="#details">Property Details</a>
					</li>
					<li>
						<a href="#reviews">Reviews</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
			<div className="text-sm pr-8 lg:pr-56 flex space-x-8 md:text-base font-raleway">
				<Link href="/">
					<div className="cursor-pointer hover:underline underline-offset-2 ">
						English
					</div>
				</Link>

				<a className="cursor-pointer hover:underline underline-offset-2 ">
					한국어
				</a>
			</div>
		</nav>
	);
}
