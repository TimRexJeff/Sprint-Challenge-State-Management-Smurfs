1. What problem does the context API help solve?

    In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The state of your whole application is stored in an object tree within a single `store`.
    The only way to change the state is to emit an `action`, an object describing what happened.
    To specify how the state tree is transformed by actions, you write pure `reducers`.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    State over the entire application vs being contained to a single component or group of components. The context for using one over the other would be the deciding factor.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.
    That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    Redux. It is utilized in large applications, which holds the greatest interest for me.