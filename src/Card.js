import React, { Component } from 'react';

class Card extends Component {
    render(){
        return (
          <div className='col-md-3'>
             <img src={this.props.src} alt=""/>
             <p>Some things and stuff</p>
             <img src="https://via.placeholder.com/20x20" alt="" />

          </div>

        );

    }
}

export default Card;