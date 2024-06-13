import { Router } from "./Router";


class Launcher {

    private router: Router = new Router();
 
    public launchApp() {
        console.log('App started!');
        this.router.hundleRequest();
    }
}

new Launcher().launchApp();