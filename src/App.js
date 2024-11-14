import {NewComponent} from "./components/NewComponent.tsx";
import {ListComponent} from "./components/ListComponent.tsx";
import {Button} from "./components/Button.tsx";
import {useState} from "react";
import {OnOf} from "./components/OnOf/OnOf.tsx";


function App() {

    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]


    const topCars = [
        {manufacturer: 'BMW', model: 'X5', year: 2008, odometr: 25000, condition: 'good'},
        {manufacturer: 'Mersedes', model: 'MLS', year: 2008, odometr: 25000, condition: 'good'},
        {manufacturer: 'Audi', model: 'Q7', year: 2008, odometr: 25000, condition: 'good'},
        {manufacturer: 'Ford', model: 'Kuga', year: 2008, odometr: 25000, condition: 'good'},
        {manufacturer: 'VW', model: 'Polo', year: 2008, odometr: 25000, condition: 'good'},
        {manufacturer: 'Subaru', model: 'Forester', year: 2008, odometr: 25000, condition: 'good'},
        {manufacturer: 'Isuzu', model: 'Dragon', year: 2008, odometr: 25000, condition: 'good'},
        {manufacturer: 'Opel', model: 'Kadet', year: 2008, odometr: 25000, condition: 'good'},
        {manufacturer: 'Renault', model: 'Fufel', year: 2008, odometr: 25000, condition: 'good'}
    ]

    const buttomFoo=(soscriber, age)=> {
        console.log(soscriber)
    }

    const buttomFoo2=(soscriber, age)=> {
        console.log(soscriber)
    }

    const buttomFoo3=(soscriber, age)=> {
        console.log(soscriber)
    }

    // let count = 0;
    let[count, setCount] = useState(0);

    const buttonCounter=()=>{
        setCount(count+1)
    }

    const buttonReset=()=> {
        setCount(count=0)
    }

    return (
        <div className="App">
            <NewComponent topCars={topCars}/>
            <ListComponent students={students}/>
            <Button name={'MyButton1'} callBack={()=>buttomFoo('Hello', 21)}/>
            <Button name={'MyButton2'} callBack={()=>buttomFoo2('HiHiHi', 41)}/>
            <Button name={'MyButton3'} callBack={()=>buttomFoo3('Hey', 32)}/>
            <h1>{count}</h1>
            <button onClick={buttonCounter}>+</button>
            <button onClick={buttonReset}>0</button>
            <OnOf on={true}/>
        </div>
    );
}

export default App;
