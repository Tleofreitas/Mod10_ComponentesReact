import './styles.css';
import CarImg from '../../assets/car.png';

export default function Card () {
    return (
        <div className='dsct-card'>
            <img src={CarImg} alt="Carro" />
            <h3>Lorem Ipsum dolor</h3>
        </div>
    );
}