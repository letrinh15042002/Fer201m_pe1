import React, { Component } from 'react';
import Home from './BookListComponent.js';
import DishDetail from './ItemdetailComponent';
import { addComment, addItem } from '../redux/ActionCreators';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import BookForm from './BookFormComponent';


const mapStateToProps = state => {
  return {
    items: state.items,
    comments: state.comments,

  }
}

const mapDispatchToProps = dispatch => ({

  // addComment: (itemid, rating, author, comment) => {
  //   console.log('OK');
  //   return dispatch(addComment(itemid, rating, author, comment))
  // }
  addItem: (title, amount, date) => {
    console.log('OK');
    return dispatch(addItem(title, amount, date))
  }

});



class Main extends Component {

  constructor(props) {
    super(props);

    console.log(props.items)
  }

  onDishSelect(itemid) {
    this.setState({ selectedDish: itemid });
  }

  render() {


    const ItemWithId = ({ match }) => {
      return (
        <DishDetail item={this.props.items.filter((item) => item.id === match.params.itemid, 10)[0]}
          comments={this.props.comments.filter((comment) => comment.itemid === match.params.itemid, 10)}
          addComment={this.props.addComment}
        />

      );
    };



    return (
      <div>
        <BookForm addItem={this.props.addItem} />
        <div>
          <Switch>
            <Route exact path='/home' component={() => <Home items={this.props.items} />} />
            <Route path='/home/:itemid' component={ItemWithId} />

            <Redirect to="/home" />
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
