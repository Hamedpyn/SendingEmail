let $ = document ,
emailInput = $.querySelector('#email'),
subjectInput = $.querySelector('#subject'),
messageInput = $.querySelector('#message'),
sendBtn = $.querySelector('#sendBtn'),
resetBtn = $.querySelector('#resetBtn')

function disablingSendBtn(){
    sendBtn.style.disabled
}
disablingSendBtn()