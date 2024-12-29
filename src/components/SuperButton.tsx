type SuperButtonType = {
    title: string
    onClick: () => void
}

export const SuperButton = (props: SuperButtonType) => {
    return (
        <div>
            <button onClick={props.onClick}>{props.title}</button>
        </div>
    );
};

