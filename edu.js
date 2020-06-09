window.onload = function () {
  const cont = document.getElementById("abc");
  const button = document.getElementById("add");
  const submit = document.getElementById("contact-submit");
  const content = document.getElementById("i");

  button.onclick = function () {
    cont.innerHTML += `   
    <div class="sections">
    <div style="display: inline-block;" class="user">
      <fieldset class="user" id="o">
        <input
          class="a"
          style="width: 5.2cm;"
          placeholder="Organization name"
          type="text"
          tabindex="5"
          required
        />
      </fieldset>
    </div>
    <div style="display: inline-block;"></div>
    <div style="display: inline-block;" class="user">
      <fieldset class="user">
        <input
          class="b"
          style="width: 5.2cm;"
          placeholder="Degree type"
          type="text"
          tabindex="5"
          required
        />
      </fieldset>
    </div>
    <div style="display: inline-block;" class="user">
      <fieldset class="user">
        <input
          class="c"
          style="width: 5.2cm;"
          placeholder="Study Program"
          type="text"
          tabindex="5"
          required
        />
      </fieldset>
    </div>

    <div style="display: inline-block;"></div>
    <div style="display: inline-block;" class="user">
      <fieldset class="user">
        <input
          class="d"
          style="width: 5.2cm;"
          placeholder="%Age/Cgpa(Optional)"
          type="text"
          tabindex="5"
        />
      </fieldset>
    </div>
    <fieldset id="oo" class="user">
      From
      <input
        class="e"
        placeholder="from date"
        type="date"
        tabindex="5"
        required
      />

      - To
      <input
        class="f"
        placeholder="from date"
        type="date"
        tabindex="5"
        required
      />

      <input class="g" type="radio" value="Present" /> Present
    </fieldset>

    <fieldset class="user">
      <textarea
        class="h"
        placeholder="Description(Optional)"
        tabindex="5"
      ></textarea>
    </fieldset>
  </div>
 
  
`;
  };
  submit.onclick = function (event) {
    event.preventDefault();
    var groups = document.getElementsByClassName("sections");
    var agroup = document.getElementsByClassName("a");
    var bgroup = document.getElementsByClassName("b");
    var cgroup = document.getElementsByClassName("c");
    var dgroup = document.getElementsByClassName("d");
    var egroup = document.getElementsByClassName("e");
    var fgroup = document.getElementsByClassName("f");
    var ggroup = document.getElementsByClassName("g");
    var hgroup = document.getElementsByClassName("h");
    for (let i = 0; i < groups.length; i++) {
      var a = agroup[i].value;
      var b = bgroup[i].value;
      var c = cgroup[i].value;
      var d = dgroup[i].value;
      var e = egroup[i].value;
      var f = fgroup[i].value;
      var g = ggroup[i];
      var h = hgroup[i].value;
      content.innerHTML += ` <br> Organization name : `;
      console.log(a);
      content.innerHTML += a;
      content.innerHTML += `<br>Degree type : `;
      console.log(b);

      content.innerHTML += b;
      content.innerHTML += `<br>Study Program : `;
      console.log(c);

      content.innerHTML += c;
      content.innerHTML += `<br>%Age/Cgpa : `;
      console.log(d);

      content.innerHTML += d;
      content.innerHTML += `<br>From : `;
      console.log(e);

      content.innerHTML += e;
      content.innerHTML += `   To : `;
      console.log(f);

      content.innerHTML += f;

      if (g.checked) {
        content.innerHTML += g;
      }

      content.innerHTML += `<br>Description : `;
      console.log(h);

      content.innerHTML += h;
    }
  };
};
