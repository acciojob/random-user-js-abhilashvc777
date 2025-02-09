//your code here
const img = document.querySelector("img")
const name = document.querySelector(".name")
const info  = document.querySelector(".additionalInfo")
const age = document.querySelector("[data-attr=age]")
const email = document.querySelector("[data-attr=email]")
const phone = document.querySelector("[data-attr=phone]")
const userBtn = document.querySelector(".getUser")
let ageValue = 0;
let emailValue = 0;
let phoneValue = 0;
const getData = async function(){
	const res = await fetch("https://randomuser.me/api/")
	const data = await res.json()
	const userData = data.results[0]
	 ageValue = userData.dob.age
	 emailValue = userData.email
	phoneValue = userData.phone
	img.src = `${userData.picture["large"]}`
	name.textContent = `${userData.name.first+" "+userData.name.last}`
}
getData()  
function ageHandeler(){
	info.textContent = `${ageValue}`
} 
function emailHandeler(){
	info.textContent = `${emailValue}`
} 
function phoneHandeler(){ 
	info.textContent = `${phoneValue}`
} 
age.addEventListener("click",ageHandeler)
email.addEventListener("click",emailHandeler)
phone.addEventListener("click",phoneHandeler)
userBtn.addEventListener("click",()=>{
	getData()  
	info.textContent = ""
})