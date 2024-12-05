import React from 'react';
class Hello extends React.Component
{
    constructor(props)
    {
        super(props);//super - базовый класс. В этой строке явно вызывается конструктор базового класса.
        this.state = {name: props.name}//This – это объект (ссылка на объект) для которого вызывается метод, 
                                       //в данном случае - constructor
        this.state = {status:false}
    }
    buttonHandler = () => 
        //this.state.setState(this.state => ({status : status === 'Остановлен' ? 'Запущен' : 'Остановлен'}));
        this.setState(state => ({status: !state.status}))
    render()
    {
        return(
            <>
                <div>Привет {this.props.name} из PROPS!</div>
                <div>Привет {this.state.name} из STATE!</div>
                <button onClick={this.buttonHandler}>{this.state.status ? 'Остановить' : 'Запустить'}</button>
                <div>{this.state.status ? 'Запущен' : 'Остановлен'}</div>
                <hr/>
            </>
        )
        //state
    }
}
export default Hello;