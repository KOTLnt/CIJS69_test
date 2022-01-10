import Input from "./input.js";

// **1
// const array_number = [2, 3, -5, -2, 4];


// let new_array = array_number[0] * array_number [1];

// for ( i =0; i < array_number.length; ++i) {
//     if ( (array_number[i] * array_number[i+1] ) > new_array) {
//         new_array = array_number[i] * array_number[i+1]
//     }
//     console.log(new_array);
// }

// **2
// const array_input = [60, 40, 55, 75, 64];

// function alternatingSums(array) {
//     let new_array = [0, 0];
//     for (let i = 0; i < array.length; i++) {
//         if (i % 2 === 0) {
//             new_array[0] += array[i];
//         } else {
//             new_array[1] += array[i];
//         }
//     }
//     return console.log(new_array);
// }

// alternatingSums(array_input);

class Shrtcode {

    $container;
    //header
    $header;
    $nav;
    $ul;
    $li_1;
    $li_2;
    $li_3;
    $li_4;
    $txt_header;

    //form
    $form;
    $content_form;
    $input;
    $btn;
    $option;
    $text_form;

    //result
    $result;

    constructor() {
        this.$container = document.createElement("div");
        this.$container.setAttribute("class", " w-1/3 h-auto mt-40 bg-green-500 pt-20 m-auto block")

        // this.$header = document.createElement("header");
        // this.$header.setAttribute("class", "block mt-0")

        // this.$nav = document.createElement("nav");
        // this.$nav.setAttribute("class", "")


        // this.$ul = document.createElement("ul");
        // this.$ul.setAttribute("class", "flex")

        // this.$li_1 = document.createElement("ul");
        // this.$li_1.textContent = "home";

        // this.$li_2 = document.createElement("ul");
        // this.$li_2.textContent = "faq";

        // this.$li_3 = document.createElement("ul");
        // this.$li_3.textContent = "developer api";

        // this.$li_4 = document.createElement("ul");
        // this.$li_4.textContent = "more";


        // this.$txt_header = document.createElement("h1");
        // this.$txt_header.textContent = "the privacy-friendly url shortener";


        //form
        this.$form = document.createElement("form");
        this.$form.setAttribute("class", "block")

        // this.$content_form = document.createElement("div");

        this.$input = new Input(
            "url",
            "url",
            "enter your url",
        )

        this.$btn = document.createElement("button");
        this.$btn.type = "button";
        this.$btn.addEventListener("click", this.getAPI)
        this.$btn.textContent = "click"
        
        this.$btn.setAttribute("class", "rounded border-solid bg-black-500 text-white")

        // this.$option = document.createElement("div");
        // this.$option.textContent = "option"

        // this.$text_form = document.createElement("p");
        // this.$text_form.textContent = "checking"

        this.$result = document.createElement("p");
        this.$result.textContent = "aaaaaa";
        
    }

    getAPI = (e) => {
        let inputData = this.$input.getValue();
        let shortUrl = {};

        fetch('https://api.shrtco.de/v2/shorten?url=' + inputData)
        .then(response => response.json())
        .then(data => shortUrl = data.result)
        .then((shortUrl) => {this.renderAPI()})
        
        // .catch((error) => {
        //     this.$result.textContent = "error Url"})
        //   .catch((error) => { this.$result.textContent = "error Url"})
    }
    

    renderAPI(items)  {
        let {shortUrl} = items;
        let item = "";
        items.forEach((item) => {
            console.log(item)
        });
    }
    
    render() {
        // this.$ul.appendChild(this.$li_1);
        // this.$ul.appendChild(this.$li_2);
        // this.$ul.appendChild(this.$li_3);
        // this.$ul.appendChild(this.$li_4);

        // this.$nav.appendChild(this.$ul);
        // this.$header.appendChild(this.$txt_header);
        // this.$header.appendChild(this.$nav);

        // this.$form.appendChild(this.$content_form);
        this.$form.appendChild(this.$input.render());
        // this.$form.appendChild(this.$option)
        this.$form.appendChild(this.$btn);
        // this.$form.appendChild(this.$text_form);

        // this.$container.appendChild(this.$header);
        this.$container.appendChild(this.$result);

        this.$container.appendChild(this.$form);

        return this.$container;
    }


    
}

const app = new Shrtcode();
const display = document.getElementById("app");
display.appendChild(app.render())
