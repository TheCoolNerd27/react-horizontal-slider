import React from 'react';

import './Horizontal-menu2.css';
//import items from '../../Data.js';
//import MenuItems from '../../menu-items/menu-items';
import 'bootstrap/dist/css/bootstrap.min.css';
import items from './Data.js';
import $ from 'jquery';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class HorizontalMenu2 extends React.Component {

  constructor(props)
    {

      super(props);

      this.state={
        data:items,
      }
      this.scroll = this.scroll.bind(this)

    }

    scroll(direction){

      let far = $( `.main${this.props.cls}`).width()/2*direction;
      let pos = $(`.main${this.props.cls}`).scrollLeft() + far;


      $(`.main${this.props.cls}`).animate( { scrollLeft: pos }, 800)

  if((pos/far)>=3)
  {
    $(`.next2${this.props.cls}`).hide();

  }
  else {
    $(`.next2${this.props.cls}`).show();
  }


    }





  // componentDidMount()
  // {
  //   fetch("http://jsonplaceholder.typicode.com/photos")
  //   .then(response=> response.json())
  //   .then(photos=>this.setState({Data: photos }));
  //   // .then((photos)=> this.setState({Data:photos}));
  //   console.log(this.state.Data);
  //
  // }

  render(){
    
  return (


  <div className="container">


<div className="title">{`${this.props.title}`}</div>
<div className="row">

 <div className=" parent col-md-1">
<a className={`prev2${this.props.cls}`} onClick={this.scroll.bind(null,-1)}>&#10094;</a>
</div>
    <div className={`main${this.props.cls} col-md-10 row`}>{this.state.data
.map((item,idx)=>(
<div className="car" key={idx}><Card >
    <CardImg top className="image" src={item.url} alt="Card image cap" />
    <CardBody>
<CardTitle>{item.title}{item.name} {item.cost}</CardTitle>
      <CardSubtitle>{item.organizer}</CardSubtitle>
      <CardText>{item.loc}<br/>{item.date}</CardText>
      </CardBody>
  </Card>
</div>))}</div>
 <div className="col-md-1">
<a className={`next2${this.props.cls}`} onClick={this.scroll.bind(null,1)}>&#10095;</a>
 </div>
</div>

</div>



);
}
}

export default HorizontalMenu2;
