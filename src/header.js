const header = () => {
    
    // make header
    function newLi(text, newId) {
        const navLi = document.createElement("button");
        navLi.id = newId
        navLi.innerHTML = text;
        return navLi;
        }
    
    const header = document.createElement("div");
    header.id = "header";
    
    const linksContainer = document.createElement("div");
    linksContainer.id = "links-container";
    header.appendChild(linksContainer);

    linksContainer.appendChild(newLi("Home", "button1"));
    linksContainer.appendChild(newLi("Menu", "button2"));
    linksContainer.appendChild(newLi("Contact", "button3"));

    const headerCont = document.getElementById("header");
    headerCont.appendChild(header);

}

export default header;