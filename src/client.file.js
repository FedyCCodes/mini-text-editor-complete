// file.js

/*const FILE_A = 'a.json'
const FILE_B = 'b.json'

const files = [FILE_A,FILE_B]
const contents = {}

window.api.receive("sendReadContent", (file_name,data) => {
    

    if (!files.includes(file_name)){
        throw "read file not in list"
    }
    
    contents[file_name] = data

    const read_files = Object.keys(contents)
    const all_is_read = files.every(a => {return read_files.includes(a)})

    if (all_is_read){
        do_stuff_after_all_read()
    }
})

function do_stuff_after_all_read(){
    console.log(contents)
}


window.api.send("askToRead", FILE_A)
window.api.send("askToRead", FILE_B)

const data_to_write = {important: "stuff to write"}
window.api.send("askToWrite", "to_write.json", JSON.stringify(data_to_write))*/

//const fs = require("fs");



