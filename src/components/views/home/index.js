import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Grid, Row, Col} from 'react-flexgrid';
import {Link} from 'react-router';

const Home = React.createClass({
    render: function () {
        return (
            <div>
                {getNavigation(this.props.navigation)}
            </div>
        );
    }
});

function getNavigation(navigation) {
    return (
        navigation.map(sub => {
            return (
                <div key={"div-" + sub.id}>
                    <h2 key={"h2-" + sub.id}>{sub.title}</h2>

                    <Row key={"row-" + sub.id}>
                        {getPages(sub.pages)}
                    </Row>
                </div>
            )
        })
    );
}

function getPages(pages) {
    return (
        pages.map(page => {
            return(
                <Col key={"col-" + page.id} lg={4} sm={12} md={12}>
                    <Link key={"link-" + page.id} to={page.url}>
                        <Card key={"card-" + page.id} className="card" zDepth={2}>
                            <CardMedia key={"card-media-" + page.id}
                                overlay={<CardTitle title={page.title} subtitle={page.subtitle} />}
                            >
                                <img key={"img-" + page.id} src={page.picture}/>
                            </CardMedia>
                        </Card>
                    </Link>
                </Col>
            )
        })
    )
}

export default Home;