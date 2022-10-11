import Accordion from 'react-bootstrap/Accordion';

function AllCollapseExample() {
    return (
        <Accordion className='container mt-5 w-70'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is the purpose of react router?</Accordion.Header>
                <Accordion.Body>
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. <br />
                    React Router is an API for React applications.React Router uses dynamic routing.
                    When we say dynamic routing, we mean routing that takes place as our app is rendering, not in a configuration or convention outside of a running app. That means almost everything is a component in React Router. <br />
                    React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.

                    By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How does Context API works?</Accordion.Header>
                <Accordion.Body>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br />

                    Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. <br />
                    React.createContext() is all we need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Describe the use of useRef hook in react?</Accordion.Header>
                <Accordion.Body>
                    useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current. <br />
                    The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. <br />
                    useRef is one of the standard hooks provided by React. It will return an object that you can use during the whole lifecycle of the component.

                    The main use case for the useRef hook is to access a DOM child directly. I’ll show exactly how to do that in another section.

                    Although accessing the DOM is the main use case, it doesn’t mean it’s the only one! useRef can also be very useful to hold a mutable value across different renders of your component.

                    For example, it’s often quite handy when using external libraries that weren’t made with React in mind.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AllCollapseExample;