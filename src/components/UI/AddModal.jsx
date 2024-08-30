import { useEffect, useRef, useState } from "react";
import CloseIcon from "../Icons/CloseIcon";
import Button from "./Button";
import Label from "./Form/Label";


export default function AddModal({showModal,setProjects,setActiveProject}) {

    // Controlled components / elements (v-model di Vue ma in React)
    /**
     * useState ritorna 2 valori
     * 1- variabile che contine il valore attuale (variabile per lettura valore)
     * 2- funzione (setter della variabile 1)
     */
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [date,setDate] = useState("");


    function handleProject(){
        // console.log("title", title);
        // console.log("description", description);
        // console.log("date", date);

        // Validazione per i campi obbligatori
        if(!title.trim() || !description.trim() || !date.trim()){
            alert("missing date or incorrect");
            return;
        }

        // New Project Object
        const project = {
            id: Date.now(),
            title: title,
            description: description,
            dueDate: date,
            tasks: [""]
        }
        console.log(project);

        // settare il nuovo progetto nell'array dei progetti
        setProjects(prev => [...prev, project]);

        // Clean up campi modale
        setTitle("")
        setDescription("")
        setDate("")

        // Chiudere la modale
        showModal(false)
        // Set progetto attivo
        setActiveProject(project)

    }

    // reference to DOM html nodes
    const modal = useRef();

    // run something when component mount
    useEffect(()=>{
        // we use the Web API method here coz we cant see a backdrop in a dialog using the attribute open
        modal.current.showModal();
    }, []);



  return (
    <dialog
    // fired when user click the ESC button on keyboard
    onClose={() => showModal(false)}
        ref={modal} 
        className="w-full max-w-xl p-4 backdrop:bg-primary/70">
        <header className="flex justify-between mb-4">
            <h1 className="font-bold">Add New Project</h1>

            <form method="dialog">
                <button onClick={() => showModal(false)}><CloseIcon></CloseIcon></button>

            </form>
        </header>
        <div>
            <Label text="title" htmlFor="title" />
            {/* Controlled compoment */}
            <input className="w-full p-2 bg-black/15 placeholder-black border-b-2 placeholder:font-medium border-black/20 outline-0 focus:border-black/75" id="title" type="text" placeholder="add Project Title"
            value={title}
            onChange={(e) =>setTitle(e.target.value)}
            />
        </div>
        <div>
            <Label text="description" htmlFor="description" />
            <textarea className="w-full h-32 p-2 bg-black/15 placeholder-black border-b-2 placeholder:font-medium border-black/20 outline-0 focus:border-black/75" id="description" type="text" placeholder="project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div>
            <Label text="dueDate" htmlFor="due-date" />
            <input className="w-full p-2 bg-black/15 placeholder-black border-b-2 placeholder:font-medium border-black/20 outline-0 focus:border-black/75" id="due-date" type="date" 
             value={date}
             onChange={(e) => setDate(e.target.value)}/>
        </div>
        <div className="text-right pt-6">
            <Button onClick={handleProject}>Add Project</Button>
        </div>
    </dialog>
  )
}
