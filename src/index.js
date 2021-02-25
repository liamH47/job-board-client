import React from 'react';
import ReactDOM from 'react-dom';
import testData from './testData'
import Column from './Column'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'

class App extends React.Component {
  
  state = testData

  onDragEnd = result => {
    
  }

  render(){
    return (
      <DragDropContext
        onDragStart
        onDragUpdate
        onDragEnd={this.onDragEnd}
      >
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
          return <Column key={column.id} column={column} tasks={tasks}/>
        })}
      </DragDropContext>
    )
  }
}


ReactDOM.render(<App />,document.getElementById('root'));



