export default function Card({
	room,
	beds,
	closet,
	work,
	bathroom,
	tv,
	wifi,
	table,
	fan,
}) {
	return (
		<div className="font-raleway text-base">
			<div className="bg-slate-100 h-64 rounded-xl mb-3"></div>
			<div className="font-semibold">{room}</div>
			<div>{beds}</div>
			<div>{work}</div>
			<div>{closet}</div>
			<div>{bathroom}</div>
			<div>{tv}</div>
			<div>{wifi}</div>
			<div>{table}</div>
			<div>{fan}</div>
		</div>
	);
}
