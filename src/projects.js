
let projectList;
if (localStorage.length === 0){
    projectList = []
}else{
    projectList = localStorage.getItem('savedProjectList').split(",")
}
class Projects {
    
    addToProjectList (name) {//adds project to list 
        console.log(projectList)
        projectList.push(name)
        localStorage.setItem('savedProjectList', projectList)
        return projectList
    }
    deleteFromProjectList (projectList,addProj){//deletes project from list
        let projectToDeleteIndex = projectList.indexOf(addProj.textContent);
        projectList.splice(projectToDeleteIndex,1);
        localStorage.setItem('savedProjectList', projectList)
        return projectList
    }
    

}
export {Projects,projectList}