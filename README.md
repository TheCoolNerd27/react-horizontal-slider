# react-horizontal-slider

This is a horizontal slider-menu component for ReactJS where each item in the menu is a Card with image and a caption.



## Installation

##### Using NPM:

```
$ npm install react-horizontal-slider --save
```
##### Using yarn

```
$ yarn add react-horizontal-slider
```



##  Demo
You can find the  [Demo](https://thecoolnerd27.github.io/react-horizontal-slider/) here.
## Usage
```
 import HorizontalSlider from 'react-horizontal-slider'
 export default class App extends React.Component {
  //other logic
    render() {
	 return(
	  <HorizontalSlider
	     title="Menu 1"
	     data={items1}
	     height={300}
	     width={300}
	     id={1} 
	     />
	 //You can add Multiple Sliders if you want    
	<HorizontalSlider
	     title="Menu 2"
	     data={items2}
	     height={400}
	     width={350}
	     id={2} 
	     />
	 );
    }
 }
```

## Props

|Props       |Type        |Default     |Required |Description |
|--|--|--|--|--|
| height|Number  | 300  | No | The height of each induvidual Card in the menu  |
| width|Number|320| No|The width of each induvidual Card in the menu   |
|id|String|NA|Yes|When multiple sliders are used each should have a unique id|
|title|String|None|No|The title of a particular Slider.|
|data|Object|NA|Yes|The data to be displayed in the slider|

## Format of Data
| Key |Required|Description  |
|--|--|--|
| url |Yes  |The url of the image to be displayed.  |
| title | Yes |The title of the image.  |
| cost |No  |A cost of a particular item(for e-commerce type apps).|
| company |No  |Company a particular item is related to.  |
| desc | No |Description of the image.  |





