

### 6. Answering the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer: getElementById=>It finds one element by its id.It always returns a single element.

        getElementsByClassName => finds all elements with that class.It returns  HTML collection(like an array, but not exactly)

        querySelector => It finds the first element that matches CSS Selector(id, class, tag, attribute etc.)

        querySelectorAll => Finds all elements that matches CSS Selector.Returns a NodeList.

2. How do you **create and insert a new element into the DOM**?
Answer: Steps to insert a new element into the DOM
        i)Create an element
        let newDiv = document.createElement("div")

        ii)select the parent element where want to insert it
        let parent = document.getElementById("divParent")

        iii)Insert the new element into the DOM
        parent.appendChild(newDiv)

3. What is **Event Bubbling** and how does it work?
Answer:Event bubbling is when an element starts at child element and bubbles up to its parent elements in the DOM.
The event triggers on the inner most element first, then its parent and then its grand-parent,and so on.It can be stoped by event.stopPropagation().

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer:Event delegation means adding an event listener to a parent element instead of adding it to its children element individually.As events bubble up, the parents can catch events from its children.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer: preventDefault()=> i)It stops the default action of an element.
                          ii)It affects the element behaviour.


        stopPropagation() => i)It stops the event from bubbling up to parent elements.
                            ii)It affects the event flow.
