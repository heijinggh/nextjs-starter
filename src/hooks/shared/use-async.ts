import {useState, useEffect, useCallback} from 'react';

type AsyncState<T> = {
	data: T | undefined;
	loading: boolean;
	error: Error | undefined;
};

function useAsync<T>(asyncFunction: () => Promise<T>, immediate = true): AsyncState<T> & {execute: () => void} {
	const [state, setState] = useState<AsyncState<T>>({
		data: undefined,
		loading: false,
		error: undefined,
	});

	const execute = useCallback(() => {
		setState({data: undefined, loading: true, error: undefined});
		asyncFunction()
			.then(data => {
				setState({data, loading: false, error: undefined});
			})
			.catch((error: Error) => {
				setState({data: undefined, loading: false, error});
			});
	}, [asyncFunction]);

	useEffect(() => {
		if (immediate) {
			execute();
		}
	}, [execute, immediate]);

	return {...state, execute};
}

export default useAsync;
