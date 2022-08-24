export default function Navbar() {
	return (
		<nav className="bg-slate-900 text-white py-5 flex justify-between items-end">
			<div class="dropdown dropdown-hover">
				<label
					tabindex="0"
					className="px-8 lg:px-40 m-1 flex space-x-2 items-center cursor-pointer"
				>
					<a className=" text-2xl font-playfair font-semibold ">
						The Watermark
					</a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</label>
				<ul
					tabindex="0"
					className="px-8 lg:px-40 text-white font-thin font-raleway text-xl dropdown-content menu p-2 bg-slate-900 w-screen"
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
			<div className="pr-8 lg:pr-40 flex space-x-8 text-base font-raleway">
				<a className="cursor-pointer hover:underline underline-offset-2 ">
					English
				</a>

				<a className="cursor-pointer hover:underline underline-offset-2 ">
					한국어
				</a>
			</div>
		</nav>
	);
}
