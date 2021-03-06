import React from 'react';

import './index.css';
//import items from '../../Data.js';
//import MenuItems from '../../menu-items/menu-items';
import 'bootstrap/dist/css/bootstrap.min.css';


import 'simplebar/dist/simplebar.min.css';
import styled from 'styled-components';
import $ from 'jquery';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


class HorizontalSlider extends React.Component {

  constructor(props)
    {

      super(props);

      this.state={
        data:this.props.data,
        width:this.props.width?this.props.width:"300",
        height:this.props.height?this.props.height:"320",

      }
      this.scroll = this.scroll.bind(this)

    }

    scroll(direction){

      let far = $( `.menu${this.props.id}`).width()/2*direction;
      let pos = $(`.menu${this.props.id}`).scrollLeft() + far;


      $(`.menu${this.props.id}`).animate( { scrollLeft: pos }, 800)

  


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
  height:${this.state.height};`
return (

<div className="container">
<div className="title">{`${this.props.title}`}</div>
<div className="row">

 <div className=" parent col-md-1">
    <a className={`prev2 pv${this.props.id}`} href="#" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
</div>
   
    <div className={`main   menu${this.props.id} col-md-10 row`}>
    
      {this.state.data
.map((item,idx)=>(
<Car key={idx}><Card >
    <CardImg top style={{height:`${0.5*this.state.height}px`,width:`${0.9*this.state.width}px`}}  src={item.url} alt={`${item.title}`} />
    <CardBody>
      <CardTitle style={{ fontWeight: 'bold' }}>{item.title} {item.cost}</CardTitle>
      <CardSubtitle>{item.company}</CardSubtitle>
      <CardText key={1}>{item.desc}</CardText>
    </CardBody>
  </Card>
</Car>
))}

</div>

 <div className="col-md-1">
<a href="" className={`next2 nt${this.props.id}`} onClick={this.scroll.bind(null,1)}>&#10095;</a>
 </div>
</div>


</div>



);
}
}

export default HorizontalSlider;
