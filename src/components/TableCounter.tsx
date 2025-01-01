import {SuperButton} from './SuperButton';
import {useState} from 'react';

export const TableCounter = () => {
    const [counter, setCounter] = useState<number>(0);

    const AddHundler = () => {
        setCounter(counter + 1);
    }
    const SubHundler = () => {
        setCounter(counter - 1);
    }
    const ResetHundler = () => {
        setCounter(0);
    }
    return (
        <div>

            <h3>{counter}</h3>
            <SuperButton title={'add'} onClick={AddHundler} />
            <SuperButton title={'subtrakt'} onClick={SubHundler} />
            <SuperButton title={'reset'} onClick={ResetHundler} />
        </div>
    );
};

