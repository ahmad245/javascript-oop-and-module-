import {DomHelper} from './DomHelper.js';
import {ProjectItem} from './ProjectItem.js';

export class ProjectList{
    projects=[];
    constructor(type)
    {
        this.type=type;
       
        let projectItems= document.querySelectorAll(`#${type}-projects ul li`);
        projectItems.forEach((el)=>{
            this.projects.push(new ProjectItem(el.id,this.switchProject.bind(this),this.type))
        })
    }
    setINstanceToAddToAnotherProjects(addToAnotherProjectsFromObject){
        // here addToAnotherProjectsFromObject is addProject passed from instance 
        this.addToAnotherProjects=addToAnotherProjectsFromObject;
    }

    addProject(project){
        this.projects.push(project);
        DomHelper.moveElement(project.id,`#${this.type}-projects ul`);
        project.update(this.switchProject.bind(this),this.type);
    }

    switchProject(projectId){
        this.addToAnotherProjects(this.projects.find(el=>el.id==projectId));
        this.projects.filter((el)=>el.id!=projectId);
    }
}