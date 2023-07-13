import {
  Card, CardImg, CardImgOverlay, CardBody, CardSubtitle, CardText,
  CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import BookForm from './BookFormComponent';





function RenderMenuItem({ item, onClick }) {
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


const Home = (props) => {
  console.log(props.item)
  const home = props.items.map((item) => {
    return (
      <div style={{ marginBottom: '10px' }} key={item.id}>
        <RenderMenuItem item={item}
        />
      </div>
    );
  });

  return (
    <div class="body">
      <BookForm addItem={props.addItem}
      />

      <div class='body-item' style={{ marginBottom: '10px' }}>
        <div className='row' style={{ alignItems: 'center', }}>
          <div className='col-12 col-sm-2 '>
            <div class='body-item-date'>
              <h6 class='body-item-date-month'>December
              </h6>
              <h6 class='body-item-date-year'>2023
              </h6>
              <h3 class='body-item-date-day'>08
              </h3>
            </div>
          </div>
          <div className='col-12 col-sm-8'>
            <div class="body-item-name-course">React JS-TranLQ-StudentID:12345</div>
          </div>
          <div className='col-13 col-sm-2'>
            <h5 class="body-item-amount text-center">2023</h5>
          </div>


        </div>

      </div>

      {home}




    </div>

  );


}

export default Home;
