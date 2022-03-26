import React from 'react';
import "./Questions.css";

const Questions = () => {
    return (
      <div className="question-container">
        <div className="simple-question">
          <div className="question-cart">
            <h3>State vs Props react</h3>
            <p>
              State are mutable but props are immutable. We can define states in
              the component itself. On the other hand we can pass properties
              from parent components.The state is set and updated by the
              object.It can only be accessed or modified inside the component or
              by the component directly.Props are immutable so we cannot modify
              the props from inside the component.Props determine the view upon
              creation, and then they remain static. Both are accessible as
              attributes of the component class and compose components with a
              different representation.
            </p>
          </div>
          <div className="question-cart">
            <h3>How React Work?</h3>
            <p>
              We know that React is a JavaScript Library not a framework. It
              creates user interfaces in a predictable and efficient way using
              declarative code. You can use it to help build mobile apps or to
              build complex apps and also single page applications if you
              utilize it with other libraries. We use declarative code to create
              components, which is how we display information. Besides,
              components are reusable interface which allow you to split the app
              into separate blocks that act independently of each other. In
              React components are made of two main ingredients. These are State
              and props.
            </p>
          </div>
          <div className="question-cart">
            <h3>How useState Work?</h3>
            <p>
              UseState is a Hook that allows you to have state variables in
              functional components. We know that UseState in pure component. It
              takes any primitive like string, array, object etc. The update
              function does not update the value right way. If we use the
              previous value to update state, you must pass a function that
              receives the previous value and returns an updated value. If we
              use the same value as the current state to update the state, react
              will not trigger a re-render. UseState does not merge objects when
              the state is updated. It replaces them. UseState follows the same
              rules that all Hooks do.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Questions;