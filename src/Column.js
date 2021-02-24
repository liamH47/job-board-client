import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.section``;
const Title = styled.h3``;
const TaskList = styled.div``;

export default class Column extends Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <TaskList>Tasks here </TaskList>
            </Container>
        )
    }
}
