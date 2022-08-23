import { useState } from "react";
import { observer } from "mobx-react-lite";

function LoggedBar({ lastLoggedDate }) {
    return (
        <div>Last logged time: {lastLoggedDate}</div>
    )
}

function LoggoutBar() {
    return (
        <div>You are not logged</div>
    )
}


const FirstStep = observer(({ store }) => {
    const [firstname, setFirstname] = useState(store.firstname);
    const [surname, setSurname] = useState(store.surname);

    const updateFirstname = (event) => {
        setFirstname(event.target.value);
    }
    const updateSurname = (event) => {
        setSurname(event.target.value);
    }
    const updateName = () => {
        store.changeName(firstname, surname);
    }

    const buttons = store.isLogged ? <button onClick={() => store.logout()}>Logout</button> : <button onClick={() => store.login()}>Login</button>

    return (
        <>
            <div>
                Hello {store.firstname} {store.surname} ({store.getInitials})
            </div>
            {store.isLogged ? <LoggedBar lastLoggedDate={store.lastLoggedDate} /> : <LoggoutBar />}

            <div>
                Firstname: <input type="text" onChange={updateFirstname} />
                Surname: <input type="text" onChange={updateSurname} />
                <button onClick={updateName}>Set</button>
            </div>

            {buttons}
        </>
    )
})

export default FirstStep