import { FormEvent } from "react";

function JobsFilter() {
	const searchSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className="container">
			<div className="w-full p-0 rounded-md bg-c-white">
			<form onSubmit={searchSubmitHandler}>
				<div className="flex items-center justify-between">
					<div className="w-full p-4 md:border-r md:flex md:w-1/3 md:items-center md:px-4 lg:px-8 lg:w-1/3">
						<svg
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							className="hidden md:block md:w-8">
							<path
								d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
								fill="#5964E0"
								fillRule="nonzero"
							/>
						</svg>
						<input
							type="text"
							placeholder="Filter by title..."
							className="w-full h-12 px-2 rounded-md"
						/>
					</div>

					<div className="hidden md:p-4 md:flex md:w-1/3 md:items-center md:px-4 lg:w-1/3 md:border-r lg:px-6">
						<svg
							width="17"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							className="md:w-8">
							<path
								d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
								fill="#5964E0"
								fillRule="nonzero"
							/>
						</svg>
						<input
							type="text"
							placeholder="Filter by location..."
							className="w-full h-12 px-2 rounded-md"
						/>
					</div>

					<div className="flex justify-between p-4 md:w-1/3 md:items-center md:px-4 lg:w-1/3 lg:px-6 lg:pr-4">
						<div className="hidden form-control md:block">
							<label className="cursor-pointer label">
								<input type="checkbox" className="checkbox" />
								<span className="ml-2 text-base font-bold label-text lg:hidden">
									Full Time
								</span>
								<span className="hidden ml-2 text-base font-bold label-text lg:block">
									Full Time Only
								</span>
							</label>
						</div>
						<button className="p-3 rounded-md md:hidden">
							<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
									fill="#6E8098"
									fillRule="nonzero"
								/>
							</svg>
						</button>
						<button className="p-3 bg-indigo-500 rounded-md lg:px-12">
							<svg
								width="24"
								height="24"
								xmlns="http://www.w3.org/2000/svg"
								className="md:hidden">
								<path
									d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
									fill="#FFFFFF"
									fillRule="nonzero"
								/>
							</svg>
							<p className="hidden font-bold text-c-light-grey md:block">
								Search
							</p>
						</button>
					</div>
				</div>
			</form>
		</div>
		</div>
	);
}

export default JobsFilter;
