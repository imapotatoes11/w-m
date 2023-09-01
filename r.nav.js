// 'use strict';

class NavBar extends React.Component {
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
            return (<div>adsfjl</div>)
        else if (this.args.mobile && this.args.dark)
            return (<div>dark_adsfjl</div>)
        else if (!this.args.mobile && this.args.dark)
            return (<div>dark_adsfasdfkljasdfjl</div>)
        else
            return (
                <div style={{
                    display:"flex",
                    padding:"2em",
                    margin:"0",
                    fontFamily:"'Cabin', Noto-sans-sc, sans-serif",
                    zIndex:"999 !important",
                    // position:"fixed",
                    backgroundColor:"var(--main-color-dark)",
                    /*position:fixed;background:white;width:100%;margin:0;
        padding-top:1em;
        padding-bottom:1em;top:0;*/
                    position:"fixed",
                    width:"100%",
                    top:"0",
                    paddingTop:"1em",
                    paddingBottom:"1em"
                }}>
                    {/*<h1 id={"hamburger"} style={*/}
                    {/*    {*/}
                    {/*        fontSize:"32px",*/}
                    {/*        padding:".2em .2em"*/}
                    {/*    }*/}
                    {/*}>≡</h1>*/}
                    <div onClick={()=>window.location.href!=="index.html"?window.location.href="index.html":null}
                    style={{cursor:"pointer"}}>
                        <img src={"assets/moma_min.png"} style={{maxWidth:"60px"}}></img>
                    </div>
                    {/*<div style={{backgroundColor:"var(--main-color-dark"}}>*/}
                    {/*    <h1 style={{*/}
                    {/*        fontSize:"32px",*/}
                    {/*        position:"fixed",*/}
                    {/*        margin:"auto auto",*/}
                    {/*        // left: "50%",*/}
                    {/*        top: "2.5%",*/}
                    {/*        // transform: "translate(-50%)",*/}
                    {/*        color:"var(--text-color-light)",*/}
                    {/*        cursor:"pointer",*/}
                    {/*        fontWeight:"bold",*/}
                    {/*    }} onClick={()=>{window.location.href="#"}}>*/}
                    {/*        MoMa多元文化音樂藝術教育中心*/}
                    {/*    </h1>*/}
                    {/*    <p style={{*/}
                    {/*        position:"fixed",*/}
                    {/*        margin:"auto auto",*/}
                    {/*        // left: "50%",*/}
                    {/*        color:"var(--text-color-light)",*/}
                    {/*        top: "8.5%"*/}
                    {/*    }}>*/}
                    {/*        Multicultural  Organization for Promoting Music and Art Education*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                    <div className={"nav-items"}>
                        <a className={"nav-item"} href={"#"}>三大赛项</a>
                        <a className={"nav-item"} href={"#"}>奖项设置</a>
                        <a className={"nav-item"} href={"#"}>年龄组别</a>
                        <a className={"nav-item"} href={"#"}>报名方式</a>
                        <a className={"nav-item"} href={"#"}>联系我们</a>
                        <a className={"nav-item"} href={"https://rickrollredirect.github.io"}>首页</a>
                    </div>
                </div>
            )
    }
}


const domContainer = document.querySelector('#nav-div')
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(NavBar));