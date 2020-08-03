
import { taskPopUpWindow } from "./displayController.js"
import { events } from "./eventController.js"
import { Projects } from "./projects.js"
import { Tasks } from "./todo.js"

let locallyStoredProjects = localStorage.getItem('savedProjectList')
let locallyStoredTasksList = JSON.parse(localStorage.getItem('savedTaskList'))

const load = events()

function localStorageLoad (){
    
    if(localStorage.getItem('savedProjectList')){
        let projectList = locallyStoredProjects.split(',')
        let projectFunctions = new Projects(projectList)
        load.projectLoad.loadProjectListOptions(projectList)
        load.projectLoad.renderProjectCard(projectFunctions,projectList)
    }
    if(JSON.parse(localStorage.getItem('savedTaskList'))){
        for (let index in locallyStoredTasksList){

            taskName.value = locallyStoredTasksList[index].taskName
            projectFolder.value = locallyStoredTasksList[index].projectFolder
            taskDescription.value = locallyStoredTasksList[index].taskDescription
            dueDate.value = locallyStoredTasksList[index].dueDate
            priority.value = locallyStoredTasksList[index].priority
            taskNotes.value = locallyStoredTasksList[index].taskNotes
            
            let taskValues = new Tasks (taskName.value,projectFolder.value,taskDescription.value, dueDate.value, priority.value, taskNotes.value);
            load.callDisplayFunctions(taskValues)
            checkMarkLoad()
            
        }
    }
}
function checkMarkLoad (){
   // console.log(JSON.parse(localStorage.getItem('inputChecked')))
}

localStorageLoad()
taskPopUpWindow()
