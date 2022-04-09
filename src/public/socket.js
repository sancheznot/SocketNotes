const socket = io();

export const loadnotes = (callback) =>{
    socket.on("server:loadnotes", callback);
};

export const savenote = (title, description) =>{
    socket.emit("client:newnote", {
        title,
        description
    });
};

export const onnewNotes = (callback) => {
    socket.on("server:newnote", callback)
}

export const deletenote = id => {
    socket.emit("client:deletenote", id)
}