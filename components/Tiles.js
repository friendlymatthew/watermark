export default function Tiles() {
	return (
		<div className="grid grid-rows-2 lg:grid-flow-col gap-1">
			<div className="row-span-2 h-64 lg:h-full col-span-3 bg-purple-200 cursor-pointer rounded-xl lg:rounded-r-none lg:rounded-l-xl hover:opacity-80">
				01
			</div>
			<div className="bg-lime-200 col-span-2 invisible lg:visible h-0 lg:h-64 cursor-pointer rounded-tr-xl  hover:opacity-80">
				02
			</div>
			<div className="row-span-1 invisible lg:visible h-0 lg:h-64 bg-sky-300 cursor-pointer hover:opacity-80 ">
				03
			</div>
			<div className="col-span-1 invisible lg:visible h-0 lg:h-64 bg-orange-200  cursor-pointer rounded-br-xl  hover:opacity-80">
				04
			</div>
		</div>
	);
}
