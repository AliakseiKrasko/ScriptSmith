import {NewComponent} from "./components/NewComponent.tsx";
import {ListComponent} from "./components/ListComponent.tsx";
import {logDOM} from "@testing-library/react";


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
        {manufacturer: 'BMW', model: 'X5', year: 2008, odometr: 25000 , condition: 'good'},
        {manufacturer: 'Mersedes', model: 'MLS', year: 2008, odometr: 25000 , condition: 'good'},
        {manufacturer: 'Audi', model: 'Q7', year: 2008, odometr: 25000 , condition: 'good' },
        {manufacturer: 'Ford', model: 'Kuga', year: 2008, odometr: 25000 , condition: 'good' },
        {manufacturer: 'VW', model: 'Polo', year: 2008, odometr: 25000 , condition: 'good' },
        {manufacturer: 'Subaru', model: 'Forester', year: 2008, odometr: 25000 , condition: 'good' },
        {manufacturer: 'Isuzu', model: 'Dragon', year: 2008, odometr: 25000 , condition: 'good' },
        {manufacturer: 'Opel', model: 'Kadet', year: 2008, odometr: 25000 , condition: 'good' },
        {manufacturer: 'Renault', model: 'Fufel', year: 2008, odometr: 25000 , condition: 'good' }
    ]

    const foot1= ()=>{
        console.log(100200);
    }
    const foot2= (num)=>{
        console.log(num)
    }

    return (
        <div className="App">
            <NewComponent topCars={topCars}/>
            <ListComponent students={students} />
            <button onClick={foot1}>1</button>
            <button onClick={()=>foot2(100200)}>2</button>
        </div>
    );
}

export default App;
