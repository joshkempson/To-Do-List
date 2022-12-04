import {motion} from 'framer-motion'

const Button = ( {text, onClick}) => {
       
    return (
        <motion.button onClick={onClick} className="btn" whileHover={{ scale: 1.05 }} whileTap={{scale: 0.95}}>
            {text}
        </motion.button>
    );
}

export default Button;