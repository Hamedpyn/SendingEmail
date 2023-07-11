let $ = document,
    emailInput = $.querySelector('#email'),
    subjectInput = $.querySelector('#subject'),
    messageInput = $.querySelector('#message'),
    sendBtn = $.querySelector('#sendBtn'),
    resetBtn = $.querySelector('#resetBtn'),
    form = $.querySelector('form'),
    spinner = $.querySelector('#spinner')

// events

emailInput.addEventListener('blur', formValidation)
subjectInput.addEventListener('blur', formValidation)
messageInput.addEventListener('blur', formValidation)
sendBtn.addEventListener('click', loaders)
$.addEventListener('DOMContentLoaded', () => {
    disablingSendBtn()
})
resetBtn.addEventListener('click', () => {
    form.reset()
})
function disablingSendBtn() {
    sendBtn.disabled = true
}

function formValidation() {
    if (this.value.length >= 1) {
        if (this.type == 'email') {
            if (this.value.includes('@')) {
                this.style.borderBottomColor = 'green'
            } else {
                this.style.borderBottomColor = 'red'
            }
        } else {
            this.style.borderBottomColor = 'green'
        }
    } else {
        this.style.borderBottomColor = 'red'
    }
    if (subjectInput.style.borderBottomColor == 'green' && emailInput.style.borderBottomColor == 'green' && messageInput.style.borderBottomColor == 'green') {
        sendBtn.disabled = false
    }
}

function loaders(){
    spinner.setAttribute('style','display:block')
    setTimeout(()=>{
        spinner.style.display = 'none'
        spinner.setAttribute('src','assets/img/mail.gif')
    },3000)
}