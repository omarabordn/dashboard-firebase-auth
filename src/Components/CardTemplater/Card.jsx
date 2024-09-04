import './Card.css'

const Card = ({ Icon, Title, Value }) => {
    return (
        <div className='card'>
            <Icon className='icon' />
            {Title && <h2 className='title' >{Title}</h2>}
            {Value && <h2 className='value' >{Value}</h2>}
        </div>
    )
}

export default Card
