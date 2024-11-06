type ButtonPropsType = {
    name: string;
    callBack: () => void;
}

export const Button = (props: ButtonPropsType) => {
    const buttomHundler = ()=> {
        props.callBack();
    }
    return (
        <div>
            <button onClick={buttomHundler}>{props.name}</button>
        </div>
    );
};

