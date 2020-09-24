 const fs = require('fs')
 const chalk = require('chalk')

const getNotes = () => ('Your notes ...')


const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note)=> note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.red.bold('Adding New: Title - ', title))
    }
    else {
        console.log(chalk.red.bold("Note title taken!!!"))
    }
    
}

//Remove a note
const removeNote = (title) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => (note.title !== title))
    if(duplicateNotes.length < notes.length){
        console.log(chalk.red.bold('Removing Note: Title - ', title))
        saveNotes(duplicateNotes)
    }
    else {
        console.log(chalk.red.bold("No note found!!!"))
    }
}

//List Notes
const listNotes = () => {
    const notes = loadNotes()
    // console.log(notes)
    console.log(chalk.bold.white.underline("\nYour Notes \n"))
    let count = 1
    notes.forEach((note) => {
        console.log(chalk.italic.red.bold.underline(`${count}.`,note.title))
        count++
})}

//Read Note
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note){
        console.log("\n")
        console.log(chalk.italic.red.bold.underline(note.title))
        console.log(note.body)
    }else {
        console.log("\n")
        console.log(chalk.italic.red.bold("Note not found!!"))
    }
    
}

// Save Notes
const saveNotes = (notes) => { 
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// Load Notes
const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}