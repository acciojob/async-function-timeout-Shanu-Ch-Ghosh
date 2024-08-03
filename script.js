//your JS code here. If required.

let text = document.getElementById("text");
let delay =  document.getElementById("delay");
let btn =  document.getElementById("btn");
let output = document.getElementById("output");

btn.addEventListener("click", ()=>{
	async function asyncCall(){
		let res = await getPromise();
		console.log(res)
	}

	asyncCall();
})

function getPromise() {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(output.innerText= text.value);
		},delay.value)
	})
}