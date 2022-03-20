
import React, { Fragment, useContext } from "react";
import { Col, Container, Row } from "reactstrap";
import Card from '../Common/Card';

import Header from '../Header/Header';
import './Products.css';

function Products(props) {
  
    console.log( props,props.history.location.state.ProductDetails)
   
    return (
        <Fragment>
            <Header />
            <div className='overflowdiv'>
                <Container id="containerpadding">
                    <div className="ptitle">
                        <h5 className="catprotilte">Sub-Categories</h5>
                    </div>
                    <Row>
                        {props.history.location.state.ProductDetails.map((p, i) => {

                            return <Col md={3} sm={12} className='mt-4'>
                                <Card
                                    prodname={p.strMeal}
                                   
                                    imgsource={p.strMealThumb}
                                >
                                   
                                   
                                </Card>
                            </Col>
                        })
                        }
                    </Row>
                </Container>
            </div>
         
        </Fragment>
    );
}

export default (Products);
