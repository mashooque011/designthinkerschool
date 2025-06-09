
// ----------------------------

const navbar  =  document.querySelector('.right-header-bx');
const menuBtn =  document.querySelector('.menu-bar');
const overlay =  document.querySelector('.overlay');
const closeNavBtn =  document.querySelector('.close-nav-btn');


menuBtn.addEventListener('click', () => {
    navbar.classList.add('navactive')
})

overlay.addEventListener('click', () => {
    navbar.classList.remove('navactive')
})

closeNavBtn.addEventListener('click', () => {
    navbar.classList.remove('navactive')
})


// https://script.google.com/macros/s/AKfycbwb9tZk_ioRMoPOUFnOftIPTejU8MF36akPK9P9uflXhGjKoRZZqsNkMgIChqy8O6HgXg/exec

// ------------------------

document.addEventListener('DOMContentLoaded', function () {
    const formBoxes = document.querySelectorAll('.registration-form-bx');
    const successBoxes = document.querySelectorAll('.successful-form-mesage-bx');
    const submitBtns = document.querySelectorAll('.formsubmit-btn');
    const regFormSec = document.querySelector('.reg-form-comp');
    const regFormBtns = document.querySelectorAll('.reg-form-active-btn');
    const closeFormBtn = document.querySelector('.close-form-btn');

    const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbwb9tZk_ioRMoPOUFnOftIPTejU8MF36akPK9P9uflXhGjKoRZZqsNkMgIChqy8O6HgXg/exec';

    // If already registered
    if (localStorage.getItem("registered") === "true") {
        formBoxes.forEach(form => form.style.display = "none");
        successBoxes.forEach(success => success.style.display = "flex");
    }

    // Open form
    regFormBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            regFormSec?.classList.add('regformactive');
        });
    });

    // Close form
    closeFormBtn?.addEventListener('click', () => {
        regFormSec?.classList.remove('regformactive');
    });

    // Click outside to close form
    regFormSec?.addEventListener('click', () => {
        regFormSec.classList.remove('regformactive');
    });

    // Prevent closing on form or success message click
    [...formBoxes, ...successBoxes].forEach(box => {
        box.addEventListener('click', e => e.stopPropagation());
    });

    // Handle form submission
    formBoxes.forEach(formBox => {
        formBox.querySelector('.formsubmit-btn')?.addEventListener('click', async function (e) {
            e.preventDefault();

            const name = formBox.querySelector('input[name="Name"], input[name="name"]').value.trim();
            const phone = formBox.querySelector('input[name="Phone"], input[name="phone"]').value.trim();
            const course = formBox.querySelector('.course-select-bx .selectText')?.innerText.trim();

         if (name.length < 4) {
    return alert("Name must be at least 4 characters.");
}

if (!/^[A-Za-z]+$/.test(name)) {
    return alert("Name must contain alphabets only, no numbers or special characters.");
}
            if (!/^\d{10}$/.test(phone)) return alert("Enter a valid 10-digit phone number.");
            if (!course || course.toLowerCase() === "course") return alert("Please select a course.");

            localStorage.setItem("registered", "true");

            try {
                await fetch(GOOGLE_SHEET_URL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, phone, course })
                });

                formBoxes.forEach(f => f.style.display = "none");
                successBoxes.forEach(success => success.style.display = "flex");
            } catch (error) {
                console.error("Error submitting form:", error);
                alert("There was an error. Please try again later.");
            }
        });
    });

    // Brochure download
    document.querySelectorAll('.download-brochure-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            if (localStorage.getItem("registered") === "true") {
                const link = document.createElement("a");
                link.href = "./pdf/dummy-pdf.pdf";
                link.download = "3DT-Brochure-2024.pdf";
                link.click();
            } else {
                alert("📩 Please register first to download the brochure.");
                regFormSec?.classList.add('regformactive');
            }
        });
    });

    // Study material downloads
    const studyMatDownloads = [
        { selector: '.download-btn', pdf: './pdf/dummy-pdf.pdf', name: 'UCEED-Question-Bank.pdf' },
        { selector: '.download-btn2', pdf: './pdf/dummy-pdf.pdf', name: 'CEED-Question-Bank.pdf' },
        { selector: '.download-btn3', pdf: './pdf/dummy-pdf.pdf', name: 'NID-Question-Bank.pdf' },
        { selector: '.download-btn4', pdf: './pdf/dummy-pdf.pdf', name: 'NIFT-Question-Bank.pdf' }
    ];

    studyMatDownloads.forEach(item => {
        document.querySelectorAll(item.selector).forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                if (localStorage.getItem("registered") === "true") {
                    const link = document.createElement("a");
                    link.href = item.pdf;
                    link.download = item.name;
                    link.click();
                } else {
                    alert("📚 Please register first to download this study material.");
                    regFormSec?.classList.add('regformactive');
                }
            });
        });
    });

});


document.querySelectorAll(".course-select-bx").forEach(selectBox => {
    const selectField = selectBox.querySelector(".selectfield-bx");
    const selectText = selectBox.querySelector(".selectText");
    const listBox = selectBox.querySelector(".lists-bx");
    const options = selectBox.querySelectorAll(".options");

    selectField.addEventListener("click", function (e) {
        e.stopPropagation();
        listBox.classList.toggle("selectionactive");
    });

    options.forEach(option => {
        option.addEventListener("click", function (e) {
            e.stopPropagation();
            selectText.textContent = this.textContent;
            listBox.classList.remove("selectionactive");
        });
    });

    document.addEventListener("click", function () {
        listBox.classList.remove("selectionactive");
    });
});


// document.querySelectorAll('.download-brochure-btn').forEach(btn => {
//     btn.addEventListener('click', function (e) {
//         e.preventDefault();

//         const isRegistered = localStorage.getItem("registered");

//         if (isRegistered === "true") {
//             // If registered, trigger PDF download
//             const link = document.createElement("a");
//             link.href = "./pdf/dummy-pdf.pdf"; // Replace with actual PDF path
//             link.download = "3DT-Brochure-2024.pdf"; // File name
//             link.click();
//         } else {
//             // Show form and alert
//             alert("📩 Please register first to download the brochure.");
//             document.querySelector('.reg-form-comp')?.classList.add('regformactive');
//         }
//     });
// });







// -----------------------------

// const regFormSec =  document.querySelector('.reg-form-comp');
// const regFormBtn  = document.querySelector('.reg-form-active-btn');
// const submitFormBtn  = document.querySelector('.formsubmit-btn');
// const successmesagebx =  document.querySelector('.successful-form-mesage-bx');
// const regFormBx =  document.querySelector('.registration-form-bx-popup');
// const closeFormBtn  =  document.querySelector('.close-form-btn');

// closeFormBtn.addEventListener('click', function(){
//     regFormSec.classList.remove('regformactive')
// })


// regFormBtn.addEventListener("click", function(){  
//     regFormSec.classList.add('regformactive')

// })

// submitFormBtn.addEventListener('click', function(){
// regFormBx.style.display = "none";
// successmesagebx.style.display = 'flex';

 
// })

// regFormSec.addEventListener('click', () => {
//     regFormSec.classList.remove('regformactive')

// })

// successmesagebx.addEventListener('click', (e) => {
//     e.stopPropagation()
// })
// regFormBx.addEventListener('click', (e) => {
//     e.stopPropagation()
// })

  

// ====================================

  // Logo arrays
  const logos1 = [
    './images/comp-logo-1.png',
    './images/comp-logo-2.png',
    './images/comp-logo-3.png',
    './images/comp-logo-4.png',
    './images/comp-logo-5.png',
    './images/comp-logo-6.png',
    './images/comp-logo-7.png',
    './images/comp-logo-8.png',

  ];

  const logos2 = [
     './images/comp-logo-4.png',
    './images/comp-logo-5.png',
    './images/comp-logo-2.png',
    './images/comp-logo-8.png',
    './images/comp-logo-1.png',
    './images/comp-logo-3.png',
    './images/comp-logo-6.png',
    './images/comp-logo-7.png',
  ];

  const logos3 = [
    './images/comp-logo-4.png',
    './images/comp-logo-8.png',
    './images/comp-logo-5.png',
    './images/comp-logo-1.png',
    './images/comp-logo-3.png',
    './images/comp-logo-7.png',
    './images/comp-logo-2.png',
    './images/comp-logo-6.png',
  ];

  // Slider 1 - Scroll UP
  function createSlider1() {
    const slider = document.getElementById('logoSlider1');
    const track = document.createElement('div');
    track.className = 'slider-inner-track';
    slider.appendChild(track);

    const allLogos = [...logos1, ...logos1];

    allLogos.forEach((logo, index) => {
      const item = document.createElement('div');
      item.className = 'slider-item';

      const wrap = document.createElement('div');
      wrap.className = 'slider-img-wrap';

      const img = document.createElement('img');
      img.src = logo;
      img.alt = `Logo ${index + 1}`;

      wrap.appendChild(img);
      item.appendChild(wrap);
      track.appendChild(item);
    });

    let y = 0;
    const speed = 0.9;

    function animate() {
      const resetPoint = track.scrollHeight / 2;
      y += speed;
      if (y >= resetPoint) y = 0;
      track.style.transform = `translateY(${-y}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }

  // Slider 2 - Scroll DOWN
 function createSlider2() {
    const slider = document.getElementById('logoSlider2');
    const track = document.createElement('div');
    track.className = 'slider-inner-track';
    slider.appendChild(track);

    const allLogos = [...logos2, ...logos2];

    allLogos.forEach((logo, index) => {
      const item = document.createElement('div');
      item.className = 'slider-item';

      const wrap = document.createElement('div');
      wrap.className = 'slider-img-wrap';

      const img = document.createElement('img');
      img.src = logo;
      img.alt = `Logo ${index + 1}`;

      wrap.appendChild(img);
      item.appendChild(wrap);
      track.appendChild(item);
    });

    let y = 0;
    const speed = 0.7;

    function animate() {
      const resetPoint = track.scrollHeight / 2;
      y += speed;
      if (y >= resetPoint) y = 0;
      track.style.transform = `translateY(${-y}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }

  // Slider 3 - Scroll UP
  function createSlider3() {
    const slider = document.getElementById('logoSlider3');
    const track = document.createElement('div');
    track.className = 'slider-inner-track';
    slider.appendChild(track);

    const allLogos = [...logos3, ...logos3];

    allLogos.forEach((logo, index) => {
      const item = document.createElement('div');
      item.className = 'slider-item';

      const wrap = document.createElement('div');
      wrap.className = 'slider-img-wrap';

      const img = document.createElement('img');
      img.src = logo;
      img.alt = `Logo ${index + 1}`;

      wrap.appendChild(img);
      item.appendChild(wrap);
      track.appendChild(item);
    });

    let y = 0;
    const speed = 1;

    function animate() {
      const resetPoint = track.scrollHeight / 2;
      y += speed;
      if (y >= resetPoint) y = 0;
      track.style.transform = `translateY(${-y}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }

  // Call all 3 separately
  createSlider1();
  createSlider2();
  createSlider3();

// --------------------------------------

const faqBx  =  document.querySelectorAll('.faq-bx');

for(let i = 0; i <= faqBx.length - 1; i++){
    faqBx[i].addEventListener("click", function(){
        for(let j = 0; j <=  faqBx.length - 1; j++){
            faqBx[j].classList.remove('faqactive')
        }

            faqBx[i].classList.add('faqactive')

    })
}

// ----------------------------------

const courseSelect =  document.querySelector('.course-field-btn');
const couseTextField =  document.querySelector('.course-text');
const courseOptions =  document.querySelectorAll('.course-option');
const courseLists =  document.querySelector('.course-lists');


courseSelect.onclick = function(){
        courseLists.classList.toggle('courseactive');

}

for(courseOption of courseOptions){
    courseOption.onclick = function(){
        couseTextField.innerHTML =  this.textContent;
        courseLists.classList.toggle('courseactive');
    }
}


const filterBtn  =  document.querySelectorAll('.filter-btn');
const designRes =  document.querySelectorAll('.design-resource-grid');

for(let i = 0; i <= filterBtn.length - 1; i++){
    filterBtn[i].addEventListener("click", function(){
        for(let j = 0; j <=  filterBtn.length - 1; j++){
            filterBtn[j].classList.remove('filteractive')
        courseLists.classList.remove('courseactive');

        }

            filterBtn[i].classList.add('filteractive')
        courseLists.classList.remove('courseactive');

        let dataFilter =  this.getAttribute('data-filter');

        for(let k = 0; k <= designRes.length - 1; k++){
            if(dataFilter === designRes[k].getAttribute('data-item')){
                designRes[k].classList.add('designcourseactive')
            }else{
                designRes[k].classList.remove('designcourseactive')

            }
        }



    })
}

// ----------------------------

