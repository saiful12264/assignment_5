
##  Answer of the  questions 

#### Question 1 :What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer 1 :  
getElementById selects a single element by its unique ID.
  
  getElementsByClassName selects multiple elements with the same class and returns a live collection.  

querySelector selects the first element that matches a CSS selector.  

querySelectorAll selects all matching elements and returns a static NodeList.

#### Question 2 : How do you create and insert a new element into the DOM?

Answer 2:  
document.createElement() creates a new element.  

element.innerText or setAttribute() is used to add content or attributes.  

appendChild(), append(), prepend(), before(), or after() insert the element into the DOM.
#### Question 3:What is Event Bubbling and how does it work?

Answer 3:  
Event Bubbling is the process where an event starts from the target element and then propagates upward to its parent, grandparent, and so on up to the root.
#### Question 4 :What is Event Delegation in JavaScript? Why is it useful?

Answer 4 :  
Event Delegation is a technique in JavaScript where instead of adding event listeners to multiple child elements, we add a single event listener to their parent and handle events using event.target.
It is useful because it improves performance, reduces memory usage, and automatically works for dynamically added child elements.
#### Question 5 :What is the difference between preventDefault() and stopPropagation() methods?

Answer 5 :  
preventDefault() stops the default action of an element .
stopPropagation() stops the event from bubbling or capturing further to parent or ancestor elements.

