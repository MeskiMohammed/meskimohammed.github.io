import ReactDOM from "react-dom"

export default function Opening() {
	return ReactDOM.createPortal(
		<div id="opening" className="absolute inset-0 z-50 grid grid-cols-2 overflow-hidden">
			<div className="relative flex flex-col">
				{Array.from({ length: 21 }).map((_, index) => (
					<div key={index} className="flex-1 bg-background-dark dark:bg-primary w-full h-full left-door" />
				))}
				<div id="logo-left" className="absolute z-60 top-0 left-0 w-full h-full flex justify-end items-center">
					<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="relative aspect-square translate-x-1/2 h-80 fill-secondary">
						<path id="path8" d="m116.71 54.21l99.95 88.51 60.8 53.85 234.05 207.27v81.01l-44.91-39.77-189.14-167.5-60.8-53.85-99.95-88.51v756.64l99.95-80.51v-477.82l60.8 53.85 127.14 112.6-46.3 41-80.84-71.58v373.61l-60.8 48.98-99.95 80.51-62.66 50.46v-1024.23zm441.37 390.86l62 54.9-45.74 40.51-62-54.9-0.79-0.7v-79.61l0.79-0.7zm-46.56 149.58v82.02l-45.49-40.28-61.99-54.9 46.31-41.01z" />
					</svg>
				</div>
			</div>
			<div className="relative flex flex-col">
				{Array.from({ length: 21 }).map((_, index) => (
					<div key={index} className="flex-1 bg-background-dark dark:bg-primary w-full h-full right-door" />
				))}
				<div id="logo-right" className="absolute top-0 left-0 w-full h-full flex justify-start items-center">
					<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="relative aspect-square -translate-x-1/2 h-80 fill-secondary">
						<path id="path10" d="m969 1024.4l-62.65-50.47-99.95-80.51-60.81-48.98v-373.6l-79.21 70.14-45.74 40.51-61.99 54.9-46.31 41.01-0.8-0.71v-80.6l0.8-0.71 62-54.9 45.74-40.5 125.51-111.16 60.81-53.85v477.82l99.95 80.51v-756.64l-99.95 88.51-60.81 53.85-187.51 166.05-45.74-40.5 233.25-206.56 60.81-53.86 99.95-88.51 62.65-55.48zm-457.49-539.54v1.46l-61.16 54.17-46.31 41-45.74-40.5 46.3-41.01 62-54.9z" />
					</svg>
				</div>
			</div>
		</div>,
		document.body,
	)
}
