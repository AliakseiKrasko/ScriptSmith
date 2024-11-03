type StudentsList = {
    students: Array<StudentsTitle>;
}

type StudentsTitle = {
    id: number;
    name: string
    age: number
}

export const ListComponent = (props: StudentsList) => {

    return (
        <ul>
            {props.students.map((student, index) => (
                <li key={student.id}>
                    <span>{student.id}: </span>
                    <span>{student.name} </span>
                    <span>({student.age} age)</span>
                </li>
            ))}
        </ul>
    );
};

