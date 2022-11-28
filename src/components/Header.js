//Components start with a capital letter
import Button from './Button'

const Header = () => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button onClick={onClick} buttonName={"Add"}/>
        </header>
    );
}

export default Header;