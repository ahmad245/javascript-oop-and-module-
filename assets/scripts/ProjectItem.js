// import function and class from file 
import {DomHelper,helper} from './DomHelper.js';

// impoet every thing from file as one object objetDom.DomHelper ,objetDom.helper
import * as objetDom from './DomHelper.js';

// import class default 
import ahmad from './DomHelper.js';
export class ProjectItem{
    constructor(id,methodToPassInEventListener,type)
    {
        this.type=type;
        this.id=id;
        this.methodToPassInEventListener=methodToPassInEventListener;
        this.switchElement();
    }

    switchElement()
    {
        let projectItem=document.getElementById(this.id);
        let switchBtn=projectItem.querySelector('button:last-of-type');
         switchBtn=DomHelper.clearEvent(switchBtn);
         switchBtn.textContent=this.type==='active' ? 'finish' : 'activate';
        switchBtn.addEventListener('click',this.methodToPassInEventListener.bind(null,this.id));
    }
    update(fn,type){
        this.type=type;
        this.methodToPassInEventListener=fn;
        this.switchElement();
    }
}