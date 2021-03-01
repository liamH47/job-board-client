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
            title: 'Saved',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
        'column-2': {
            id: 'column-2',
            title: 'Submitted',
            taskIds: [],
        },
        'column-3': {
            id: 'column-3',
            title: 'Phone Interview',
            taskIds: [],
        },
        'column-4': {
            id: 'column-4',
            title: 'Rejected',
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
}
export default testData