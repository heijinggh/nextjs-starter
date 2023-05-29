'use client';
import {useCounterStore} from '@/store/counter';
import {Button} from '../ui/button';

const Counter = () => {
	const {count, increment, decrement} = useCounterStore();

	return (
		<div>
			<p>Count: {count}</p>
			<Button onClick={increment}>Increment</Button>
			<Button onClick={decrement}>Decrement</Button>
		</div>
	);
};

export default Counter;
