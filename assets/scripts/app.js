

import {ProjectList} from './ProjectList.js';




class App{
    static init()
    {
        let active=new ProjectList('active');
        let finished=new ProjectList('finished');
        active.setINstanceToAddToAnotherProjects(finished.addProject.bind(finished));
        finished.setINstanceToAddToAnotherProjects(active.addProject.bind(active));
    }
}
App.init();