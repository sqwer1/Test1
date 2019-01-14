import 'babel-polyfill';
import ReactDOM from "react-dom";


import React, {Component} from 'react';
import {connect} from 'react-redux';

var i = 0;

class Details extends Component {
constructor(props) {
    super(props);
    this.state = {
      countpay: null,
      name: [],
      number: []
    };
  };

countPay (item)
{
	var count = this.state.countpay;
	var name = this.state.name;
	var number = this.state.number;
	count = count+1;
	this.setState({countpay: count});
	for (var k = 0; k <= i;) {
	if (name[k] == item.title) {
		number[k] = number[k] + 1;
		this.setState({number: number});
		break;
	} else
	{
		if (k < i) {
			k = k + 1;
		} else {
				name[i] = item.title;
				number[i] = 1;
				this.setState({name: name});
				this.setState({number: number});
				i = i+1;
				break;
			}
	}
	}
}

deletePay (i)
{
	var count = this.state.countpay;
	var name = this.state.name;
	var number = this.state.number;
	if (count > 1) {
		count = count-1;
		this.setState({countpay: count});
	} else
	{
		count = null;
		this.setState({countpay: count});
	}
	
	if (number[i] > 1) {
		number[i] = number[i] - 1;
		this.setState({number: number}); 
	} else {
		number.splice (i, 1);
		name.splice (i, 1);
	}
}

	
	render () {
		
		if (!this.props.item) {
			return (<h2>Выберете товар</h2>);
		}
		return (
			<div>
				<h2>{this.props.item.title}</h2>
				<img src={this.props.item.url}/>
				<h2>Корзина:{this.state.countpay}</h2>
				<h3>
					{this.state.name.map( (x, i) => <div>{"товар: " + x + " количество: " + this.state.number[i] + " "} <button onClick={() => this.deletePay(i)}>Удалить товар</button></div>)}
				</h3>
				<button onClick={() => this.countPay(this.props.item)}>Добавить в корзину</button>
			</div>
		);
	}
}
	
function mapStateToProps (state) {
	return {
		item: state.active	
	};
}

export default connect (mapStateToProps)(Details);