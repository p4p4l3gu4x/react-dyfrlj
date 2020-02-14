import React from 'react';
import './App.scss';
import { Login, Register } from './components/login';


type MyProps = {}
type MyState = {
    isLogginActive: boolean
}
class App extends React.Component<MyProps, MyState>{

    constructor(props:any) {
        super(props);
        this.state = {
            isLogginActive: true,
        }
    }
    current: any;
    rightSide: any;

    componentDidMount(): void {
        this.rightSide.classList.add("right");
    }

    changeState(){
        const { isLogginActive } = this.state;
        if(isLogginActive){
            this.rightSide.classList.remove("right");
            this.rightSide.classList.add("left");
        }else{
            this.rightSide.classList.add("right");
            this.rightSide.classList.remove("left");
        }
        this.setState((prevState) => ({ isLogginActive: !isLogginActive }));
    }

    render(){
        const { isLogginActive } = this.state;
        const current = isLogginActive ? "Register" : "Login";
        const currentActive = isLogginActive ? "register" : "login";
        return (
            <div className="App">
            <div className="login">
                <div className="container">
                    { isLogginActive && <Login containerRef={(ref: any) => this.current = ref}/>}
                    { !isLogginActive && <Register containerRef={(ref: any) => this.current = ref}/>}
                </div>
                <RightSide
                    current={current}
                    containerRef={(ref: any) => this.rightSide = ref}
                    onClick={() => this.changeState.bind(this)}/>
            </div>
        </div>
        );
    }
}

const RightSide = (props: any) => {
    return (
        <div className="right-side" ref={props.containerRef} onClick={props.onClick()}>
            <div className="inner-container">
                <div className="text">
                    {props.current}
                </div>
            </div>
        </div>
    );
}


export default App;
