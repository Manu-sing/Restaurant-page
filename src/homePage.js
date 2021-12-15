const homePage = (containerTag) => {


    //make body

    const bodyTitleContainer = document.createElement("div");
    bodyTitleContainer.id = "body-item";

    const title = document.createElement("h2");
    title.id = "rest-name";
    title.innerHTML = `${"Piccolo Mondo"}`
    bodyTitleContainer.appendChild(title);
    containerTag.appendChild(bodyTitleContainer);
    
    
    const bodyContainer = document.createElement("div");
    bodyContainer.id = "homepage-container";

    const div1 = document.createElement("div");
    div1.innerHTML = `<p><font size="+2"><strong>Opening hours</strong></font></p>
                      <p>Sunday: 10am - 9pm</p>
                      <p>Monday: 8am - 8pm</p>
                      <p>Tuesday: CLOSED</p>
                      <p>Wed: 8am - 8pm</p>
                      <p>hursday: 8am - 8pm</p>
                      <p>Friday: 8am - 8pm</p>
                      <p>Sunday: 10am - 9pm</p>`
    div1.id = "body-item1";

    const div2 = document.createElement("div");
    div2.innerHTML = `<p><font size="+2"><strong>Our Story</strong></font></p>
                      <p>Piccolo mondo came to life with the intention of recreating a small, cozy world where we can welcome our customers.</p>`
    div2.id = "body-item2";

    const div3 = document.createElement("div");
    div3.innerHTML = `<p><font size="+2"><strong>Address</strong></font></p><br>
                      <p>Durian Orchard</p>
                      <p>23 Palau Ubin Road</p>
                      <p>Singapore</p>`

    div3.id = "body-item3";

    bodyContainer.appendChild(div1);
    bodyContainer.appendChild(div2);
    bodyContainer.appendChild(div3);

   containerTag.appendChild(bodyContainer);


}

export default homePage;