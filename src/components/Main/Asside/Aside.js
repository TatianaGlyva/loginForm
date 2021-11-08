import React, {useState} from 'react';
import s from './asside.module.css'

const Users = [
    {
        name: 'Admin',
        email: 'admin@com',
        password: '123admin'
    },
    {
        name: 'Valera',
        email: 'ADMIN@com',
        password: '123ADMIN'
    },
    {
        name: 'Татьяна',
        email: 'glyvatatana@gmail.com',
        password: '123'
    }
];

localStorage.setItem('arrayUsers', JSON.stringify(Users));

const Aside = (props) => {

    const [details, setDetails] = useState({name: "", email: "", password: ""});
    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    let getUsers = JSON.parse(localStorage.getItem('arrayUsers'));

    const Login = (details) => {
        if (getUsers.some(el => el.name === details.name && el.email === details.email && el.password === details.password)) {
            setUser({
                name: details.name,
                email: details.email
            })
        } else {
            setError("details do not match")
        }
    };

    const Logout = () => {
        setUser({name: "", email: ""});
        setError("")
    };

    const renderUsersList = () => {
        return getUsers.map((el, index) => (<li key={index}>{el.name}</li>))
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        /*fetch('https://playwithpromise.herokuapp.com/api/order-review/last', {
            method: 'GET'
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
        });*/
        sessionStorage.setItem('authorizedUser', JSON.stringify([details]));
        Login(details);
        setDetails({name: "", email: "", password: ""})
    };

    return (
        <div>
            {
                (user.email !== "") ? (
                    <div className={s.formContainer}>
                        <h2 className={s.title}>Welcome, <span className={s.user}>{user.name}</span></h2>
                        <ul className={s.userList}>
                            {renderUsersList()}
                        </ul>
                        <button className={s.inputSubmit} onClick={Logout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <form onSubmit={handleFormSubmit} className={s.formContainer}>
                            <h2 className={s.title}>Login</h2>
                            {(error !== "") ? (<div>{error}</div>) : ""}
                            <div className={s.formGroup}>
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" id="name" className={s.inputForm}
                                       value={details.name}
                                       onChange={(e) => setDetails({...details, name: e.currentTarget.value})}/>
                            </div>
                            <div className={s.formGroup}>
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" id="email" className={s.inputForm}
                                       value={details.email}
                                       onChange={(e) => setDetails({...details, email: e.currentTarget.value})}
                                />
                            </div>
                            <div className={s.formGroup}>
                                <label htmlFor="password">Password:</label>
                                <input type="password" name="password" id="password" className={s.inputForm}
                                       value={details.password}
                                       onChange={(e) => setDetails({...details, password: e.currentTarget.value})}
                                />
                            </div>
                            <button className={s.inputSubmit}>Sign in</button>
                        </form>
                    </div>
                )
            }
        </div>
    );
};

export default Aside;