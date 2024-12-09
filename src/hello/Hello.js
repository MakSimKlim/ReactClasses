import React from 'react';
class Hello extends React.Component
{
    constructor(props)
    {
        super(props);//super - базовый класс. В этой строке явно вызывается конструктор базового класса.
        this.state = {                  //This – это объект (ссылка на объект) для которого вызывается метод, 
            name: props.name,           //в данном случае - constructor                             
            status:false
        };
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
                
            </>
        )
        //state
    }
}
export default Hello;