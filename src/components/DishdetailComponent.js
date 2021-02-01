import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const RenderDish = ({dish}) => {
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

const RenderComments= ({comments}) => {
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

const Dishdetail = (props) => {
  if (props.dish == null) {
    return (
      <div></div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <div  className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish}/>
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.dish.comments}/>
        </div>
      </div>  
    </div>
  );
}

export default Dishdetail;