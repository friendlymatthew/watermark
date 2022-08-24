import { useState, useEffect } from "react";

const reviewDb = [
	{
		name: "Barack",
		date: "August 2022",
		cleanliness: 5,
		communication: 5,
		location: 5,
		quality: 5,
		comfort: 5,
		accuracy: 5,
		review:
			"We had an amazing stay at this lake house. Location could not be better, we walked or kayaked to the beach on the lake two minutes away. House is very nice, functional and beautiful. My ",
	},
	{
		name: "Justin",
		date: "April 2022",
		cleanliness: 5,
		communication: 5,
		location: 5,
		quality: 5,
		comfort: 5,
		accuracy: 5,
		review:
			"Amazing and super responsive host. Superb property. Tastefully decorated and 100% as described. Perfect for multiple families to get away together.",
	},
	{
		name: "Charles",
		date: "September 2022",
		cleanliness: 5,
		communication: 5,
		location: 5,
		quality: 5,
		comfort: 5,
		accuracy: 5,
		review:
			"This place is a true gem! Very modern and updated, but with the old charm still there. It was very quiet and peaceful with so much to do that we didn’t have to leave",
	},
];

export default function Reviews() {
	const [composite, setComposite] = useState(0);

	const [avg, setAvg] = useState([]);

	useEffect(() => {
		var clean = 0;
		var comm = 0;
		var loc = 0;
		var qual = 0;
		var comfort = 0;
		var accuracy = 0;

		for (let idx = 0; idx <= reviewDb.length - 1; idx++) {
			clean += reviewDb[idx].cleanliness;
			comm += reviewDb[idx].communication;
			loc += reviewDb[idx].location;
			qual += reviewDb[idx].quality;
			comfort += reviewDb[idx].comfort;
			accuracy += reviewDb[idx].accuracy;
		}

		setAvg([
			{
				title: "Cleanliness",
				score: round(clean / reviewDb.length),
			},
			{
				title: "Communication",
				score: round(comm / reviewDb.length),
			},
			{
				title: "Location",
				score: round(loc / reviewDb.length),
			},
			{
				title: "Quality",
				score: round(qual / reviewDb.length),
			},
			{
				title: "Comfort",
				score: round(comfort / reviewDb.length),
			},
			{
				title: "Accuracy",
				score: round(accuracy / reviewDb.length),
			},
		]);

		var sum = 0;

		for (let jdx = 0; jdx <= avg.length - 1; jdx++) {
			sum += avg[jdx].score;
		}

		setComposite(sum / avg.length);
	}, []);

	const round = (number) => {
		return Math.round(number * 10) / 10;
	};

	return (
		<div id="reviews">
			<div className="flex space-x-6 items-center text-2xl font-semibold py-10">
				<div className="items-center flex space-x-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-6 h-6"
					>
						<path
							fillRule="evenodd"
							d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
							clipRule="evenodd"
						/>
					</svg>

					<div className="font-sans">{composite}</div>
				</div>
				<div className="flex items-center space-x-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-6 h-6"
					>
						<path
							fillRule="evenodd"
							d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
							clipRule="evenodd"
						/>
						<path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
					</svg>

					<span className="font-sans">
						{reviewDb.length} <span className="font-raleway">reviews</span>{" "}
					</span>
				</div>
			</div>
			<div className="hidden md:visible md:grid grid-cols-2 md:gap-x-24 gap-y-4 md:pb-10">
				{avg.map(({ title, score }) => {
					return (
						<div className="grid grid-cols-2 items-center text-base">
							<div>{title}</div>
							<div className="flex items-center space-x-4">
								<progress
									class="progress w-48 h-1"
									value="100"
									max="100"
								></progress>
								<div className="text-sm font-sans">{score}</div>
							</div>
						</div>
					);
				})}
			</div>

			<div className="md:mt-12 grid grid-cols-1 md:grid-cols-2 md:gap-x-24 md:gap-y-12 gap-y-16">
				{reviewDb.map(({ name, date, review }) => {
					return (
						<div className="rounded-xl">
							<div className="font-semibold">{name}</div>
							<div className="text-sm opacity-80">{date}</div>
							<div className="pt-2">{review}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
