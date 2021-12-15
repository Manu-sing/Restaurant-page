const menuPage = (containerTag) => {
  
    //make body


    const bodyTitleContainer = document.createElement("div");
    bodyTitleContainer.id = "body-item";

    const title = document.createElement("h2");
    title.id = "menu";
    title.innerHTML = `${"Our Menu"}`
    bodyTitleContainer.appendChild(title);
    containerTag.appendChild(bodyTitleContainer);
    
    
    const bodyContainer = document.createElement("div");
    bodyContainer.id = "menupage-container";

    const div1 = document.createElement("div");
    div1.innerHTML = `<p style="text-align:center"><font size="+2"><strong>Breakkie</strong></font></p>
                      <p style="text-align:center">Grounding oatmeal</p>`
    div1.id = "body-item1";
    const imageCont1 = document.createElement("div");
    imageCont1.id = "image-cont1";
    div1.appendChild(imageCont1);

    const div2 = document.createElement("div");
    div2.innerHTML = `<p style="text-align:center"><font size="+2"><strong>Lunch</strong></font></p>
                      <p style="text-align:center">Protein bowl</p>`
    div2.id = "body-item2";
    const imageCont2 = document.createElement("div");
    imageCont2.id = "image-cont2";
    div2.appendChild(imageCont2);

    const div3 = document.createElement("div");
    div3.innerHTML = `<p style="text-align:center"><font size="+2"><strong>Dinner</strong></font></p>
                      <p style="text-align:center">Lentil Dahl</p>`
    div3.id = "body-item3";
    const imageCont3 = document.createElement("div");
    imageCont3.id = "image-cont3";
    div3.appendChild(imageCont3);

    bodyContainer.appendChild(div1);
    bodyContainer.appendChild(div2);
    bodyContainer.appendChild(div3);

    containerTag.appendChild(bodyContainer);


}

export default menuPage;