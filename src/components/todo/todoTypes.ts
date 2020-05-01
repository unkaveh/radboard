export interface TodoState {
    title: String;
    content: String;
    date: Date;
    completed: Boolean;
    error?: {
        message: string
    };
}

//========Action Types=========

export const TODO_CREATE_REQUEST = 'TODO_CREATE_REQUEST';
export const TODO_CREATE_SUCCESS = 'TODO_CREATE_SUCCESS';

export const TODO_QUERYALL_REQUEST = 'TODO_QUERYALL_REQUEST';
export const TODO_QUERYALL_SUCCESS = 'TODO_QUERYALL_SUCCESS';

export const TODO_QUERYSINGLE_REQUEST = 'TODO_QUERYSINGLE_REQUEST';
export const TODO_QUERYSINGLE_SUCCESS = 'TODO_QUERYSINGLE_SUCCESS';

export const TODO_UPDATE_REQUEST = 'TODO_UPDATE_REQUEST';
export const TODO_UPDATE_SUCCESS = 'TODO_UPDATE_SUCCESS';

export const TODO_DELETE_REQUEST = 'TODO_DELETE_REQUEST';
export const TODO_DELETE_SUCCESS = 'TODO_DELETE_SUCCESS';

interface CreateTodoRequestAction {
    type: typeof TODO_CREATE_REQUEST
    payload: {
        error: {
            message: string
        }
    }
}

interface CreateTodoSucessAction {
    type: typeof TODO_CREATE_SUCCESS
    payload: {
        title: String;
        content: String;
        date: Date;
        completed: Boolean;
    }
}

interface QueryAllTodoRequestAction {
    type: typeof TODO_QUERYALL_REQUEST
    payload: {
        error: {
            message: string
        }
    }
}

interface QueryAllTodoSucessAction {
    type: typeof TODO_QUERYALL_SUCCESS
    payload: {
        title: String;
        content: String;
        date: Date;
        completed: Boolean;
    }
}

export type TodoActionTypes = CreateTodoRequestAction | CreateTodoSucessAction | QueryAllTodoRequestAction | QueryAllTodoSucessAction