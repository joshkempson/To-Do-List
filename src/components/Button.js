const Button = ( {buttonName, onClick}) => {
       
    return (
        <button onClick={onClick} className="btn">
            {buttonName}
        </button>
    );
}

export default Button;