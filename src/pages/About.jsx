// ----------------------------------------------------------------------
/* Imports */
import React from "react";

// ----------------------------------------------------------------------
/* Styles */
const styles = {
    heading: {
        backgroundColor: "#bfbfbf",
    }
};

// ----------------------------------------------------------------------
/* About Page */
// ----------------------------------------------------------------------
function About() {
    console.log("gkerng")
    return (
        <div>
            <h3 style={styles.heading}>Rentara - About</h3>
            <p>The Team of SPA App.</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>johndoe@example.com</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jane Doe</td>
                        <td>janedoe@example.com</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Bob Smith</td>
                        <td>bobsmith@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default About;