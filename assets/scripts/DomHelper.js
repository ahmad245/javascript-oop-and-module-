export class DomHelper{

    static clearEvent(element)
    {
        let clone=element.cloneNode(true);
        console.log(clone);
        
        element.replaceWith(clone);
        console.log(element);
        return clone;
    }
    static moveElement(FromSourceId,toDestination)
    {
        let source=document.getElementById(FromSourceId);
        let destination=document.querySelector(toDestination);
        destination.append(source);
    }
}

export function helper(){
 return 'hi!';
}

// export calss as default without name (you can one default export)
export default class{

}