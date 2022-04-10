const getValueFromInput = (id) => {
  return document.getElementById(id).value;
};
const getValueFromTextArea = (id) => {
  return document.getElementById(id).innerHTML;
};
const isCheckboxChecked = (id) => {
  return document.getElementById(id).checked;
};
const getTasks = () => {
  const tasks = [];
  if (isCheckboxChecked("webdev")) {
    tasks.push("Web Development");
  }
  if (isCheckboxChecked("content")) {
    tasks.push("Content Creation");
  }
  if (isCheckboxChecked("market")) {
    tasks.push("Market Research");
  }
  if (isCheckboxChecked("seo")) {
    tasks.push("SEO");
  }
  return tasks;
};

const enableButton = () => {
  if (
    getValueFromInput("input-name").length > 0 &&
    getValueFromInput("input-email").length > 0 &&
    getValueFromInput("input-company").length > 0
  ) {
    document.getElementById("submit-button").disabled = false;
  } else {
    document.getElementById("submit-button").disabled = true;
  }
};

const submitForm = () => {
  const name = getValueFromInput("input-name");
  const email = getValueFromInput("input-email");
  const company = getValueFromInput("input-company");
  const budget = getValueFromInput("input-budget") ?? "--";
  const details = getValueFromInput("input-details") ?? "--";
  const tasks = getTasks();
  const tasksString = tasks.length > 0 ? tasks.join(", ") : "--";

  const subject = `New inquiry from ${name} for ${company} [${tasksString}]`;
  const body = `Name: ${name}%0D%0AE-Mail: ${email}%0D%0ACompany: ${company}%0D%0ABudget: ${budget}%0D%0ATasks: ${tasksString}%0D%0ADetails: ${details}`;

  location.href = `mailto:${email}?subject=${subject}&body=${body}`;
};
