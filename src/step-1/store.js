
class UserStore {
    firstname = "";
    surname = ""
    isLogged = false;
    lastLoggedDate = null;

    login() {
        this.isLogged = true;
        this.lastLoggedDate = Date.now();
    }

    logout() {
        this.isLogged = false;
        this.lastLoggedDate = null;
    }

    changeName(firstname, surname) {
        this.firstname = firstname
        this.surname = surname
    }

    get getInitials() {
        if (!this.firstname || !this.surname) {
            return "NA"
        }
        return this.firstname[0].toUpperCase() + this.surname[0].toUpperCase();
    }

    notifyAboutLogin() {
        if (this.isLogged) {
            console.log(`Your friend ${this.firstname} ${this.surname} is online`)
        }
        else {
            console.log(`Your friend ${this.firstname} ${this.surname} is offline`);
        }
    }
}


export const observableUserStore = new UserStore();