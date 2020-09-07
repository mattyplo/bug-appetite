import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

class BugList extends Component {
  state = {
    bugs: [
      { id: uuidv4(), name: 'Crickets'},
      { id: uuidv4(), name: 'Silk Worms'},
      { id: uuidv4(), name: 'Grasshoppers'},
      { id: uuidv4(), name: 'Tarantula'}
    ]
  }

  render() {
    const { bugs } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={() => {
            const name = prompt('Enter Bug');
            if (name) {
              this.setState(state => ({
                bugs: [...state.bugs, { id: uuidv4(), name }]
              }));
            }
          }}
        >Add Bug</Button>

        <ListGroup>
          <TransitionGroup className="bug-list">
            {bugs.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState(state => ({
                        bugs: state.bugs.filter(bug => bug.id !== id)
                      }));
                    }}
                  >&times;</Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
}

export default BugList;