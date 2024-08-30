import Main from "./components/Main"
import NoProject from "./components/NoProject"
import Sidebar from "./components/Sidebar"
import { useState } from "react"
import AddModal from "./components/UI/AddModal";
import HeaderProject from "./components/UI/Form/HeaderProject";
import TaskForm from "./components/UI/Form/TaskForm";
import TaskList from "./components/UI/Form/TaskList";

const mockProjects = [
  {
    id: 1,
    title: "project 1",
    description: "lunar project",
    dueDate: "17/02/2025",
    tasks: []
  },
  {
    id: 2,
    title: "project 2",
    description: "solar project",
    dueDate: "17/05/2025",
    tasks: []
  },
  {
    id: 3,
    title: "project 3",
    description: "earth project",
    dueDate: "17/01/2025",
    tasks: []
  }
]

function App() {

  const [activeProject, setActiveProject] = useState(null);
  
  const [isVisible, setIsVisible] = useState(false);
  
  const [projects, setProjects] = useState(mockProjects)

  function handleAddProject(action = true) {
    setIsVisible(action);
    
  }

  function handleSetActiveProjects(project){
    setActiveProject(project);
  }

  return (
    <div className="flex min-h-screen">
       <Sidebar projects={projects} handleAddProject={handleAddProject} handleSetActiveProjects={handleSetActiveProjects} activeProject={activeProject}/>

      { activeProject ? (
        // 1. Avoid Prop Drilling
        //  Component composition: composizione componenti + children
        <Main>
          <HeaderProject activeProject={activeProject} setProjects={setProjects} setActiveProject={setActiveProject}  />
          <TaskForm activeProject={activeProject} setProjects={setProjects} />
          <TaskList activeProject={activeProject} setProjects={setProjects}/>
        </Main> 
      ) : (
       <NoProject handleAddProject={handleAddProject} />
      )}

      {isVisible && <AddModal showModal={handleAddProject} setProjects={setProjects} setActiveProject={setActiveProject}></AddModal>}
       
    </div>
   
  )
}



export default App
