
import { Link } from 'react-router-dom';


 function Phones(props) {
        const {phones} = props

    
    if (phones.length === 0) <p>Loading...</p>

    return(
        <div className= 'phones-list'>
            {phones.map((phone)=> {
                return (
                    <div key={phone.id}>
                        <Link to={`/${phone.id}`}>
                        <h2>{phone.name}</h2>
                        <img  width={'90px'}  src={`/images/${phone.imageFileName}`} alt={phone.name} />
                        </Link>
                    </div>
                )
                })
            }

        </div>
    )
 }


export default Phones