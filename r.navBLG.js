// 'use strict';

class NavBarBLG extends React.Component {
    constructor(props) {
        super(props);
        this.args = {
            dark:false,
            mobile:false
        }
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i))
            this.args.mobile = true
    }
    render(){
        if (this.args.mobile && !this.args.dark)
            return (<div style={{position:"absolute"}}></div>)
        else if (this.args.mobile && this.args.dark)
            return (<div style={{position:"absolute"}}></div>)
        else if (!this.args.mobile && this.args.dark)
            return (<div style={{position:"absolute"}}></div>)
        else
            return (
                <div style={{
                    position:"fixed",
                    padding:"7vh",
                    width:"200%",
                    transform:"translateX(-100px)translateY(-100px)",
                    backgroundColor:"var(--main-color)"
                }}></div>
            )
    }
}


const domContainer = document.querySelector('#bootleg-nav-backdrop')
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(NavBarBLG));