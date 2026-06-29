
Learnt that you could add into an existing html using the .innerHTML property.

LOC from the interactive session to buttress my point
```
const container = document.getElementById("container")

function renderImages() {

    let imgsDOM = ""

    for (let i = 0; i < imgs.length; i++) {

        imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`

    }

    container.innerHTML = imgsDOM;

}

renderImages()
```