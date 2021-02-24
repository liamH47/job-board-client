const testData = {
    tasks: {
        'task-1' : { id: 'task-1', content: 'take down the trash'},
        'task-2' : { id: 'task-2', content: 'watch tv'},
        'task-3' : { id: 'task-3', content: 'feed cat'},
        'task-4' : { id: 'task-4', content: 'call mom'}
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'to-do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
    },
    columnOrder: ['column-1'],
}
export default testData