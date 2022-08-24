export default function ContactPage() {
	return (
		<div className=" px-8 lg:px-40 pb-20 grid grid-cols-1 md:flex md:justify-between place-content-between">
			<div className="text-3xl font-playfair font-semibold">Contact Us</div>
			<div className="grid grid-cols-1 gap-y-8 mt-8 font-raleway">
				<div>
					<div className="text-lg mb-1">Your Name</div>
					<input
						type="text"
						className=" p-2 bg-white border outline-none border-slate-600 focus:ring-1 focus:ring-slate-900 focus:border-slate-900 rounded-md"
					/>
				</div>
				<div>
					<div className="text-lg mb-1">Desired Move-in Date</div>
					<input
						type="date"
						className=" p-2 bg-white border outline-none border-slate-600 focus:ring-1 focus:ring-slate-900 focus:border-slate-900 rounded-md"
						placeholder="Name"
					/>
				</div>
				<div>
					<div className="text-lg mb-1">Phone Number or Email</div>
					<input
						type="text"
						className=" p-2 bg-white border outline-none border-slate-600 focus:ring-1 focus:ring-slate-900 focus:border-slate-900 rounded-md"
					/>
				</div>
				<div>
					<div className="text-lg mb-1">Additional Comments</div>
					<textarea
						type="text"
						draggable
						className="md:w-96 p-2 bg-white border outline-none border-slate-600 focus:ring-1 focus:ring-slate-900 focus:border-slate-900 rounded-md"
					/>
				</div>
			</div>

			<div>
				<div className="font-raleway font-semibold text-xl">
					Message julia@realty.com
				</div>
			</div>
		</div>
	);
}
