//Employee name
const nameInput = document.getElementById("employeeName");
const errorMsg = document.getElementById("employeeNameError");

  nameInput.addEventListener("keypress", (e) => {
    const char = String.fromCharCode(e.which);
    const valid = /^[a-zA-Z\s]$/.test(char);
    if (!valid) {
      e.preventDefault();
    }
  });

  // Validate on input (real-time)
  nameInput.addEventListener("input", () => {
    validateName();
  });

  function validateName() {
    const value = nameInput.value.trim();
    let message = "";

    if (value.length < 3) {
      message = "Name must be at least 3 characters.";
    } else if (value.length > 30) {
      message = "Name must be less than or equal to 30 characters.";
    } else if (!/^[A-Za-z\s]+$/.test(value)) {
      message = "Only alphabets and spaces allowed.";
    }

    if (message) {
      errorMsg.textContent = message;
      nameInput.classList.add("invalid");
      return false;
    } else {
      errorMsg.textContent = "";
      nameInput.classList.remove("invalid");
      return true;
    }
  }
//Employee Id
const employeeIDInput = document.getElementById("employeeID");
const employeeIDError = document.getElementById("employeeIDError");

// Validate on input (real-time)
employeeIDInput.addEventListener("input", () => {
  validateEmployeeID();
});

function validateEmployeeID() {
  const value = employeeIDInput.value.trim();
  let message = "";

  const pattern = /^ATS(\d{4})$/; // Matches "ATS" followed by 4 digits

  if (value.length !== 7) {
    message = "Employee ID must be exactly 7 characters.";
  } else if (!pattern.test(value)) {
    message = 'Employee ID must start with "ATS" followed by 4 digits.';
  } else {
    // Extract digits part and check if all zeros
    const digits = value.slice(3);
    if (digits === "0000") {
      message = "The last 4 digits cannot be all zeros.";
    }
  }

  if (message) {
    employeeIDError.textContent = message;
    employeeIDInput.classList.add("invalid");
    return false;
  } else {
    employeeIDError.textContent = "";
    employeeIDInput.classList.remove("invalid");
    return true;
  }
}

//Department
// Department input and error elements
const departmentInput = document.getElementById("department");
const departmentError = document.getElementById("departmentError");

// Real-time validation event
departmentInput.addEventListener("input", validateDepartment);

// Department validation function (same rules as Employee Name)
function validateDepartment() {
  const value = departmentInput.value.trim();
  let message = "";

  if (value.length < 3) {
    message = "Department must be at least 3 characters.";
  } else if (value.length > 30) {
    message = "Department must be less than or equal to 30 characters.";
  } else if (!/^[A-Za-z\s]+$/.test(value)) {
    message = "Only alphabets and spaces allowed.";
  }

  if (message) {
    departmentError.textContent = message;
    departmentInput.classList.add("invalid");
    return false;
  } else {
    departmentError.textContent = "";
    departmentInput.classList.remove("invalid");
    return true;
  }
}

//Appraiser name, designation, manager name
// Get input elements and error containers
const appraiserNameInput = document.getElementById("appraiserName");
const appraiserNameError = document.getElementById("appraiserNameError");

const designationInput = document.getElementById("designation");
const designationError = document.getElementById("designationError");

const managerNameInput = document.getElementById("managerName");
const managerNameError = document.getElementById("managerNameError");

// Common validation function
function validateTextField(inputEl, errorEl, fieldName) {
  const value = inputEl.value.trim();
  let message = "";

  if (value.length < 3) {
    message = `${fieldName} must be at least 3 characters.`;
  } else if (value.length > 30) {
    message = `${fieldName} must be less than or equal to 30 characters.`;
  } else if (!/^[A-Za-z\s]+$/.test(value)) {
    message = `Only alphabets and spaces allowed in ${fieldName}.`;
  }

  if (message) {
    errorEl.textContent = message;
    inputEl.classList.add("invalid");
    return false;
  } else {
    errorEl.textContent = "";
    inputEl.classList.remove("invalid");
    return true;
  }
}

// Specific validation wrappers
function validateAppraiserName() {
  return validateTextField(appraiserNameInput, appraiserNameError, "Appraiser Name");
}

function validateDesignation() {
  return validateTextField(designationInput, designationError, "Designation");
}

function validateManagerName() {
  return validateTextField(managerNameInput, managerNameError, "Manager Name");
}

// Real-time validation for appraiser fields
appraiserNameInput.addEventListener('input', validateAppraiserName);
designationInput.addEventListener('input', validateDesignation);
managerNameInput.addEventListener('input', validateManagerName);


//comments
// Comments textareas
const strengthsInput = document.getElementById("strengths");
const improvementInput = document.getElementById("improvement");
const goalsInput = document.getElementById("goals");
const additionalInput = document.getElementById("additional");

// Error containers
const strengthsError = document.getElementById("strengthsError");
const improvementError = document.getElementById("improvementError");
const goalsError = document.getElementById("goalsError");
const additionalError = document.getElementById("additionalError");

// Generic comment validator
function validateComment(inputEl, errorEl, fieldName) {
  const value = inputEl.value.trim();
  let message = "";

  if (value.length < 5) {
    message = `${fieldName} must be at least 5 characters.`;
  } else if (value.length > 50) {
    message = `${fieldName} must be less than or equal to 50 characters.`;
  }

  if (message) {
    errorEl.textContent = message;
    inputEl.classList.add("invalid");
    return false;
  } else {
    errorEl.textContent = "";
    inputEl.classList.remove("invalid");
    return true;
  }
}

// Specific validation wrappers
function validateStrengths() {
  return validateComment(strengthsInput, strengthsError, "Key Strengths");
}

function validateImprovement() {
  return validateComment(improvementInput, improvementError, "Areas for Improvement");
}

function validateGoals() {
  return validateComment(goalsInput, goalsError, "Career Goals");
}

function validateAdditional() {
  return validateComment(additionalInput, additionalError, "Additional Comments");
}

// Attach real-time validation listeners
strengthsInput.addEventListener("input", validateStrengths);
improvementInput.addEventListener("input", validateImprovement);
goalsInput.addEventListener("input", validateGoals);
additionalInput.addEventListener("input", validateAdditional);


function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.style.display = 'none');

  document.getElementById(tabId).style.display = 'block';

  const clickedTab = Array.from(tabs).find(tab => tab.textContent.includes(tabIdToTitle(tabId)));
  if (clickedTab) clickedTab.classList.add('active');

  currentTabIndex = tabIds.indexOf(tabId); // sync index
}




// Update showTab to also update currentTabIndex:
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.style.display = 'none');

  document.getElementById(tabId).style.display = 'block';

  const clickedTab = Array.from(tabs).find(tab => tab.textContent.includes(tabIdToTitle(tabId)));
  if (clickedTab) clickedTab.classList.add('active');

  currentTabIndex = tabIds.indexOf(tabId); // sync index
}

function tabIdToTitle(tabId) {
  const titles = {
    employee: 'Employee Info',
    appraiser: 'Appraiser Info',
    ratings: 'Ratings',
    comments: 'Comments'
  };
  return titles[tabId];
}


document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('.submit-btn');

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const requiredFields = [
      // Employee Info
      { input: nameInput, validate: validateName, error: errorMsg, label: "Employee Name" },
      { input: employeeIDInput, validate: validateEmployeeID, error: employeeIDError, label: "Employee ID" },
      { input: departmentInput, validate: validateDepartment, error: departmentError, label: "Department" },

      // Appraiser Info
      { input: appraiserNameInput, validate: validateAppraiserName, error: appraiserNameError, label: "Appraiser Name" },
      { input: designationInput, validate: validateDesignation, error: designationError, label: "Designation" },
      { input: managerNameInput, validate: validateManagerName, error: managerNameError, label: "Manager Name" },
      {
        input: document.querySelector('#appraiser select'),
        validate: (el) => {
          if (!el.value) {
            el.classList.add('invalid');
            showFieldError(el, "This field is required.");
            return false;
          } else {
            el.classList.remove('invalid');
            removeFieldError(el);
            return true;
          }
        },
        label: "Appraiser Type"
      },
      {
        input: document.querySelector('#appraiser input[type="date"]'),
        validate: (el) => {
          if (!el.value) {
            el.classList.add('invalid');
            showFieldError(el, "This field is required.");
            return false;
          } else {
            el.classList.remove('invalid');
            removeFieldError(el);
            return true;
          }
        },
        label: "Date of Joining"
      },

      // Ratings
      ...Array.from(document.querySelectorAll('#ratings select')).map((el, idx) => ({
        input: el,
        validate: (el) => {
          if (!el.value) {
            el.classList.add('invalid');
            showFieldError(el, "This field is required.");
            return false;
          } else {
            el.classList.remove('invalid');
            removeFieldError(el);
            return true;
          }
        },
        label: `Rating ${idx + 1}`
      })),

      // Comments
      { input: strengthsInput, validate: validateStrengths, error: strengthsError, label: "Key Strengths" },
      { input: improvementInput, validate: validateImprovement, error: improvementError, label: "Areas for Improvement" },
      { input: goalsInput, validate: validateGoals, error: goalsError, label: "Career Goals" },
      { input: additionalInput, validate: validateAdditional, error: additionalError, label: "Additional Comments" }
    ];

    let allValid = true;

    for (const field of requiredFields) {
      const value = field.input.value.trim();
      if (value === "") {
        if (field.error) {
          field.error.textContent = "This field is required.";
        } else {
          showFieldError(field.input, "This field is required.");
        }
        field.input.classList.add("invalid");
        allValid = false;
      } else {
        // Run your original validation
        const isValid = field.validate(field.input);
        if (!isValid) {
          allValid = false;
        }
      }
    }

    if (!allValid) {
      alert("Please correct the highlighted errors before submitting.");
      return;
    }

    // Everything is valid, proceed to save
    const data = {
      employee: {
        name: nameInput.value,
        id: employeeIDInput.value,
        department: departmentInput.value
      },
      appraiser: {
        type: document.querySelector('#appraiser select').value,
        name: appraiserNameInput.value,
        designation: designationInput.value,
        joiningDate: document.querySelector('#appraiser input[type="date"]').value,
        manager: managerNameInput.value
      },
      ratings: {
        technical: document.querySelector('#ratings select:nth-of-type(1)').value,
        communication: document.querySelector('#ratings select:nth-of-type(2)').value,
        collaboration: document.querySelector('#ratings select:nth-of-type(3)').value,
        problemSolving: document.querySelector('#ratings select:nth-of-type(4)').value,
        timeManagement: document.querySelector('#ratings select:nth-of-type(5)').value
      },
      comments: {
        strengths: strengthsInput.value,
        improvement: improvementInput.value,
        goals: goalsInput.value,
        additional: additionalInput.value
      }
    };

    localStorage.setItem('appraisalData', JSON.stringify(data));
    alert('Appraisal submitted and saved to localStorage!');
    location.reload();
  });

  // Utility to show inline errors
  function showFieldError(el, message) {
    let errorEl = el.nextElementSibling;
    if (!errorEl || !errorEl.classList.contains("error-message")) {
      errorEl = document.createElement("small");
      errorEl.className = "error-message";
      el.insertAdjacentElement("afterend", errorEl);
    }
    errorEl.textContent = message;
  }

  function removeFieldError(el) {
    const errorEl = el.nextElementSibling;
    if (errorEl && errorEl.classList.contains("error-message")) {
      errorEl.textContent = "";
    }
  }
});



const tabIds = ['employee', 'appraiser', 'ratings', 'comments'];
let currentTabIndex = 0;

document.addEventListener('click', (e) => {
  if (e.target.closest('.next-btn')) {
    currentTabIndex = Math.min(currentTabIndex + 1, tabIds.length - 1);
    showTab(tabIds[currentTabIndex]);
  }

  if (e.target.closest('.prev-btn')) {
    currentTabIndex = Math.max(currentTabIndex - 1, 0);
    showTab(tabIds[currentTabIndex]);
  }
});
