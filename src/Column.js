import React, { Component } from 'react'
import styled from 'styled-components'
import Task from './Task'
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.section`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
`;

export default class Column extends Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {provided => (
                       <TaskList
                          innerRef={provided.innerRef}
                         {...provided.droppableProps}
                        >
                          {this.props.tasks.map((task, index) => <Task index={index} key={task.id} task={task} />)}
                          {provided.placeholder}
                       </TaskList>
                    )}
                </Droppable>
            </Container>
        )
    }
}
