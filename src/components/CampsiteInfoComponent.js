import React, { Component } from 'react';
//import { createPortal } from 'react-dom';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {

    // onCampsiteSelect(campsite) {
    //     this.setState({selectedCampsite: campsite});
    // }

    // renderSelectedCampsite(campsite){
    //     if (campsite) {
    //         return (
    //             <Card>
    //                 <CardImg top src={campsite.image} alt={campsite.name} />
    //                 <CardBody>
    //                     <CardTitle>{campsite.name}</CardTitle>
    //                     <CardText>{campsite.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         );
    //     }
    //     return <div />;
    // }

    renderCampsite(campsite){
        return (
        <div className="col-md-5 and m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
        );
    }

    renderComments(comments){
        if(comments){
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => 
                        <div key={comment.id}>
                        <div className="text-primary font-weight-bold">{comment.text}</div>
                        <div className="mb-3 font-italic">-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
                        </div>
                        )}
                </div>
            );
        }
        return <div />;
    }

    render() {
        if (this.props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderCampsite(this.props.campsite)}
                        {this.renderComments(this.props.campsite.comments)}
                    </div>
                </div>
            )
 
        }
        return <div />;
        // const directory = this.props.campsites.map(campsite => {
        //     return (
        //         <div key={campsite.id} className="col-md-5 m-1">
        //             <Card onClick={() => this.onCampsiteSelect(campsite)}>
        //                 <CardImg width="100%" src={campsite.image} alt={campsite.name} />
        //                 <CardImgOverlay>
        //                     <CardTitle>{campsite.name}</CardTitle>
        //                 </CardImgOverlay>
        //             </Card>
        //         </div>
        //     );
        // });

        // return (
        //     <div className="container">
        //         <div className="row">
        //             {directory}
        //         </div>
        //         <div className="col-md-5 m-1">
        //             {this.renderSelectedCampsite(this.state.selectedCampsite)}
        //         </div>
        //     </div>
        // );
    }
}

export default CampsiteInfo;