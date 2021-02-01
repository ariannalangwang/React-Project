import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
  }

  renderComments(comments) {
    const renderedComments = comments.map( (comment) => {
      return (
        <ul class="list-unstyled">
          <li>{comment.comment}</li>
          <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
        </ul>          
      );
    });
    return (
      <>
        <h4>Comments</h4>
        { renderedComments }
      </>
    );   
  }
    
  render() {
    const dish = this.props.dish;  // get the selected dish from MenuComponent
    if (dish == null) {
      return (
        <div></div>
      );
    }
    const comments = this.props.dish.comments;
    return (
      <div className="container">
        <div className="row">
          <div  className="col-12 col-md-5 m-1">
            { this.renderDish(dish) }
          </div>
          <div className="col-12 col-md-5 m-1">
            { this.renderComments(comments) }
          </div>
        </div>  
      </div>
    );
  }
}

export default Dishdetail;