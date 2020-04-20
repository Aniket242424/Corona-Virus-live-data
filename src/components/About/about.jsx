import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const About=()=>{
    return <div>
           <table className="table  table-hover table-info table-borderless ">
            <tr>
                <th>
                    Name
                </th>
                <td>
                    Aniket Mahangade
                </td>
            </tr>
            <tr>
                <th>
                    Profession
                </th>
                <td>
                    Full Stack Software developer
                </td>
            </tr>

            <tr>
                <th>
                    Technology Used
                </th>
                <td>
                    React and React-Hooks
                </td>
            </tr>

            <tr>
                <th>
                    API Service Provider
                </th>
                <td>
                https://covid19.mathdro.id/api
                </td>
            </tr>

        </table>
    </div>
}

export default About;