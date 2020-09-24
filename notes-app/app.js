const notesUtils = require('./notes')
const yargs = require("yargs")
const chalk = require('chalk')
// const { demandOption } = require('yargs')
// const validator = require('validator')

// if (validator.isEmail(email)){
//     console.log(chalk.red.underline.inverse(email))
// }else { console.log(chalk.red('Not a valid email'))}

//Assign command argument
// const command = process.argv[2]

//Print appropriate command(s)
// if (command === "add"){
//     console.log(chalk.inverse.green('Adding note!'))
// } else if (command === "remove"){
//     console.log(chalk.inverse.red("Removing note"))
// }

// console.log(chalk.red.yellow.inverse(process.argv[3]))

//
//Customize yargs version
yargs.version('1.1.0')

// //Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: (argv) => {
        notesUtils.addNote(argv.title, argv.body)
    },
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
     },
    
})

// //Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notesUtils.removeNote(argv.title)
    },
    
})


yargs.command({
    command: 'list',
    describe: 'Listing Notes',
    handler: (argv) => {
        notesUtils.listNotes()
    },
    
})
//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: (argv) => {
        notesUtils.readNote(argv.title)
    },
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        }
    }
})


yargs.parse()
