import {Link} from "react-router-dom";

const Registration = ({id, name, uname, cnumber, password, callback})=>{
    return (
        <>
        <h3>Registration</h3>
        <form>
            <table>
                <tr>
                   <div> <td>Name: <input type="text" name="name"></input></td></div>
            </tr>
            <tr>
                    <div><td>Username: <input type="text" name="uname"></input></td></div>
            </tr>
            <tr>
                    <div><td>PhoneNumber: <input type="text" name="cnumber"></input></td></div>
            </tr>
            <tr>
                    <div><td>Password: <input type="password" name="password"></input></td></div><br/>
            </tr>
            <tr><input type="submit" value="Register" /></tr>
            </table>
        </form>

        </>
    );
}

export default Registration;