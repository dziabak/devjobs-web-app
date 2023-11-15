import { useEffect, useRef } from "react";

const JobsFilterModal = ({
	openModal,
	closeModal,
	locationSearchElement,
	contractSearchElement,
}) => {
	const modalRef = useRef();

	useEffect(() => {
		if (openModal) {
			modalRef.current?.showModal();
		} else {
			modalRef.current?.close();
		}
	}, [openModal]);

	return (
		<dialog
			ref={modalRef}
			onCancel={closeModal}
			onClick={(e) => {
				const dialogDimensions = modalRef.current?.getBoundingClientRect();
				if (
					e.clientX < dialogDimensions.left ||
					e.clientX > dialogDimensions.right ||
					e.clientY < dialogDimensions.top ||
					e.clientY > dialogDimensions.bottom
				) {
					closeModal();
				}
			}}
			className="w-full h-64 rounded-md backdrop:bg-c-midnight backdrop:opacity-75">
			<div className="flex flex-col justify-around w-full h-full bg-white dark:bg-c-very-dark-blue">
				<div className="border-b dark:border-c-midnight">
					<div className="flex items-center p-6">
						<svg
							width="17"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							className="w-8">
							<path
								d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
								fill="#5964E0"
								fillRule="nonzero"
							/>
						</svg>
						<input
							type="text"
							placeholder="Filter by location..."
							className="w-full h-12 pl-2 rounded-md dark:bg-c-very-dark-blue dark:text-c-white"
							ref={locationSearchElement}
						/>
					</div>
				</div>

				<div className="flex flex-col justify-between p-6">
					<div className="flex flex-row mb-6">
						<input
							type="checkbox"
							id="contract-modal"
							className="relative float-left h-6 w-6 appearance-none rounded border-[0.125rem] border-solid border-neutral-200 bg-neutral-200 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-c-violet checked:bg-c-violet checked:before:opacity-[0.16] checked:after:absolute checked:after:mt-[0.05rem] checked:after:ml-[0.45rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer dark:border-gray-700 dark:bg-gray-700 dark:checked:border-c-violet dark:checked:bg-c-violet accent-c-violet"
							ref={contractSearchElement}
						/>
						<label
							htmlFor="contract-modal"
							className="ml-2 text-lg font-bold cursor-pointer dark:text-white">
							Full Time Only
						</label>
					</div>

					<button
						onClick={closeModal}
						className="p-3 font-bold transition-colors rounded-md bg-c-violet lg:px-12 hover:bg-c-light-violet text-c-light-grey">
						Search
					</button>
				</div>
			</div>
		</dialog>
	);
};

export default JobsFilterModal;
