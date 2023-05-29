
import {useState, useEffect, useRef} from 'react';

// 节流的核心思想是：如果一个函数持续地快速调用，那么在一段时间内只会执行一次这个函数，即使在这段时间内这个函数被调用了多次。换句话说，节流就是让一个函数在一段时间内最多执行一次。

// 节流常常用于处理一些需要随着用户的持续操作而反复执行的操作，例如滚动事件、窗口大小调整事件等。

function useThrottle<T>(value: T, limit: number): T {
	const [throttledValue, setThrottledValue] = useState(value);
	const lastRan = useRef(Date.now());

	useEffect(() => {
		if (Date.now() - lastRan.current >= limit) {
			setThrottledValue(value);
			lastRan.current = Date.now();
		}
	}, [value, limit]);

	return throttledValue;
}

