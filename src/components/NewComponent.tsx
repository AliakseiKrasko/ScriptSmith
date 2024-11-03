type CarsTitle = {
    topCars: Array<CarTypeProps>;
}

type CarTypeProps = {
    manufacturer: string
    model: string
    year: number
    odometr: number
    condition: string


}


export const NewComponent = (props: CarsTitle) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>#</th>
                <th>Manufacturer</th>
                <th>Model</th>
                <th>Year</th>
                <th>Odometer</th>
                <th>Condition</th>
            </tr>
            </thead>
            <tbody>
            {props.topCars.map((car, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{car.manufacturer}</td>
                    <td>{car.model}</td>
                    <td>{car.year}</td>
                    <td>{car.odometr}</td>
                    <td>{car.condition}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};