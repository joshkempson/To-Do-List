//Components start with a capital letter
import Button from './Button'

const Header = ({onAdd, showAdd}) => {
    

    return (
        <header className='header'>
            <h1>To-Do List</h1>
            <Button onClick={onAdd} text={showAdd ? 'Close' : 'Add'}/>
        </header>
    );
}

export default Header;