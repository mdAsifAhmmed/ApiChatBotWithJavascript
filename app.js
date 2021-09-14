const bootBody = document.querySelector('#main');
const clickEvent = document.querySelector('.clickEvent');
const chatBody = document.querySelector('.chatBody');
const botName = document.querySelector('.botName');
const botImage = document.querySelector('.botImage')

clickEvent.addEventListener('click',()=>{
  bootBody.classList.toggle("active");
  chatBody.classList.toggle('botNameActive');
  botName.classList.toggle('botNameActive');
  botImage.classList.toggle('botImageActive');
})

function start() {
  let res_msg = document.createElement("div");
  res_msg.innerHTML = "Hello myslf Aco, How can I help you?";
  res_msg.setAttribute("class", "left");
  document.querySelector("#msg_area").appendChild(res_msg);
}

document.querySelector("#send").addEventListener("click", async (e) => {
  e.preventDefault();
  var req = document.querySelector("#text").value;

  if (req == undefined || req == "") {
  } else {
    let res = "";
    await axios
      .get(`https://api.monkedev.com/fun/chat?msg=${req}`)
      .then((data) => {
        res = JSON.stringify(data.data.response);
      });

    let msg_req = document.createElement("div");
    let msg_res = document.createElement("div");

    let Con1 = document.createElement("div");
    let Con2 = document.createElement("div");

    Con1.setAttribute("class", "msgCon1");
    Con2.setAttribute("class", "msgCon2");

    msg_req.innerHTML = req;
    msg_res.innerHTML = res;

    msg_req.setAttribute("class", "right");
    msg_res.setAttribute("class", "left");

    let message = document.querySelector("#msg_area");
    message.appendChild(Con1);
    message.appendChild(Con2);

    Con1.appendChild(msg_req);
    Con2.appendChild(msg_res);

    document.querySelector("#text").value = "";
    function scroll() {
      var scrollMsg = document.querySelector("#msg_area");
      scrollMsg.scrollTop = scrollMsg.scrollHeight;
    }
    scroll();
  }
});
