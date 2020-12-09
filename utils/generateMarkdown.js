// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Title
  ${data.title}

  ## Description
  ${data.Description}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Contribution
  ${data.Contribution}

  ## License
  ${data.License}

  #Github
  ${data.GitHub}

  ##Questions
  ${data.Questions}

`;
}

module.exports = generateMarkdown;
