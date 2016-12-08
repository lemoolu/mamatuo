import app from 'app.config';

class AccoutListCtrl {
    constructor(neGrid) {
        this.name = 'AccoutListCtrl';
        this.__init__();
        console.log(neGrid);
    }

    __init__() {
        this.name = '3334344';
    }
}
AccoutListCtrl.$injector = ['neGrid'];

export default app.controller('accountListCtrl', AccoutListCtrl).name;
