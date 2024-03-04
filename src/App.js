import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const dummy = [
	{
		id: 2,
		content: '빨래',
		createdDate: new Date().getTime(),
		isDone: false,
	},
	{
		id: 1,
		content: '청소',
		createdDate: new Date().getTime(),
		isDone: false,
	},
	{
		id: 0,
		content: '설거지',
		createdDate: new Date().getTime(),
		isDone: false,
	},
];

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
