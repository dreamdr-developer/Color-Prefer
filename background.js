let color = 'red';

chrome.runtime.onInstalled.addListener (()=>{
    chrome.storage.sync.set({color})
})
//wn v install extension tn ^ code run the lister afyer setting the value axcess the value in another file js