type ErrorBlockProps = {
	errorHeader: string;
	errorMessage: string;
};

const ErrorBlock = ({ errorHeader, errorMessage }: ErrorBlockProps) => {
	return (
		<div className="space-y-4 font-bold text-center">
			<p className="text-2xl text-c-violet">{errorHeader}</p>
			<p className="text-c-dark-grey">{errorMessage}</p>
		</div>
	);
};

export default ErrorBlock;
