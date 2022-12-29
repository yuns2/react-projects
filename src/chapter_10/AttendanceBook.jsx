import React from "react";

const students = [
    {
        name:"Yuns",
        id: 1
    },
    {
        name:"Steve",
        id: 2
    },
    {
        name:"Bill",
        id: 3
    },
    {
        name:"Jeff",
        id: 4
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    )
}

export default AttendanceBook;