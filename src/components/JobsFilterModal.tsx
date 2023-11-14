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
							className="w-6 rounded cursor-pointer accent-c-violet dark:bg-c-grey"
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
