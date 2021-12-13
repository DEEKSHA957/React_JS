import React from 'react';
  
function Table() {
    return (
        <div style={{
            display: 'block', width: 700, padding: 30
        }}>
            <h4>ReactJS  Table Component</h4>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th >Name</th>
                        <th >Age</th>
                        <th >Country</th>
                        <th >Email</th>
                        <th >Contact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dummmy</td>
                        <td>25</td>
                        <td>USA</td>
                        <td>deek@gmail.com</td>
                        <td>9876543221</td>
                    </tr>
                    <tr>
                        <td>Raj</td>
                        <td>33</td>
                        <td>UK</td>
                        <td>greet@gmail.com</td>
                        <td>8928288224</td>
                    </tr>
                    <tr>
                        <td>Lucky</td>
                        <td>23</td>
                        <td>India</td>
                        <td>tcs@gmail.com</td>
                        <td>3466288224</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
  
export default Table;