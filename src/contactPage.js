

const contactPage = (containerTag) => {

    
    //make body

    
    
    const bodyTitleContainer = document.createElement("div");
    bodyTitleContainer.class = "body-item";
    containerTag.appendChild(bodyTitleContainer);
    
    const title = document.createElement("h2");
    title.id = "contact";
    title.innerHTML = `${"Contact us"}`
    bodyTitleContainer.appendChild(title);

    const bodyContainer = document.createElement("div");
    bodyContainer.id = "contactpage-container";

    const div1 = document.createElement("div");
    div1.innerHTML = `<p style="text-align:center"><font size="+2"><strong>Our Contacts</strong></font></p><br>
    <p>Phone: 666-333-555</p><br>
    <p>E-mail: piccolomondo@info.com</p>`
    div1.id = "body-item1";

    const div2 = document.createElement("div");
    div2.innerHTML = `<p style="text-align:center"><font size="+2"><strong>Write to us</strong></font></p>
    <p style="text-align:center">We would be happy to hear from you for any inquiry you might have:</p><br>
    <a href="https://www.theodinproject.com/">piccolomondo@info.com</a>`
    div2.id = "body-item2";

    const div3 = document.createElement("div");
    div3.innerHTML = `<p style="text-align:center"><font size="+2"><strong>Location</strong></font></p>`
    div3.id = "body-item3";
    const imageContainer = document.createElement("div");
    imageContainer.id = "image-container";
    div3.appendChild(imageContainer);

    bodyContainer.appendChild(div1);
    bodyContainer.appendChild(div2);
    bodyContainer.appendChild(div3);

    containerTag.appendChild(bodyContainer);


}

export default contactPage;