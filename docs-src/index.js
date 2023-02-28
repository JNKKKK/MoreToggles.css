import "../src/moretoggles.scss"
// import "../output/moretoggles.min.css"
import "./index.scss"
import { Fragment, h, Component, render } from 'preact'

let styles = [{
    name: "IOS",
    classNames: ["mt-ios", "mt-ios-red", "mt-ios-blue"]
},
{
    name: "Android",
    classNames: ["mt-android", "mt-android-indigo", "mt-android-violet", "mt-android-pink", "mt-android-orange"]
},
{
    name: "IO Switch",
    classNames: ["mt-io", "mt-io-yellow", "mt-io-garden", "mt-io-navi", "mt-io-violet"]
},
{
    name: "Normal",
    classNames: ["mt-normal", "mt-normal-garden", "mt-normal-navi", "mt-normal-violet", "mt-normal-juice"]
},
{
    name: "Transparent",
    classNames: ["mt-transparent", "mt-transparent-navi", "mt-transparent-violet", "mt-transparent-blood", "mt-transparent-brown"]
},
{
    name: "Check",
    classNames: ["mt-check", "mt-check-garden", "mt-check-matte", "mt-check-fruit", "mt-check-pink"]
},
{
    name: "Yes No",
    classNames: ["mt-yesno", "mt-yesno-garden", "mt-yesno-matte", "mt-yesno-fruit", "mt-yesno-blush"]
},
{
    name: "Square",
    classNames: ["mt-square", "mt-square-garden", "mt-square-tomato", "mt-square-matcha", "mt-square-pink"]
},
{
    name: "Square 3d",
    classNames: ["mt-square3d", "mt-square3d-garden", "mt-square3d-tomato", "mt-square3d-matcha", "mt-square3d-blush"]
},
{
    name: "Emoji",
    classNames: ["mt-emoji-mood", "mt-emoji-gender", "mt-emoji-pet", "mt-emoji-mute", "mt-emoji-like"]
},
{
    name: "Star",
    classNames: ["mt-star", "mt-star-garden", "mt-star-tomato", "mt-star-pink", "mt-star-golden"]
},
{
    name: "Heart",
    classNames: ["mt-heart", "mt-heart-blush", "mt-heart-indigo", "mt-heart-pink", "mt-heart-golden"]
},
{
    name: "Icon Switch",
    classNames: ["mt-icon-music", "mt-icon-ring", "mt-icon-mic", "mt-icon-cam", "mt-icon-pin"]
}
]


class Logo extends Component {
    render () {
        return (
            <div className="header">
                <span className="text">M</span>
                <span className="toggle">
                    <span className="circle">o</span>
                    <span className="re">re</span>
                </span>
                <span className="text">Toggles.css</span>
            </div>
        )
    }
}

class SubHeader extends Component {
    render () {
        return (
            <p className="links">
                <a href="https://github.com/JNKKKK/MoreToggles.css">View on GitHub</a>
                &nbsp;/&nbsp;
                <a href="https://raw.github.com/JNKKKK/MoreToggles.css/master/output/moretoggles.min.css"
                    download="moretoggles.min.css" target="_blank">Download MoreToggles.css</a>
            </p>
        )
    }
}

let randomId = () => Math.floor(Math.random() * 100000);

class Toggle extends Component {
    render ({ className, style, disabled, checked }) {
        let id = randomId();
        return (
            <div className={className} style={style}>
                <input id={id} type="checkbox" checked={checked} disabled={disabled} />
                <label for={id}></label>
            </div>
        )
    }
}

class Showcase extends Component {
    render () {
        return (
            <div className="showcase">
                {styles.map(style => (
                    <div className="row-wrapper">
                        <div className="row">
                            {style.classNames.map(className => (
                                <div class="col">
                                    <Toggle className={className} disabled={false} checked={false} />
                                    <Toggle className={className} disabled={false} checked={true} />
                                    <span class="info-class">.{className}</span>
                                </div>
                            ))}
                            <div class="col">
                                <Toggle className={style.classNames[0]} disabled={true} checked={false} />
                                <Toggle className={style.classNames[0]} disabled={true} checked={true} />
                                <span class="info-class">disabled</span>
                            </div>
                            <div class="col">
                                <Toggle className={style.classNames[0]} style="font-size:9px;" disabled={false} checked={false} />
                                <Toggle className={style.classNames[0]} style="font-size:9px;" disabled={false} checked={true} />
                                <span class="info-class">.{style.classNames[0]}<br />font-size:9px</span>
                            </div>
                        </div>
                        <div className="name">{style.name}</div>
                    </div>
                ))}
            </div>
        )
    }
}

class App extends Component {
    render () {
        return (
            <Fragment>
                <Logo />
                <SubHeader />
                <Showcase />
            </Fragment>
        )
    }
}


const mountNode = document.getElementById('app')
render(<App />, mountNode, mountNode.lastChild)