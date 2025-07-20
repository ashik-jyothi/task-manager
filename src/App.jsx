import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { useAuth } from "./hooks/useAuth.js";
import LoginForm from "./components/auth/LoginForm.jsx";
import TaskList from "./components/tasks/TaskList.jsx";
import LoadingSpinner from "./components/common/LoadingSpinner.jsx";

function App() {
	const { isAuthenticated, loading, logout, user, login } = useAuth();

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gray-50">
				<LoadingSpinner size="lg" />
			</div>
		);
	}

	if (!isAuthenticated) {
		return <LoginForm login={login}/>;
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-white shadow-sm border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex justify-between items-center h-16">
						<h1 className="text-xl font-bold text-gray-900">Task Manager</h1>
						<div className="flex items-center space-x-4">
							{user && (
								<span className="text-sm text-gray-700">
									Welcome, {user.username}
								</span>
							)}
							<button
								type="button"
								onClick={logout}
								className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm rounded-md text-gray-700 bg-white hover:bg-gray-50"
							>
								<HiArrowRightOnRectangle className="w-4 h-4 mr-2" />
								Logout
							</button>
						</div>
					</div>
				</div>
			</header>
			<main>
				<TaskList />
			</main>
		</div>
	);
}

export default App;
