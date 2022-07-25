function sharvinfunction() {
    const x = document.getElementById('sharvin')

    if(x.style.display == 'block') { 
        x.style = 'display:none;'

    }
    else {
        x.style = 'display:block;'
        x.innerHTML = 'welcome to the secret site'
    }

}

function charanfunction() {
const x = document.getElementById('charan')

if(x.style.display == 'none') { 
    x.style = 'display:block;'

}
else {
    x.style = 'display:none;'
}

}
