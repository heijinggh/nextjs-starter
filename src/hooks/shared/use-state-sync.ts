import {useState, useRef, useEffect} from 'react';

/**
 * 自定义钩子函数，实现同步更新状态。
 *
 * @param initialValue 初始状态值。
 * @returns 一个包含当前状态、设置状态的函数以及获取当前状态的函数的数组。
 *
 * 设置状态的函数同时更新状态和对应的引用，允许同步获取状态。
 * 获取当前状态的函数返回引用的当前值，该引用与状态保持同步。
 *
 * @example
 * const [count, setCount, getCount] = useStateSync(0);
 * setCount(1);
 * console.log(getCount());  // 输出：1
 */
function useStateSync<T>(initialValue: T): [T, (value: T) => void, () => T] {
	const [state, setState] = useState(initialValue);
	const stateRef = useRef(state);

	useEffect(() => {
		stateRef.current = state;
	}, [state]);

	const setStateSync = (value: T) => {
		stateRef.current = value;
		setState(value);
	};

	const getStateSync = () => stateRef.current;

	return [state, setStateSync, getStateSync];
}

export default useStateSync;
