let submit=document.querySelector(".submit");

submit.addEventListener('click',()=>{

    var output=document.querySelector(".output");
    console.log(output);

    let imageurl=document.querySelector("#img").value;
    var generatedurl=`https://drive.google.com/uc?export=view&id=${imageurl}`;   

    const data={
        name: document.getElementById("name").value,
        img: generatedurl,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        address: document.getElementById("address").value
    };
    
    console.log(data);

    let newlist=document.createElement('div');
    newlist.classList.add('addData');
    
    newlist.innerHTML=`
      <img src="${generatedurl}" alt="image">
      <div class="NameContainer">${data.name}</div>
      <div class="EmailContainer">${data.email}</a><br>
      <div class="AgeContainer">${data.age}</div>
      <div class="AgeContainer">${data.address}</a>
    `
    console.log(newlist);

    output.appendChild(newlist);
   
    let input=document.querySelectorAll('input');

    input.forEach(input => {
        input.value = '';
      });

})

 