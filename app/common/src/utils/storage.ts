export class storage{
    constructor(){
        console.log('storage constructor');
    }

    add() {
        console.log('set the local storage');
        window.localStorage.setItem('test','test');
    }
    remove(){
        console.log('remove the local storage');
        window.localStorage.removeItem('test');
    }
}