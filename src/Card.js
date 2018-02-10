import React, { Component } from 'react';

class Card extends Component {
    render(){
        // using the term ternary operator
        const style = {
            color: this.props.isLiked ? 'chartreuse' : 'tomato',
        }
        const classes = this.props.isLiked ? 'fa fa-heart' : 'fa fa-heart-o';
        
        return (
          <div className='col-md-3'>
             <img src={this.props.src} alt=""/>
             <p>{this.props.caption}</p>
             <i onClick={this.props.onLike}
                className= {classes} style={style} 
                aria-hidden="true"></i>

          </div>

        );

    }
}


export default Card;