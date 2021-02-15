# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* When the 1 button is clicked, dispatch gets called in order to change our state somehow.
* The state gets incremented by 1 because we have told the dispatch function to make use of addOne. Our reducer functions gets referenced and we have specified our 'case' to be ADD_ONE.
* Our function has access to these other functions because we've passed along reducer and dispatch through state, and manually imported addOne from our actions folder.
...

* TotalDisplay shows the total plus 1.
