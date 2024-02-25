import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

// using inquirer package to get the user input
//using qr-image package to generate the image of the url
//using fs module to create a text file to save the user input

inquirer
  .prompt([
    /* Pass your questions in here */{
        message:"Type your url",
        name: "URL"
        //objects in javascript an enclosed between '{}'
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_img = qr.image(url);
    qr_img.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile('url.txt', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


