import React from 'react';

class Test extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {callsCount: props.arg};
        this.buttonHandler = this.buttonHandler.bind(this);
        console.clear();
        console.log("constructor");
    }
    componentDidMount()
    {
        console.log("ComponentDidMount");
    }

    componentDidUpdate()
    {
        console.log("ComponentDidUpdate");
    }

    buttonHandler()
    {
        console.log("Fire");
        this.setState({callsCount: this.state.callsCount + 1});
    }

    static getDerivedStateFromProps(props, state)
    {
        //Как и конструктор инициализирует объект
        console.log("GetDerivedStateFromProps");
        return null;
        // return(
        //     {callsCount:props.arg}
        // )

    }

    render()
    {
        //https://stackoverflow.com/questions/62185425/why-is-console-log-logging-twice-in-react-js
        console.log("render 1");
        return(
            <>
                {
                    console.log("render 2")
                }
                <div>
                ********Нажми на кнопку - получишь результат +1********
                        <br/>
                    <button onClick={this.buttonHandler}>Start</button>
                </div>
                <div>
                    {
                        this.state.callsCount
                    }
                </div>                
            </>
        )
    }
}
export default Test;