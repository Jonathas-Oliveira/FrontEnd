import React,{useState, useEffect} from 'react';
import api from './services/api'
function App() {
  const [projects, setProjects] = useState([])
  //useState retorna um array



  useEffect(() =>{
    api.get('projects').then(response => setProjects(response.data))
  },[projects])

  async function handleAddProject(){
    /*setProjects([
      ...projects,Date.now() 
    ]) // o operador spread precisa existir para que o estado se mantenha atualizado e não sobescreva.*/

  const response = await api.post('projects',{
    title: "Adding other project",
    message:"I will be the better programmer of react "
  })

  setProjects([
    ...projects,
    projects
  ])
  }

  return (
    <div className="App">
      <>
     
      <ul>
          {projects.map(projetos => <li>{projetos.title}</li>) }
          {projects.map(projetos => <li>{projetos.message}</li>) }
          
      </ul>
      <button onClick={handleAddProject} type='button'>Adicionar projetos</button>
      </>
    </div>
  );
}

export default App;
