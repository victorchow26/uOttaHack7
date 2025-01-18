// Select DOM elements
const noteTitleInput = document.getElementById('note-title');
const noteContentInput = document.getElementById('note-content');
const addNoteButton = document.getElementById('add-note-btn');
const notesContainer = document.getElementById('notes');

// Load notes from localStorage on page load
let notes = JSON.parse(localStorage.getItem('notes')) || [];

// Render notes to the page
const renderNotes = () => {
    notesContainer.innerHTML = '';
    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
            <div class="note-title">${note.title}</div>
            <div class="note-content">${note.content}</div>
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        notesContainer.appendChild(noteElement);
    });
};

// Add a new note
const addNote = () => {
    const title = noteTitleInput.value.trim();
    const content = noteContentInput.value.trim();

    if (title && content) {
        notes.push({ title, content });
        localStorage.setItem('notes', JSON.stringify(notes));
        noteTitleInput.value = '';
        noteContentInput.value = '';
        renderNotes();
    } else {
        alert('Please fill out both the title and content fields.');
    }
};

// Delete a note
const deleteNote = (index) => {
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes();
};

// Event listeners
addNoteButton.addEventListener('click', addNote);
document.addEventListener('DOMContentLoaded', renderNotes);
