const button = document.querySelector("#button");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
    // make a fetch request on click
    // fetch("https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    // // .then(response=> {
    // //     if (!response.ok) {
    // //         // 4xx or 5xx error
    // //         throw new Error("API issues.");
    // //     } 
    // //     return response.json()
    // // })
    // .then((data)=>{
    //     //console.log("abc"+ data);
    //     let img=document.createElement("img");
    //     img.setAttribute("src",`${URL.createObjectURL(data)}`)
    //     result.appendChild(img);
    //     console.log(result.appendChild(img));
    //     // if(result.appendChild(img)){
    //     //     console.log("page is fully loaded");
    //     // }
        
    //     // window.addEventListener("load", (event) => {
            
    //     //   });
    // })
    // .catch(error=> {
    //     console.error(error)
    // });
    let img=document.createElement("img");
    //img.setAttribute("src",`https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`);
    img.src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    img.setAttribute("id","imageRendaring");
    //result.appendChild(img);
    setTimeout(()=>{
        result.appendChild(img);
    },1000)
    //console.log(img)
    result.appendChild(img).addEventListener("load",(event)=>{
        let check1= document.querySelector("#imageRendaring")
        let check2 = check1.complete && check1.naturalHeight !==0;
        
        console.log(check2);
        alert("Image Loaded!");
        //console.log(event);
    })

});

// window.addEventListener("load", event => {
//     var image = document.querySelector('img');
//     var isLoaded = image.complete && image.naturalHeight !== 0;
//     alert(isLoaded);
//<img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="abc"></img>
// });