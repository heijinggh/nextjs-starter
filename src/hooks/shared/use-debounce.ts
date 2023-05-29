import {useState, useEffect} from 'react';

// 防抖的核心思想是：如果一个函数持续地快速调用，那么只有当它停止调用一段时间（比如 200ms）之后，才会执行这个函数。换句话说，防抖就是让一个函数在最后一次被调用后，经过一段时间后才执行，如果在这段时间内又被调用了，那么就重新开始计时。

// 防抖常常用于处理一些需要等待用户输入停止后再进行的操作，例如搜索框的自动完成。

function useDebounce<T>(value: T, delay: number): T {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
}
