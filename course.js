window.onload = function () {
  const cont = document.getElementById("aaa");
  const button = document.getElementById("add");
  const submit = document.getElementById("contact-submit");
  const content = document.getElementById("i");
  const cd = document.getElementById("cd");
  const ac = document.getElementById("ac");
  cd.onclick = function () {
    ac.innerHTML = `<div class="container">
    <form id="contact" action="" method="post">
      <h3
        style="
          text-align: center;
          font-weight: bold;
          color: rgb(241, 140, 7);
          text-shadow: 2px 2px 2px rgb(247, 7, 107);
        "
      >
        Courses
      </h3>
      <br />
      <div class="sections">
        <fieldset class="user" id="o">
          <input
            class="a"
            placeholder="Organization name"
            type="text"
            tabindex="5"
            required
          />
        </fieldset>

        <fieldset class="user">
          <input
            class="b"
            placeholder="Role.."
            type="text"
            tabindex="5"
            required
          />
        </fieldset>
        <fieldset id="oo" class="user">
          From
          <input
            class="c"
            placeholder="from date"
            type="date"
            tabindex="5"
            required
          />

          - To
          <input
            class="d"
            placeholder="from date"
            type="date"
            tabindex="5"
            required
          />
          <input class="e" type="radio" value="Present" /> Present
        </fieldset>

        <fieldset class="user">
          <textarea
            class="f"
            placeholder="Description(Optional)"
            tabindex="5"
          ></textarea>
        </fieldset>
      </div>
      <div id="aaa"></div>
      <button
        id="add"
        name="submit"
        type="submit"
        style="display: inline-block; width: 5cm;"
      >
        Add Organisation
      </button>
      <div id="o"><br /></div>
      <button
        style="font-size: 0.5cm;"
        name="submit"
        type="submit"
        id="contact-submit"
        data-submit="...Sending"
      >
        Submit
      </button>
      <div id="i" style="color: white; font-size: 0.5cm;"></div>
    </form>
  </div>`;
  };
  button.onclick = function () {
    console.log("hello");
    cont.innerHTML += `
    <div class="sections">
    <fieldset class="user" id="o">
    <input
      class="a"
      placeholder="Organization name"
      type="text"
      tabindex="5"
      required
    />
  </fieldset>

  <fieldset class="user">
    <input
      class="b"
      placeholder="Role.."
      type="text"
      tabindex="5"
      required
    />
  </fieldset>
  <fieldset id="oo" class="user">
    From
    <input
      class="c"
      placeholder="from date"
      type="date"
      tabindex="5"
      required
    />

    - To
    <input
      class="d"
      placeholder="from date"
      type="date"
      tabindex="5"
      required
    />
    <input class="e" type="radio" value="Present" /> Present
  </fieldset>

  <fieldset class="user">
    <textarea
      class="f"
      placeholder="Description(Optional)"
      tabindex="5"
    ></textarea>
  </fieldset>
</div>
    `;
  };
  submit.onclick = function (event) {
    event.preventDefault();
    const groups = document.getElementsByClassName("sections");
    const agroup = document.getElementsByClassName("a");
    const bgroup = document.getElementsByClassName("b");
    const cgroup = document.getElementsByClassName("c");
    const dgroup = document.getElementsByClassName("d");
    const egroup = document.getElementsByClassName("e");
    const fgroup = document.getElementsByClassName("f");

    for (let i = 0; i < groups.length; i++) {
      var a = agroup[i].value;
      var b = bgroup[i].value;
      var c = cgroup[i].value;
      var d = dgroup[i].value;
      var e = egroup[i];
      var f = fgroup[i].value;
      content.innerHTML += ` <br> Organization name : `;
      content.innerHTML += a;
      content.innerHTML += `<br>Role : `;
      content.innerHTML += b;
      content.innerHTML += `<br>From : `;
      content.innerHTML += c;
      content.innerHTML += ` To : `;
      content.innerHTML += d;

      if (e.checked) {
        content.innerHTML += e.value;
      }

      content.innerHTML += `<br> Description : `;
      content.innerHTML += f;
    }
  };
};
