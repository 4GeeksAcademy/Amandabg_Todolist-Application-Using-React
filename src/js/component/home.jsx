import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [activity, setActivity] = useState([]);
	return (
		<div className="container-fluid">
			<h1>Todos</h1>
			<div className="container-task">
				<input className="input"
					type="text"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyPress={(e) => {
						if (e.key === "Enter") {
							setActivity(activity.concat(inputValue));
							setInputValue("");
						}
					}}
					placeholder="¿What do you need?"
				/>
				<ul className="list-group list-group-flush">
					{activity.map((t, i) => (
						<li className="list-group-item" key={i}>
							<label>{t}</label>
							<button className="button-task" onClick={() => {
									const updatedActivity = [...activity];
									updatedActivity.splice(i,1);
									setActivity(updatedActivity);
								}}><i className="fas fa-times"></i></button>
						</li>
					))}
				</ul>
				<hr/>
				<div className="pendientes">{activity.length == 0 ? "No tasks, add a tasks items left" :
					activity.length + " Items left"}</div>
			</div>
		</div>
	);
};

export default Home;


  //Falta la propiedad key: Dentro del método map en el elemento <li>, faltaba agregar la propiedad key para cada elemento de la lista.
  //activity: Es la matriz de datos sobre la cual se va a iterar.
//map: Es el método de la matriz que llama a una función para cada elemento de la matriz y devuelve un nuevo array con los resultados.
//(t, i) => ...: Es la función de devolución de llamada (callback) que se ejecuta para cada elemento de activity. Aquí, t representa cada elemento de activity en cada iteración, y i representa el índice del elemento actual.
//<li key={i}>...</li>: Es el elemento JSX que se crea en cada iteración. La propiedad key={i} se utiliza para ayudar a React a identificar de forma única cada elemento de la lista y mejorar el rendimiento del renderizado.
//<li key={i}>{t} //Si quiero que la cuente i+1//</li>