//your code here
let box = document.getElementById("evaluatedText");
// document.getElementById("wordCount").innerText = 'change'
box.addEventListener("input", (e)=>{
	
	 const text = box.value.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;
  document.getElementById("wordCount").innerText= wordCount;
})
