import { savenote, deletenote } from "./socket.js";


const noteform  = document.querySelector('#noteForm')
const notelist = document.querySelector('#notes')

const noteIU = note => {
    const div = document.createElement('div')
    div.className = "d-inline-flex p-5 "
    const div2 = div.appendChild(document.createElement('div'))
    div2.className = "p-2"
    div2.innerHTML =  `
        <div class="animate__animated animate__wobble">
         
            
        <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
        <div class="card-header">${note.title}</div>
        <div class="card-body">
          <h4 class="card-title">${note.title}</h4>
          <p class="card-text">${note.description}</p>
        </div>
                
                
                
                
            
        </div> 

        <div>
            <button type="button" class="delete btn btn-danger" data-id="${note._id}">Delete</button>
            <button class="edit btn btn-info" >Edit</button>
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