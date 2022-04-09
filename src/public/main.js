import { loadnotes, onnewNotes } from './socket.js'
import { onhandlesubmit, renderNotes, appendnote } from './ui.js'

onnewNotes(appendnote)
loadnotes(renderNotes)


const noteform  = document.querySelector('#noteForm');
noteform.addEventListener('submit', onhandlesubmit)