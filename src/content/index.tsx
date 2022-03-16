import Content from "./content";
import ReactDOM from "react-dom";

(() => {
    const container = document.createElement('div')
    const root = document.createElement('div')
    const styleEl = document.createElement('link')
    const shadowDOM = container.attachShadow?.({mode: 'closed'}) || container
    styleEl.setAttribute('rel', 'stylesheet')
    if (chrome.runtime.getManifest().content_scripts && chrome.runtime.getManifest().content_scripts) {
        // @ts-ignore
        chrome.runtime.getManifest().content_scripts[0].css.forEach(url => {
            styleEl.setAttribute('href', chrome.runtime.getURL(url))
            shadowDOM.appendChild(styleEl)
        })
    }


    shadowDOM.appendChild(styleEl)
    shadowDOM.appendChild(root)
    document.body.appendChild(container)
    ReactDOM.render(<Content/>, root);
})();
