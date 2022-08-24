export default function Button({ action }) {
	return (
		<div className="cursor-pointer text-slate-600 hover:text-slate-900 transition ease-in duration-100 font-playfair text-2xl font-semibold">
			{action}
		</div>
	);
}
