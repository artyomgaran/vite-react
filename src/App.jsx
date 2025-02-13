import logo from './assets/react.svg';
import './App.css';


export const App = () => {
	const currentYear = new Date().getFullYear(); // Декларативный стиль (описываем, что хотим получить)
	return (

		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload 2.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				{/* Декларативный стиль — описываем, что должно быть в разметке */}
				<footer>
					<p>{currentYear}</p>
				</footer>
			</header>


		</div>
	);
};
