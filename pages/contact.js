import Link from "next/link";
import Navbar from "../components/Navbar";
export default function ContactPage() {
	return (
		<div className="min-h-screen bg-white text-black">
			<Navbar />
			<div className="px-8 lg:px-40 pb-20">
				<div className="grid grid-cols-1 gap-y-8 my-8 font-raleway">
					<div>
						<div className="text-lg mb-1">Your Name</div>
						<input
							type="text"
							className=" p-2 bg-white font-light border outline-none border-slate-600 focus:ring-1 focus:ring-slate-900 focus:border-slate-900 rounded-md"
						/>
					</div>
					<div>
						<div className="text-lg mb-1">Desired Move-in Date</div>
						<input
							type="date"
							className=" p-2 bg-white font-light border outline-none border-slate-600 focus:ring-1 focus:ring-slate-900 focus:border-slate-900 rounded-md"
							placeholder="Name"
						/>
					</div>
					<div>
						<div className="text-lg mb-1">Phone Number or Email</div>
						<input
							type="text"
							className=" p-2 bg-white font-light border outline-none border-slate-600 focus:ring-1 focus:ring-slate-900 focus:border-slate-900 rounded-md"
						/>
					</div>
					<div>
						<div className="text-lg mb-1">Additional Comments</div>
						<textarea
							type="text"
							draggable
							className="md:w-96 p-2 h-32 font-light bg-white border outline-none border-slate-600 focus:ring-1 focus:ring-slate-900 focus:border-slate-900 rounded-md"
						/>
					</div>
				</div>
				<a className="cursor-pointer px-4 py-2 border hover:bg-slate-100 border-slate-900 rounded-xl">
					Contact Host
				</a>
			</div>
		</div>
	);
}
