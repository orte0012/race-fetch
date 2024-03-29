let file1 = fetch('https://jsonbox.io/box_7ebd8cb0b8fb187873ef');
let file2 = fetch('https://jsonbox.io/box_82b5a4aa7a4a71abaa80');

Promise.race([file1, file2])
.then(result => {
    return result.json()
})
.then (files =>{ 
    files.forEach( file =>{
        process(file) })
})
.catch(error =>{
    console.log(error);
})

let  process = (prom) =>{
        
    if ( prom.type == "archer"){
        //selecting the id attribute element & inserting a given element
        let h1 = document.createElement('h1');
        h1.textContent = prom.type;
        let div = document.querySelector(".output");
        div.insertAdjacentElement('afterbegin',h1);

       

        prom.data.forEach( item => {
            //creating a paragraph tag for the type of data
            let h1 = document.createElement('h1');
            h1.textContent = "Id# " + item.id;
            //creating a list tag for data
            let li = document.createElement('li');
            li.textContent = "First name: " + item.first_name + " & " + "Last name: " + item.last_name;
            //inserting a given element node at a given position
            let ul = document.querySelector("ul");
            ul.insertAdjacentElement('beforeend', li);
            li.insertAdjacentElement('afterbegin',h1);
        }) 
        
    }else if (prom.type =="The Big Lebowski"){
        //selecting the id attribute element & inserting a given element
        let h1 = document.createElement('h1');
        h1.textContent = prom.type;
        let div = document.querySelector(".output");
        div.insertAdjacentElement('afterbegin',h1);

        prom.data.forEach( item => {
            let li = document.createElement('li');
            let text1 = document.createElement('h1');
            let text2 = document.createElement('p');
            text1.textContent = "Id: " + item.id;
            text2.textContent = "character: " + item.character;
            li.textContent = "actor: " + item.actor;
            let ul = document.querySelector("ul");
            ul.insertAdjacentElement('beforeend', li);
            li.insertAdjacentElement('afterbegin',text1);
            text1.insertAdjacentElement('afterend', text2);
        })
    }
           
}