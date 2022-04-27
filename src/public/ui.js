import { savenote, deletenote } from "./socket.js";


const noteform  = document.querySelector('#noteForm')
const notelist = document.querySelector('#notes')

const noteIU = note => {
    const div = document.createElement('div')
    div.innerHTML =  `
        <div class="animate__animated animate__wobble">
         <h1>${note.title} </h1>
        <p>${note.description}</p>
        </div> 
        <div>
            <button class="delete" data-id="${note._id}">Delete</button>
            <button class="edit">Edit</button>
        </div>
        `
    const btndelete = div.querySelector(".delete")
    const btnedit = div.querySelector('.edit')

    btndelete.addEventListener("click", (e) => deletenote(btndelete.dataset.id))
    btnedit.addEventListener("click", (e) => editnot(btnedit.dataset.id))
    return div
}

export const renderNotes = notes => { 
    notelist.innerHTML = ""
    notes.forEach(note => notelist.append(noteIU(note)))
}

export const onhandlesubmit = (e) => {
    e.preventDefault()    
    savenote(noteform['title'].value, noteform['description'].value)
};

export const appendnote = (note) =>{
    notelist.append(noteIU(note))
}