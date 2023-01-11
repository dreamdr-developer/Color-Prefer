const btn = document.querySelector('.changebtn');
const colorgrid = document.querySelector('.colorGrid')
const value = document.querySelector(".colorvalue")

btn.addEventListener('click', async()=>{
    chrome.storage.sync.get('color',({color})=>{
console.log('color:',color)
});
let [tab] = await chrome.tabs.query({active: true, currentWindow:true});
chrome.scripting.executeScript({
    target:{ tabId: tab.id },
    function: pickcolor,
}, async(injectionResults)=>{
    const [data] = injectionResults;

    if(data.result){
         const color = data.result.sRGBHex;
        colorgrid.style.backgroundColor= color;
        value.innerText = color;
try{
    await navigator.clipboard.writeText(color);

} catch(err){
    console.error(err)
}    
    }
}
);
});
async function pickcolor() {
console.log('script working');
try{
const eyeDropper = new EyeDropper();
return await eyeDropper.open();
} catch(err){
    console.error(err)
}   
 // chrome.storage.sync.get('color', ({ color }) => {
    //   document.body.style.backgroundColor = color;
    // });
  }
