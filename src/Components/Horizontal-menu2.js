import React from 'react';

import './Horizontal-menu2.css';
//import items from '../../Data.js';
//import MenuItems from '../../menu-items/menu-items';
import 'bootstrap/dist/css/bootstrap.min.css';
import items from './Data.js';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import styled from 'styled-components';
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
        width:this.props.width?this.props.width:"300",
        height:this.props.height?this.props.height:"320",

      }
      this.scroll = this.scroll.bind(this)

    }

    scroll(direction){

      let far = $( `.menu${this.props.id}`).width()/2*direction;
      let pos = $(`.menu${this.props.id}`).scrollLeft() + far;


      $(`.menu${this.props.id}`).animate( { scrollLeft: pos }, 800)

  if((pos/far)>=3)
  {
    $(`.nt${this.props.id}`).hide();

  }
  else {
    $(`.nt${this.props.id}`).show();
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
    const Car=styled.div`
padding:15px;
  display:inline-block;
  width:${this.state.width};
  height:${this.state.height};
`
    
  return (


  <div className="container">


<div className="title">{`${this.props.title}`}</div>
<div className="row">

 <div className=" parent col-md-1">
<a className={`prev2 pv${this.props.id}`} onClick={this.scroll.bind(null,-1)}>&#10094;</a>
</div>
   
    <div className={`main   menu${this.props.id} col-md-10 row`}>
    
      {this.state.data
.map((item,idx)=>(
<Car key={idx}><Card >
    <CardImg top style={{height:`${0.5*this.state.height}px`,width:`${0.9*this.state.width}px`}}  src={item.url} alt={`${item.title}`} />
    <CardBody>
<CardTitle>{item.title}{item.name} {item.cost}</CardTitle>
      <CardSubtitle>{item.organizer}</CardSubtitle>
      <CardText>{item.loc}<br/>{item.date}</CardText>
      </CardBody>
  </Card>
</Car>))}

</div>

 <div className="col-md-1">
<a className={`next2 nt${this.props.id}`} onClick={this.scroll.bind(null,1)}>&#10095;</a>
 </div>
</div>

</div>



);
}
}

export default HorizontalMenu2;
