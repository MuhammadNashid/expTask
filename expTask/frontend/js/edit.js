
const url=window.location.href
console.log(url);
const urlParams=new URLSearchParams(url.split("?")[1])
console.log(urlParams);
const id=urlParams.get('id')
console.log(id);

async function getDonors() {
    const response = await fetch(`http://localhost:4000/api/getdonor/${id}`);
    const donor = await response.json();
    console.log("hai");
    
    console.log(donor);

            
    document.getElementById('name').value = donor.name;
    document.getElementById('age').value = donor.age;
    document.getElementById('blood').value = donor.blood;
    document.getElementById('phone').value = donor.phone;
    document.getElementById('gender').value = donor.gender;
}
getDonors()


async function update(){
    name= document.getElementById('name').value,
    age= document.getElementById('age').value,
    blood= document.getElementById('blood').value,
    phone= document.getElementById('phone').value,
    gender= document.getElementById('gender').value
    console.log(name,age,blood,phone,gender);
    

    const res =await fetch(`http://localhost:4000/api/update/${id}`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name,age,blood,phone,gender})
    });

    console.log(res);
    
    const data=await res.json();
    res.status==201?alert(data.msg):alert(data.error)
    window.location.href= `../index.html`
};
