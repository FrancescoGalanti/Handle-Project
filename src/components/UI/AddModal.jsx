import { useEffect, useRef } from "react";
import CloseIcon from "../Icons/CloseIcon";
import Button from "./Button";
import Label from "./Form/Label";


export default function AddModal({showModal}) {
    function handleProject(){
        console.log("add new Project")
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
            <input className="w-full p-2 bg-black/15 placeholder-black border-b-2 placeholder:font-medium border-black/20 outline-0 focus:border-black/75" id="title" type="text" placeholder="add Project Title"/>
        </div>
        <div>
            <Label text="description" htmlFor="description" />
            <textarea className="w-full h-32 p-2 bg-black/15 placeholder-black border-b-2 placeholder:font-medium border-black/20 outline-0 focus:border-black/75" id="description" type="text" placeholder="project Description"></textarea>
        </div>
        <div>
            <Label text="dueDate" htmlFor="due-date" />
            <input className="w-full p-2 bg-black/15 placeholder-black border-b-2 placeholder:font-medium border-black/20 outline-0 focus:border-black/75" id="due-date" type="date" />
        </div>
        <div className="text-right pt-6">
            <Button onClick={handleProject}>Add Project</Button>
        </div>
    </dialog>
  )
}
