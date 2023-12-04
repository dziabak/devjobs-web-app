type LoadMoreContentProps = {
	canLoadMoreContent: boolean;
	onLoadMoreData?: () => void;
};

const LoadMoreContent = ({
	canLoadMoreContent,
	onLoadMoreData,
}: LoadMoreContentProps) => {
	if (canLoadMoreContent) {
		return (
			<button
				className="px-16 py-3 font-bold text-center transition-colors rounded-md text-c-white bg-c-violet hover:bg-c-light-violet"
				onClick={onLoadMoreData}>
				Load More
			</button>
		);
	} else {
		return (
			<p className="font-bold text-center text-c-violet">
				No more offers to load!
			</p>
		);
	}
};

export default LoadMoreContent;
