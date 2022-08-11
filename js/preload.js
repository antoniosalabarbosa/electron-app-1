function defineVersion(idSelector, nameVersion){
    let element = document.getElementById(idSelector);
    if(element)
        element.innerText = nameVersion;
}

window.addEventListener('DOMContentLoaded', ()=>{
    let strongs = Array.from(document.querySelectorAll("strong[id^=v]"));

    let nameVersions = strongs.map(e => e.id.substring(1));
    
    for (version of nameVersions) {
        defineVersion(`v${version}`, process.versions[version.toLowerCase()]);
    }
});