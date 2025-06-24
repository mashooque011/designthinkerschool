
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

// document.addEventListener('DOMContentLoaded', function () {
//     const formBoxes = document.querySelectorAll('.registration-form-bx3');
//     const successBoxes = document.querySelectorAll('.successful-form-mesage-bx3');
//     const submitBtns = document.querySelectorAll('.formsubmit-btn');
//     const regFormSec = document.querySelector('.reg-form-comp');
//     const regFormBtns = document.querySelectorAll('.reg-form-active-btn');
//     const closeFormBtn = document.querySelector('.close-form-btn');

//     const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbweVdGvfhnoJArWlleftZRJ8CmlgURTHGu6L4_Mzkb4v_j_mV71ohm2T4_m3TgnB2xJPg/exec';

//     // If already registered
//     if (localStorage.getItem("registered") === "true") {
//         formBoxes.forEach(form => form.style.display = "none");
//         successBoxes.forEach(success => success.style.display = "flex");
//     }

//     // Open form
//   // Open form (scholarship vs normal)
// regFormBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         const isScholarship = btn.getAttribute("data-value") === "scholarshipForm";
//         const isRegistered = localStorage.getItem("registered") === "true";

//         const regFormSec = document.querySelector('.reg-form-comp');
//         const normalForm = document.querySelector('#regForm');
//         const scholarshipForm = document.querySelector('#scholarshipForm');
//         const successBoxes = document.querySelectorAll('.successful-form-mesage-bx3');

//         regFormSec?.classList.add('regformactive');

//         if (isRegistered) {
//             // If already registered, show only success message
//             normalForm.style.display = 'none';
//             scholarshipForm.style.display = 'none';
//             successBoxes.forEach(success => success.style.display = 'flex');
//         } else {
//             // Show form based on button type
//             successBoxes.forEach(success => success.style.display = 'none');
//             if (isScholarship) {
//                 normalForm.style.display = 'none';
//                 scholarshipForm.style.display = 'block';
//             } else {
//                 scholarshipForm.style.display = 'none';
//                 normalForm.style.display = 'block';
//             }
//         }
//     });
// });



//     // Close form
//     closeFormBtn?.addEventListener('click', () => {
//         regFormSec?.classList.remove('regformactive');
//     });

//     // Click outside to close form
//     regFormSec?.addEventListener('click', () => {
//         regFormSec.classList.remove('regformactive');
//     });

//     // Prevent closing on form or success message click
//     [...formBoxes, ...successBoxes].forEach(box => {
//         box.addEventListener('click', e => e.stopPropagation());
//     });

//  // Handle form submission
// // Handle form submission
// formBoxes.forEach(formBox => {
//     formBox.querySelector('.formsubmit-btn')?.addEventListener('click', async function (e) {
//         e.preventDefault();

//         const name = formBox.querySelector('input[name="Name"], input[name="name"]').value.trim();
//         const phone = formBox.querySelector('input[name="Phone"], input[name="phone"]').value.trim();
//         const email = formBox.querySelector('input[name="Email"], input[name="email"]').value.trim();
//         const course = formBox.querySelector('.course-select-bx .selectText')?.innerText.trim();

//         // Name validations
//         if (name.length < 4) return alert("Name must be at least 4 characters.");
//         if (name.includes(" ")) return alert("Name should not contain spaces.");
//         if (!/^[A-Za-z]+$/.test(name)) return alert("Name must contain alphabets only, no numbers or special characters.");

//         // Phone validation
//         if (!/^\d{10}$/.test(phone)) return alert("Enter a valid 10-digit phone number.");

//         // Email validation
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) return alert("Please enter a valid email address.");

//         // Course validation
//         if (!course || course.toLowerCase() === "course") return alert("Please select a course.");

//         // Save to localStorage
//         localStorage.setItem("registered", "true");
//         localStorage.setItem("email", email);  // optional but saved if needed later

//         try {
//             await fetch(GOOGLE_SHEET_URL, {
//                 method: "POST",
//                 mode: "no-cors",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ name, phone, email, course })  // 👈 email added
//             });

//             // Hide all forms
//             document.querySelectorAll('.registration-form-bx-popup, .scholarship-form-bx').forEach(f => {
//                 f.style.display = "none";
//             });

//             // Show success message
//             successBoxes.forEach(success => success.style.display = "flex");

//         } catch (error) {
//             console.error("Error submitting form:", error);
//             alert("There was an error. Please try again later.");
//         }
//     });
// });



//     // Brochure download
//     document.querySelectorAll('.download-brochure-btn').forEach(btn => {
//         btn.addEventListener('click', function (e) {
//             e.preventDefault();
//             if (localStorage.getItem("registered") === "true") {
//                 const link = document.createElement("a");
//                 link.href = "./pdf/dummy-pdf.pdf";
//                 link.download = "3DT-Brochure-2024.pdf";
//                 link.click();
//             } else {
//                 alert("📩 Please register first to download the brochure.");
//                 regFormSec?.classList.add('regformactive');
//             }
//         });
//     });

//     // Study material downloads
//     const studyMatDownloads = [
//         { selector: '.download-btn1', pdf: './pdf/1 UCEED.pdf', name: 'UCEED-Question-Bank.pdf' },
//         { selector: '.download-btn2', pdf: './pdf/2 CEED.pdf', name: 'CEED-Question-Bank.pdf' },
//         { selector: '.download-btn3', pdf: './pdf/3 NID (MDes).pdf', name: 'NID-part-1-Question-Bank.pdf' },
//         { selector: '.download-btn4', pdf: './pdf/4 NID (BDes).pdf', name: 'NID-part-2-Question-Bank.pdf' },
//         { selector: '.download-btn5', pdf: './pdf/5 NIFT BDes MDes.pdf', name: 'NIFT-part-1-Question-Bank.pdf' },
//         { selector: '.download-btn6', pdf: './pdf/6 NIFT (BFT MFT).pdf', name: 'NIFT-part-2-Question-Bank.pdf' },
//         { selector: '.download-btn7', pdf: './pdf/7 Formula.pdf', name: 'Formula-Design.pdf' },

//     ];

//     studyMatDownloads.forEach(item => {
//         document.querySelectorAll(item.selector).forEach(btn => {
//             btn.addEventListener('click', function (e) {
//                 e.preventDefault();
//                 if (localStorage.getItem("registered") === "true") {
//                     const link = document.createElement("a");
//                     link.href = item.pdf;
//                     link.download = item.name;
//                     link.click();
//                 } else {
//                     alert("📚 Please register first to download this study material.");
//                     regFormSec?.classList.add('regformactive');
//                 }
//             });
//         });
//     });

// });

// ===========================================

// document.addEventListener('DOMContentLoaded', function () {
//     const regForm = document.querySelector('#regForm');
//     const scholarshipForm = document.querySelector('#scholarshipForm');
//     const successNormal = document.querySelector('.success-msg-normal');
//     const successScholarship = document.querySelector('.success-msg-scholarship');
//     const formBoxes = document.querySelectorAll('.registration-form-bx3');
//     const regFormSec = document.querySelector('.reg-form-comp');
//     const regFormBtns = document.querySelectorAll('.reg-form-active-btn');
//     const closeFormBtn = document.querySelector('.close-form-btn');

//     const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbweVdGvfhnoJArWlleftZRJ8CmlgURTHGu6L4_Mzkb4v_j_mV71ohm2T4_m3TgnB2xJPg/exec';

//     // Show success if already registered
//     if (localStorage.getItem("registered") === "true") {
//         if (regForm) regForm.style.display = "none";
//         if (successNormal) successNormal.style.display = "flex";
//     }

//     if (localStorage.getItem("scholarship_registered") === "true") {
//         if (scholarshipForm) scholarshipForm.style.display = "none";
//         if (successScholarship) successScholarship.style.display = "flex";
//     }

//     // Open form
//     regFormBtns.forEach(btn => {
//         btn.addEventListener('click', () => {
//             const isScholarship = btn.getAttribute("data-value") === "scholarshipForm";

//             if (regFormSec) regFormSec.classList.add('regformactive');
//             if (successNormal) successNormal.style.display = "none";
//             if (successScholarship) successScholarship.style.display = "none";

//             if (isScholarship) {
//                 if (localStorage.getItem("scholarship_registered") === "true") {
//                     if (scholarshipForm) scholarshipForm.style.display = 'none';
//                     if (successScholarship) successScholarship.style.display = 'flex';
//                 } else {
//                     if (scholarshipForm) scholarshipForm.style.display = 'block';
//                     if (regForm) regForm.style.display = 'none';
//                 }
//             } else {
//                 if (localStorage.getItem("registered") === "true") {
//                     if (regForm) regForm.style.display = 'none';
//                     if (successNormal) successNormal.style.display = 'flex';
//                 } else {
//                     if (regForm) regForm.style.display = 'block';
//                     if (scholarshipForm) scholarshipForm.style.display = 'none';
//                 }
//             }
//         });
//     });

//     // Close buttons
//     if (closeFormBtn) {
//         closeFormBtn.addEventListener('click', () => {
//             if (regFormSec) regFormSec.classList.remove('regformactive');
//         });
//     }

//     if (regFormSec) {
//         regFormSec.addEventListener('click', () => {
//             regFormSec.classList.remove('regformactive');
//         });
//     }

//     [...formBoxes, successNormal, successScholarship].forEach(box => {
//         if (box) {
//             box.addEventListener('click', e => e.stopPropagation());
//         }
//     });

//     // Form Submission
//     formBoxes.forEach(formBox => {
//         const submitBtn = formBox.querySelector('.formsubmit-btn');
//         if (!submitBtn) return;

//         submitBtn.addEventListener('click', async function (e) {
//             e.preventDefault();

//             const name = formBox.querySelector('input[name="Name"], input[name="name"]')?.value.trim();
//             const phone = formBox.querySelector('input[name="Phone"], input[name="phone"]')?.value.trim();
//             const email = formBox.querySelector('input[name="Email"], input[name="email"]')?.value.trim();
//             const course = formBox.querySelector('.course-select-bx .selectText')?.innerText.trim();

//             if (!name || name.length < 4) return alert("Name must be at least 4 characters.");
//             if (name.includes(" ")) return alert("Name should not contain spaces.");
//             if (!/^[A-Za-z]+$/.test(name)) return alert("Name must contain alphabets only.");
//             if (!/^\d{10}$/.test(phone)) return alert("Enter a valid 10-digit phone number.");
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             if (!emailRegex.test(email)) return alert("Please enter a valid email address.");
//             if (!course || course.toLowerCase() === "course") return alert("Please select a course.");

//             const isScholarship = formBox.id === "scholarshipForm";
//             localStorage.setItem(isScholarship ? "scholarship_registered" : "registered", "true");
//             localStorage.setItem("email", email);

//             try {
//                 await fetch(GOOGLE_SHEET_URL, {
//                     method: "POST",
//                     mode: "no-cors",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify({ name, phone, email, course })
//                 });

//                 formBox.style.display = "none";
//                 if (isScholarship && successScholarship) {
//                     successScholarship.style.display = "flex";
//                 } else if (successNormal) {
//                     successNormal.style.display = "flex";
//                 }

//             } catch (error) {
//                 console.error("Error submitting form:", error);
//                 alert("There was an error. Please try again later.");
//             }
//         });
//     });

//     // Brochure Download
//     document.querySelectorAll('.download-brochure-btn').forEach(btn => {
//         btn.addEventListener('click', function (e) {
//             e.preventDefault();
//             if (localStorage.getItem("registered") === "true") {
//                 const link = document.createElement("a");
//                 link.href = "./pdf/dummy-pdf.pdf";
//                 link.download = "3DT-Brochure-2024.pdf";
//                 link.click();
//             } else {
//                 alert("📩 Please register first to download the brochure.");
//                 if (regFormSec) regFormSec.classList.add('regformactive');
//             }
//         });
//     });

//     // Study Material
//     const studyMatDownloads = [
//         { selector: '.download-btn1', pdf: './pdf/1 UCEED.pdf', name: 'UCEED-Question-Bank.pdf' },
//         { selector: '.download-btn2', pdf: './pdf/2 CEED.pdf', name: 'CEED-Question-Bank.pdf' },
//         { selector: '.download-btn3', pdf: './pdf/3 NID (MDes).pdf', name: 'NID-part-1-Question-Bank.pdf' },
//         { selector: '.download-btn4', pdf: './pdf/4 NID (BDes).pdf', name: 'NID-part-2-Question-Bank.pdf' },
//         { selector: '.download-btn5', pdf: './pdf/5 NIFT BDes MDes.pdf', name: 'NIFT-part-1-Question-Bank.pdf' },
//         { selector: '.download-btn6', pdf: './pdf/6 NIFT (BFT MFT).pdf', name: 'NIFT-part-2-Question-Bank.pdf' },
//         { selector: '.download-btn7', pdf: './pdf/7 Formula.pdf', name: 'Formula-Design.pdf' }
//     ];

//     studyMatDownloads.forEach(item => {
//         document.querySelectorAll(item.selector).forEach(btn => {
//             btn.addEventListener('click', function (e) {
//                 e.preventDefault();
//                 if (localStorage.getItem("registered") === "true") {
//                     const link = document.createElement("a");
//                     link.href = item.pdf;
//                     link.download = item.name;
//                     link.click();
//                 } else {
//                     alert("📚 Please register first to download this study material.");
//                     if (regFormSec) regFormSec.classList.add('regformactive');
//                 }
//             });
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const regForms = document.querySelectorAll('.regForm');
//     const successNormals = document.querySelectorAll('.success-msg-normal');

//     const scholarshipForm = document.querySelector('#scholarshipForm');
//     const successScholarship = document.querySelector('.success-msg-scholarship');

//     const courseForm = document.querySelector('#courseForm');
//     const successCourse = document.querySelector('.success-msg-course');

//     const formBoxes = document.querySelectorAll('.registration-form-bx3');
//     const regFormSec = document.querySelector('.reg-form-comp');
//     const regFormBtns = document.querySelectorAll('.reg-form-active-btn');
//     const closeFormBtn = document.querySelector('.close-form-btn');

//     const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbweVdGvfhnoJArWlleftZRJ8CmlgURTHGu6L4_Mzkb4v_j_mV71ohm2T4_m3TgnB2xJPg/exec';

//     // Show success if already registered
//     if (localStorage.getItem("registered") === "true") {
//         regForms.forEach(f => f.style.display = "none");
//         successNormals.forEach(el => el.style.display = "flex");
//     }

//     if (localStorage.getItem("scholarship_registered") === "true") {
//         if (scholarshipForm) scholarshipForm.style.display = "none";
//         if (successScholarship) successScholarship.style.display = "flex";
//     }

//     if (localStorage.getItem("course_registered") === "true") {
//         if (courseForm) courseForm.style.display = "none";
//         if (successCourse) successCourse.style.display = "flex";
//     }

//     // Open form logic
//     regFormBtns.forEach(btn => {
//         btn.addEventListener('click', () => {
//             const formType = btn.getAttribute("data-value");
//             if (regFormSec) regFormSec.classList.add('regformactive');

//             [...regForms, scholarshipForm, courseForm].forEach(f => { if (f) f.style.display = 'none'; });
//             [...successNormals, successScholarship, successCourse].forEach(s => { if (s) s.style.display = 'none'; });

//             if (formType === "scholarshipForm") {
//                 if (localStorage.getItem("scholarship_registered") === "true") {
//                     if (successScholarship) successScholarship.style.display = "flex";
//                 } else {
//                     if (scholarshipForm) scholarshipForm.style.display = "block";
//                 }
//             } else if (formType === "courseForm") {
//                 if (localStorage.getItem("course_registered") === "true") {
//                     if (successCourse) successCourse.style.display = "flex";
//                 } else {
//                     if (courseForm) courseForm.style.display = "block";
//                 }
//             } else {
//                 if (localStorage.getItem("registered") === "true") {
//                     successNormals.forEach(el => el.style.display = "flex");
//                 } else {
//                     regForms.forEach(f => f.style.display = "block");
//                 }
//             }
//         });
//     });

//     // Close form overlay
//     if (closeFormBtn) {
//         closeFormBtn.addEventListener('click', () => {
//             if (regFormSec) regFormSec.classList.remove('regformactive');
//         });
//     }

//     if (regFormSec) {
//         regFormSec.addEventListener('click', () => {
//             regFormSec.classList.remove('regformactive');
//         });
//     }

//     [...formBoxes, ...successNormals, successScholarship, successCourse].forEach(box => {
//         if (box) box.addEventListener('click', e => e.stopPropagation());
//     });

//     // Form Submit Logic
//     formBoxes.forEach(formBox => {
//         const submitBtn = formBox.querySelector('.formsubmit-btn');
//         if (!submitBtn) return;

//         submitBtn.addEventListener('click', async function (e) {
//             e.preventDefault();

//             const name = formBox.querySelector('input[name="Name"], input[name="name"]')?.value.trim();
//             const phone = formBox.querySelector('input[name="Phone"], input[name="phone"]')?.value.trim();
//             const email = formBox.querySelector('input[name="Email"], input[name="email"]')?.value.trim();
//             const course = formBox.querySelector('.course-select-bx .selectText')?.innerText.trim();

//             if (!name || name.length < 4) return alert("Name must be at least 4 characters.");
//             if (name.includes(" ")) return alert("Name should not contain spaces.");
//             if (!/^[A-Za-z]+$/.test(name)) return alert("Name must contain alphabets only.");
//             if (!/^\d{10}$/.test(phone)) return alert("Enter a valid 10-digit phone number.");
//             if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return alert("Please enter a valid email address.");
//             if (!course || course.toLowerCase() === "course") return alert("Please select a course.");

//             const formId = formBox.id;
//             let key = "registered", successEls = successNormals;
//             if (formId === "scholarshipForm") {
//                 key = "scholarship_registered";
//                 successEls = [successScholarship];
//             } else if (formId === "courseForm") {
//                 key = "course_registered";
//                 successEls = [successCourse];
//             }

//             localStorage.setItem(key, "true");
//             localStorage.setItem("email", email);

//             try {
//                 await fetch(GOOGLE_SHEET_URL, {
//                     method: "POST",
//                     mode: "no-cors",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify({ name, phone, email, course })
//                 });

//                 formBox.style.display = "none";
//                 successEls.forEach(el => el && (el.style.display = "flex"));
//             } catch (err) {
//                 console.error("Error:", err);
//                 alert("There was an error. Please try again later.");
//             }
//         });
//     });

//     // Brochure Download Logic
//     document.querySelectorAll('.download-brochure-btn').forEach(btn => {
//         btn.addEventListener('click', function (e) {
//             e.preventDefault();
//             if (localStorage.getItem("registered") === "true") {
//                 const link = document.createElement("a");
//                 link.href = "./pdf/dummy-pdf.pdf";
//                 link.download = "3DT-Brochure-2024.pdf";
//                 link.click();
//             } else {
//                 alert("📩 Please register first to download the brochure.");
//                 if (regFormSec) regFormSec.classList.add('regformactive');
//             }
//         });
//     });

//     // Study Material Download
//     const studyMatDownloads = [
//         { selector: '.download-btn1', pdf: './pdf/1 UCEED.pdf', name: 'UCEED-Question-Bank.pdf' },
//         { selector: '.download-btn2', pdf: './pdf/2 CEED.pdf', name: 'CEED-Question-Bank.pdf' },
//         { selector: '.download-btn3', pdf: './pdf/3 NID (MDes).pdf', name: 'NID-part-1-Question-Bank.pdf' },
//         { selector: '.download-btn4', pdf: './pdf/4 NID (BDes).pdf', name: 'NID-part-2-Question-Bank.pdf' },
//         { selector: '.download-btn5', pdf: './pdf/5 NIFT BDes MDes.pdf', name: 'NIFT-part-1-Question-Bank.pdf' },
//         { selector: '.download-btn6', pdf: './pdf/6 NIFT (BFT MFT).pdf', name: 'NIFT-part-2-Question-Bank.pdf' },
//         { selector: '.download-btn7', pdf: './pdf/7 Formula.pdf', name: 'Formula-Design.pdf' }
//     ];

//     studyMatDownloads.forEach(item => {
//         document.querySelectorAll(item.selector).forEach(btn => {
//             btn.addEventListener('click', function (e) {
//                 e.preventDefault();
//                 if (localStorage.getItem("registered") === "true") {
//                     const link = document.createElement("a");
//                     link.href = item.pdf;
//                     link.download = item.name;
//                     link.click();
//                 } else {
//                     alert("📚 Please register first to download this study material.");
//                     if (regFormSec) regFormSec.classList.add('regformactive');
//                 }
//             });
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const regForms = document.querySelectorAll('.regForm');
    const successNormals = document.querySelectorAll('.success-msg-normal');

    const scholarshipForm = document.querySelector('#scholarshipForm');
    const successScholarship = document.querySelector('.success-msg-scholarship');

    const courseForm = document.querySelector('#courseForm');
    const successCourse = document.querySelector('.success-msg-course');

    const formBoxes = document.querySelectorAll('.registration-form-bx3');
    const regFormSec = document.querySelector('.reg-form-comp');
    const regFormBtns = document.querySelectorAll('.reg-form-active-btn');
    const closeFormBtn = document.querySelector('.close-form-btn');

    const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbweVdGvfhnoJArWlleftZRJ8CmlgURTHGu6L4_Mzkb4v_j_mV71ohm2T4_m3TgnB2xJPg/exec';

    // Show success if already registered
    regForms.forEach(f => {
        const type = f.getAttribute("data-type");
        if (type === "normal" && localStorage.getItem("registered") === "true") {
            f.style.display = "none";
            successNormals.forEach(el => el.style.display = "flex");
        }
    });

    if (localStorage.getItem("scholarship_registered") === "true") {
        if (scholarshipForm) scholarshipForm.style.display = "none";
        if (successScholarship) successScholarship.style.display = "flex";
    }

    if (localStorage.getItem("course_registered") === "true") {
        if (courseForm) courseForm.style.display = "none";
        if (successCourse) successCourse.style.display = "flex";
    }

    // Open form logic
    regFormBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const formType = btn.getAttribute("data-value");
            if (regFormSec) regFormSec.classList.add('regformactive');

            [...regForms, scholarshipForm, courseForm].forEach(f => { if (f) f.style.display = 'none'; });
            [...successNormals, successScholarship, successCourse].forEach(s => { if (s) s.style.display = 'none'; });

            if (formType === "scholarshipForm") {
                if (localStorage.getItem("scholarship_registered") === "true") {
                    if (successScholarship) successScholarship.style.display = "flex";
                } else {
                    if (scholarshipForm) scholarshipForm.style.display = "block";
                }
            } else if (formType === "courseForm") {
                if (localStorage.getItem("course_registered") === "true") {
                    if (successCourse) successCourse.style.display = "flex";
                } else {
                    if (courseForm) courseForm.style.display = "block";
                }
            } else {
                if (localStorage.getItem("registered") === "true") {
                    successNormals.forEach(el => el.style.display = "flex");
                } else {
                    regForms.forEach(f => f.style.display = "block");
                }
            }
        });
    });

    // Close form overlay
    if (closeFormBtn) {
        closeFormBtn.addEventListener('click', () => {
            if (regFormSec) regFormSec.classList.remove('regformactive');
        });
    }

    if (regFormSec) {
        regFormSec.addEventListener('click', () => {
            regFormSec.classList.remove('regformactive');
        });
    }

    [...formBoxes, ...successNormals, successScholarship, successCourse].forEach(box => {
        if (box) box.addEventListener('click', e => e.stopPropagation());
    });

    // Form Submit Logic
    formBoxes.forEach(formBox => {
        const submitBtn = formBox.querySelector('.formsubmit-btn');
        if (!submitBtn) return;

        submitBtn.addEventListener('click', async function (e) {
            e.preventDefault();

            const name = formBox.querySelector('input[name="Name"], input[name="name"]')?.value.trim();
            const phone = formBox.querySelector('input[name="Phone"], input[name="phone"]')?.value.trim();
            const email = formBox.querySelector('input[name="Email"], input[name="email"]')?.value.trim();
            const course = formBox.querySelector('.course-select-bx .selectText')?.innerText.trim();

            if (!name || name.length < 4) return alert("Name must be at least 4 characters.");
            if (name.includes(" ")) return alert("Name should not contain spaces.");
            if (!/^[A-Za-z]+$/.test(name)) return alert("Name must contain alphabets only.");
            if (!/^\d{10}$/.test(phone)) return alert("Enter a valid 10-digit phone number.");
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return alert("Please enter a valid email address.");
            if (!course || course.toLowerCase() === "course") return alert("Please select a course.");

            const formType = formBox.getAttribute("data-type");

            let key = "registered", successEls = successNormals;
            if (formType === "scholarship") {
                key = "scholarship_registered";
                successEls = [successScholarship];
            } else if (formType === "course") {
                key = "course_registered";
                successEls = [successCourse];
            }

            localStorage.setItem(key, "true");
            localStorage.setItem("email", email);

            try {
                await fetch(GOOGLE_SHEET_URL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, phone, email, course })
                });

                formBox.style.display = "none";
                successEls.forEach(el => el && (el.style.display = "flex"));
            } catch (err) {
                console.error("Error:", err);
                alert("There was an error. Please try again later.");
            }
        });
    });

    // Brochure Download Logic
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
                if (regFormSec) regFormSec.classList.add('regformactive');
            }
        });
    });

    // Study Material Download
    const studyMatDownloads = [
        { selector: '.download-btn1', pdf: './pdf/1 UCEED.pdf', name: 'UCEED-Question-Bank.pdf' },
        { selector: '.download-btn2', pdf: './pdf/2 CEED.pdf', name: 'CEED-Question-Bank.pdf' },
        { selector: '.download-btn3', pdf: './pdf/3 NID (MDes).pdf', name: 'NID-part-1-Question-Bank.pdf' },
        { selector: '.download-btn4', pdf: './pdf/4 NID (BDes).pdf', name: 'NID-part-2-Question-Bank.pdf' },
        { selector: '.download-btn5', pdf: './pdf/5 NIFT BDes MDes.pdf', name: 'NIFT-part-1-Question-Bank.pdf' },
        { selector: '.download-btn6', pdf: './pdf/6 NIFT (BFT MFT).pdf', name: 'NIFT-part-2-Question-Bank.pdf' },
        { selector: '.download-btn7', pdf: './pdf/7 Formula.pdf', name: 'Formula-Design.pdf' }
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
                    if (regFormSec) regFormSec.classList.add('regformactive');
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
    './images/dumy-1.png',
    './images/dumy-8.png',
    './images/dumy-2.png',
   
   


  


  ];

  const logos2 = [
     './images/comp-logo-4.png',
    './images/comp-logo-5.png',
    './images/comp-logo-6.png',
    './images/dumy-4.png',
     './images/dumy-3.png',
    './images/dumy-5.png',
  ];

  const logos3 = [
    './images/comp-logo-7.png',
    './images/comp-logo-8.png',
    './images/dumy-6.png',
    './images/dumy-7.png',

   
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

