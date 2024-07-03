import Main from "./components/Main"
import NoProject from "./components/NoProject"
import Sidebar from "./components/Sidebar"
import { useState } from "react"
import AddModal from "./components/UI/AddModal";



function App() {

  const [activeProject, setActiveProject] = useState(null);
  
  const [isVisible, setIsVisible] = useState(false);

  function handleAddProject(action = true) {
    setIsVisible(action);
    console.log("hello")
  }

  return (
    <div className="flex min-h-screen">
       <Sidebar handleAddProject={handleAddProject} />

      { activeProject ? (
        <Main /> 
      ) : (
       <NoProject handleAddProject={handleAddProject} />
      )}

      {isVisible && <AddModal showModal={handleAddProject}></AddModal>}
       
    </div>
   
  )
}



export default App
