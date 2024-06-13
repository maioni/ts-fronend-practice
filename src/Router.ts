

export class Router {

    public hundleRequest(){
        const location = this.getRoute();

    }

    private getRoute(){
        return window.location.pathname;
    }
}