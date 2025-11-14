// This file contains the JavaScript code for handling user interactions, form validation, and dynamic updates.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const phoneNumber = document.getElementById('phoneNumber');
    const altNumber = document.getElementById('altNumber');
    const email = document.getElementById('email');
    const gender = document.getElementById('gender');
    const age = document.getElementById('age');
    const address = document.getElementById('address');
    const doorNumber = document.getElementById('doorNumber');
    const city = document.getElementById('city');
    const district = document.getElementById('district');
    const state = document.getElementById('state');
    const pincode = document.getElementById('pincode');
    const submitButton = document.getElementById('submitButton');

    // Validate input fields
    function validateInput() {
        let isValid = true;
        const nameRegex = /^[a-zA-Z\s]*$/;
        const phoneRegex = /^[0-9]*$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!nameRegex.test(firstName.value)) {
            isValid = false;
            alert('First name should only contain letters.');
        }
        if (!nameRegex.test(lastName.value)) {
            isValid = false;
            alert('Last name should only contain letters.');
        }
        if (!phoneRegex.test(phoneNumber.value) || phoneNumber.value.length < 10) {
            isValid = false;
            alert('Phone number must be at least 10 digits.');
        }
        if (altNumber.value && (!phoneRegex.test(altNumber.value) || altNumber.value.length < 10)) {
            isValid = false;
            alert('Alternative number must be at least 10 digits if provided.');
        }
        if (!emailRegex.test(email.value)) {
            isValid = false;
            alert('Please enter a valid email address.');
        }
        if (age.value < 0 || age.value > 120) {
            isValid = false;
            alert('Please enter a valid age.');
        }
        if (!state.value) {
            isValid = false;
            alert('Please select a state.');
        }
        if (!district.value) {
            isValid = false;
            alert('Please select a district.');
        }
        if (!city.value) {
            isValid = false;
            alert('Please enter a city.');
        }
        if (!pincode.value || pincode.value.length !== 6) {
            isValid = false;
            alert('Pincode must be 6 digits.');
        }

        return isValid;
    }

    // Handle form submission
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (validateInput()) {
            form.submit();
        }
    });

    // Dynamic population of districts based on state selection
    state.addEventListener('change', function() {
        const selectedState = state.value;
        // Example: Fetch districts based on selected state (mock data)
        const districts = {
            'State1': ['District1', 'District2'],
            'State2': ['District3', 'District4']
        };
        district.innerHTML = '';
        if (districts[selectedState]) {
            districts[selectedState].forEach(function(districtName) {
                const option = document.createElement('option');
                option.value = districtName;
                option.textContent = districtName;
                district.appendChild(option);
            });
        }
    });
});

(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const card = $("#card");
  if (!card) { console.error("Card not found"); return; }
  console.log("Client loaded");

  // base rotation per panel
  const baseY = () => card.classList.contains("show-form") ? 180 :
                  card.classList.contains("show-login") ? 90 : 0;
  const renderBase = () => { card.style.transform = `rotateY(${baseY()}deg)`; };

  // cursor tilt
  const onMove = (e) => {
    const b = card.getBoundingClientRect();
    const px = (e.clientX - b.left) / b.width;
    const py = (e.clientY - b.top) / b.height;
    const rx = (py - 0.5) * -8;
    const ry = (px - 0.5) * 16;
    card.classList.add("tilt");
    card.style.transform = `rotateY(${baseY()}deg) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const onLeave = () => { card.classList.remove("tilt"); renderBase(); };
  card.addEventListener("mousemove", onMove);
  card.addEventListener("mouseleave", onLeave);

  // navigation
  const toSplash = () => { card.classList.remove("show-login","show-form"); card.classList.add("locked"); renderBase(); };
  const toLogin  = () => { card.classList.remove("show-form"); card.classList.add("show-login"); renderBase(); };
  const toForm   = () => { card.classList.remove("show-login"); card.classList.add("show-form"); renderBase(); };

  $("#goLogin")?.addEventListener("click", toLogin);
  $("#backToSplash")?.addEventListener("click", toSplash);
  card.classList.add("locked"); renderBase();

  // toast
  const toastEl = $("#toast");
  const toast = (m, ms=2200) => { if(!toastEl) return; toastEl.textContent=m; toastEl.classList.add("show"); setTimeout(()=>toastEl.classList.remove("show"), ms); };

  // login
  $("#loginForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    $("#loginError").textContent = "";
    const username = $("#username")?.value?.trim() || "";
    const password = $("#password")?.value?.trim() || "";
    if (username.length < 3) return ($("#loginError").textContent = "Username must be at least 3 characters.");
    if (password.length < 3) return ($("#loginError").textContent = "Password must be at least 3 characters.");
    try {
      const r = await fetch("/api/login", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({username,password}) });
      const data = await r.json();
      if (!r.ok || !data.ok) throw new Error(data.message || "Login failed");
      sessionStorage.setItem("token", data.token || "ok");
      card.classList.remove("locked");
      toForm();
      toast("Login successful");
    } catch (err) {
      $("#loginError").textContent = err.message || "Login failed";
    }
  });
  $("#logoutBtn")?.addEventListener("click", () => { sessionStorage.removeItem("token"); toSplash(); toast("Logged out"); });

  // dynamic locations
  const stateSel = $("#state"), districtSel = $("#district"), citySel = $("#city");
  let LOC = {};
  const loadLocations = async () => {
    const r = await fetch("/api/locations");
    LOC = await r.json();
    stateSel.innerHTML = `<option value="">Select state</option>` + Object.keys(LOC).map(s=>`<option value="${s}">${s}</option>`).join("");
    districtSel.disabled = true; citySel.disabled = true;
    districtSel.innerHTML = `<option value="">Select district</option>`;
    citySel.innerHTML = `<option value="">Select city</option>`;
  };
  stateSel?.addEventListener("change", () => {
    const s = stateSel.value;
    districtSel.disabled = !s; citySel.disabled = true;
    citySel.innerHTML = `<option value="">Select city</option>`;
    districtSel.innerHTML = s ? `<option value="">Select district</option>` + Object.keys(LOC[s]||{}).map(d=>`<option value="${d}">${d}</option>`).join("") : `<option value="">Select district</option>`;
  });
  districtSel?.addEventListener("change", () => {
    const s = stateSel.value, d = districtSel.value;
    citySel.disabled = !d;
    citySel.innerHTML = `<option value="">Select city</option>` + (LOC[s]?.[d]||[]).map(c=>`<option value="${c}">${c}</option>`).join("");
  });

  // restrictions
  const onlyLettersSpace = /^[A-Za-z\s]*$/;
  const limitName = (el, label) => el && el.addEventListener("input", () => {
    const raw = el.value;
    if (!onlyLettersSpace.test(raw)) el.value = raw.replace(/[^A-Za-z\s]/g,"");
    if (raw.length === 16) alert(`${label} cannot exceed 15 characters`);
    if (el.value.length > 15) el.value = el.value.slice(0,15);
  });
  limitName($("#firstName"), "First name");
  limitName($("#lastName"), "Last name");
  const digitsOnly = (el, max) => el && el.addEventListener("input", () => { el.value = el.value.replace(/\D/g,"").slice(0,max); });
  digitsOnly($("#phone"), 10);
  digitsOnly($("#altPhone"), 10);
  digitsOnly($("#pincode"), 6);
  $("#age")?.addEventListener("input", () => { const v = $("#age").value.replace(/\D/g,""); $("#age").value = v.slice(0,3); });

  // validation + submit
  const errEl = (id) => document.querySelector(`[data-err-for="${id}"]`);
  const showErr = (id, msg) => { const el = errEl(id); if (el) el.textContent = msg; };
  const clearErrors = () => $$("small.error[data-err-for]").forEach(el => (el.textContent = ""));
  $("#userForm")?.addEventListener("submit", async (e) => {
    e.preventDefault(); clearErrors();
    const gender = ($$('input[name="gender"]')).find(r=>r.checked)?.value || "";
    const body = {
      firstName: $("#firstName")?.value?.trim() || "",
      lastName: $("#lastName")?.value?.trim() || "",
      phone: $("#phone")?.value?.trim() || "",
      altPhone: $("#altPhone")?.value?.trim() || "",
      email: $("#email")?.value?.trim() || "",
      gender,
      age: $("#age")?.value?.trim() || "",
      address: $("#address")?.value?.trim() || "",
      doorNumber: $("#doorNumber")?.value?.trim() || "",
      state: $("#state")?.value || "",
      district: $("#district")?.value || "",
      city: $("#city")?.value || "",
      pincode: $("#pincode")?.value?.trim() || "",
      comments: $("#comments")?.value?.trim() || ""
    };
    try {
      const vr = await fetch("/api/validate",{ method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(body)});
      const vdata = await vr.json();
      if (!vr.ok || !vdata.ok) { Object.entries(vdata.errors||{}).forEach(([k,msg])=>showErr(k,msg)); toast("Please fix highlighted errors"); return; }
      const r = await fetch("/api/submit",{ method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(body)});
      const data = await r.json();
      if (!r.ok || !data.ok) throw new Error("Submit failed");
      toast("Submitted successfully");
      e.target.reset();
      $("#state").value = "";
      $("#district").innerHTML = `<option value="">Select district</option>`; $("#district").disabled = true;
      $("#city").innerHTML = `<option value="">Select city</option>`; $("#city").disabled = true;
      $$('input[name="gender"]').forEach(r => (r.checked = false));
    } catch (err) {
      toast(err.message || "Error submitting");
    }
  });

  // init
  loadLocations().catch(()=>console.error("Failed to load locations"));
})();