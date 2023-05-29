// Src/services/user-service.ts

import axiosInstance from './shared';

export const fetchUsers = async () => {
	try {
		const users = await axiosInstance.get('/users');
		return users;
	} catch (error) {
		console.error('An error occurred while fetching users:', error);
		return null;
	}
};
