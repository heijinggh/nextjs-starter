import {create} from 'zustand';

// 定义我们的状态的类型
type State = {
	count: number;
	increment: () => void;
	decrement: () => void;
};

// 创建我们的状态
export const useCounterStore = create<State>(set => ({
	count: 0,
	increment() {
		set(state => ({count: state.count + 1}));
	},
	decrement() {
		set(state => ({count: state.count - 1}));
	},
}));
