import { Link } from 'react-router-dom';

function RenderBook({ item, onClick }) {
    return (

        <div class='body-item'>
            <Link to={`/home/${item.id}`} style={{ textDecoration: 'none' }} className='text-link text-white' >


                <div className='row' style={{ alignItems: 'center' }}>
                    <div className='col-12 col-sm-2 '>
                        <div class='body-item-date'>
                            <h6 class='body-item-date-month'>
                                {item.date.toLocaleString('default', { month: 'long' })}
                            </h6>
                            <h6 class='body-item-date-year'>
                                {item.date.getFullYear()}
                            </h6>
                            <h3 class='body-item-date-day'>
                                {item.date.getDate()}
                            </h3>
                        </div>
                    </div>
                    <div className='col-12 col-sm-8'>
                        <div class="body-item-name-course">{item.title} </div>
                    </div>
                    <div className='col-13 col-sm-2'>
                        <h5 class="body-item-amount text-center">{item.amount} </h5>
                    </div>
                </div>
            </Link>
        </div>


    );
}

export default RenderBook;
