
if (document.getElementById("btnModal")) {
  var modal = document.getElementById("tvesModal");
  var btn = document.getElementById("btnModal");
  var span = document.getElementsByClassName("close")[0];
  var body = document.getElementsByTagName("body")[0];

  btn.onclick = function () {
    modal.style.display = "block";
    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
  };
  span.onclick = function () {
    modal.style.display = "none";
    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      body.style.position = "inherit";
      body.style.height = "auto";
      body.style.overflow = "visible";
    }
  };
}

document.getElementById("select7").innerHTML = `
   <li><input type="radio" name="comando" id="qwerf" value="">
   <select name="" name="comando" id="iw">
       <option name="comando" id="Apagado" value="!R3,${val3},0">Apagado Remoto</option>
       <option name="comando" id="salida1" value="!R3,${val3},1"> Salida 1</option>
       <option name="comando" id="salida2" value="!R3,${val3},2">Salida 2 (buzzer)</option>
   </select>
   <select name="" id="iq">
       <option  id='ON' value="8" >ON</option>
       <option  id="OFF" value="9">OFF</option>
   </select>
</select>
</li>`;
var selector = document.getElementById("iq");
var val3 = selector[selector.selectedIndex].value;
var selector1 = document.getElementById("iw");
var val4 = selector1[selector1.selectedIndex].value;
console.log(val4);

if (document.getElementById("qwerf").checked) {
  const server04 = `http://192.168.1.135/goip/en/dosend.php?USERNAME=root&PASSWORD=root&smsprovider=1&goipname=Watchman&smsnum=${numero}&method=2&Memo=${encodeURIComponent(
    val4
  )}`;
  window.open(server04, "iframe1");
  console.log(val4);
}

////////////////////////////////////////////////////////////////////////////////////
var botton = document.getElementById("botton1");
botton.addEventListener("click", ejecutar);
function ejecutar() {
  var numero = document.getElementById("numero").value;
  //var re = new RegExp("^([0-9]{9,})$");
  // var result =re.test(numero)
  var veloinput = document.getElementById("veloinput").value;
  var buzzer = document.getElementsByName("comando")[17];
  if (buzzer.hasAttribute("value")) {
    buzzer.setAttribute(
      "value",
      `AT+GTSPD=gv300,2,0,${veloinput},1,30,2,0,20,5,0,,,,,,,,,,,FFFF$`
    );
  }

  var otra = document.getElementsByName("comando")[47];
  var idhola = document.getElementById("hola");
  var R0 = document.getElementById("gops").value;
  if (idhola.hasAttribute("value")) {
    idhola.setAttribute("value", `!R0R${R0}`);
    //console.log(R0)
    //console.log(idhola.value)
  }
  var idhola2 = document.getElementById("hola2");
  if (idhola2.hasAttribute("value")) {
    idhola2.setAttribute("value", `!R5R${R0}`);
  }
  var idhola3 = document.getElementById("hola3");
  if (idhola3.hasAttribute("value")) {
    idhola3.setAttribute("value", `!RJR${R0}`);
  }
  var idhola4 = document.getElementById("hola4");
  if (idhola4.hasAttribute("value")) {
    idhola4.setAttribute("value", `!RBR${R0}`);
  }

  var radio = document.getElementsByName("comando");
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      var comando0 = radio[i].value;
      var asd = radio[i].id;
      console.log(comando0);
    }
  }
  if (numero == "" /*|| !result)*/) {
    alert("Debe ingresar un valor en el campo");
  } else {
    const server3 = `http://api.clickatell.com/http/sendmsg?user=hunter&password=ETM8CXiF&api_id=3429677&to=18091484684&text=${encodeURIComponent(
      comando0
    )}`;
    const server200 = `http://192.168.1.11/default/en_US/send.html?u=admin&p=admin&l=6&n=${numero}&m=${encodeURIComponent(
      comando0
    )}`;
    if (document.getElementById("seer2").checked) {
      const server01 = `http://192.168.1.135/goip/en/dosend.php?USERNAME=root&PASSWORD=root&smsprovider=1&goipname=Watchman&smsnum=${numero}&method=2&Memo=${encodeURIComponent(
        comando0
      )}`;
      window.open(server01, "iframe1");
      //document.getElementById("demo").innerHTML = `<strong>${asd}</strong> al numero <strong>${numero}</strong>`
    } else if (document.getElementById("seer").checked) {
      var tuio = numero.split(",");
      var r;
      for (r in tuio) {
        (function (variable) {
          setTimeout(function retraso() {
            let bgt = tuio[variable];
            console.log(bgt);
            const server2 = `http://192.168.1.11/default/en_US/send.html?u=admin&p=admin&l=6&n=${bgt}&m=${encodeURIComponent(
              comando0
            )}`;
            window.open(server2, "iframe2");
          }, r * 8500);
        })(r);
      }
    } else if (document.getElementById("seer3").checked) {
      window.open(server03, "iframe1");
    }

    if (document.getElementById("add78").checked) {
      const personalizado = document.getElementById("add8").value;
      const server03 = `http://192.168.1.135/goip/en/dosend.php?USERNAME=root&PASSWORD=root&smsprovider=1&goipname=Watchman&smsnum=${numero}&method=2&Memo=${encodeURIComponent(
        personalizado
      )}`;
      window.open(server03, "iframe1");
      console.log(personalizado);
    }
  }
}

const comando5 = document.getElementsByName("comando");
for (y = 0; y < comando5.length; y++) {
  comando5[y].onclick = function () {
    var velocidad2 = document.getElementById("Velocidad");
    var x3 = document.getElementById("zxc");
    if (velocidad2.checked) {
      x3.style.display = "block";
    } else {
      x3.style.display = "none";
    }

    var numbg = document.getElementById("hola");
    var numbg2 = document.getElementById("hola2");
    var numbg3 = document.getElementById("hola3");
    var numbg4 = document.getElementById("hola4");

    var x1 = document.getElementById("zxc1");
    if (numbg.checked || numbg2.checked || numbg3.checked || numbg4.checked) {
      x1.style.display = "block";
    } else {
      x1.style.display = "none";
    }
  };
}

function chbx(obj) {
  var that = obj;
  if (document.getElementById(that.id).checked == true) {
    document.getElementById("one").checked = false;
    document.getElementById("two").checked = false;
    document.getElementById("three").checked = false;
    document.getElementById("four").checked = false;
    document.getElementById("five").checked = false;
    document.getElementById("six").checked = false;
    document.getElementById("seven").checked = false;
    document.getElementById(that.id).checked = true;
  }
}
/*var rtg = "http://192.168.1.135/goip/en/receive.php?USERNAME=root&PASSWORD=root"
       document.getElementById("c").innerHTML = `
           <iframe src=${rtg} width="600px" >
           </iframe>
           
   let outputEL = document.getElementById('output')
   let fileinputEL = document.getElementById('file')
   fileinputEL.addEventListener('change', onUp)
   fileinputEL.addEventListener('click', onclick)
   function onclick(event) {
       if (!columnsEL.value) {
           alert("hgfhgfghfhgfghfhgfhg")
           event.preventDefault()
       }
   }
   function onUp(evento) {
       const file = evento.target.files[0]
       const reader = new FileReader()
       reader.onload = (e) => {
           const filecontent = e.target.result
           const workbook = XLSX.read(filecontent, {
               type: 'binary'
           })
           workbook.SheetNames.forEach(sheetname => {
               var data = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetname])
               var json0 = JSON.stringify(data)
               let dado = data.map(data => `${data.numero}`);
               let olla = dado.join(",")
               numero.value += dado
               //outputEL.innerHTML += olla

           })
       }
       reader.onerror = (error) => {
           console.log("Error", error)
       }
       reader.readAsBinaryString(file)
   }

const comando6 = document.getElementsByName("comando")
   for (z = 0; z < comando6.length; z++) {
   }`*/
