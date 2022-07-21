class Navbar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        var url = this.getAttribute('url');
        var title = this.getAttribute('title');
        var subtitle = this.getAttribute('subtitle');
        if(url){
            this.innerHTML = `        
            <div class="text-2xl flex gap-2 items-center uppercase font-semibold p-6 text-white items-center flex gap-3"
            style="background-color: #0093dd;">           
                <a class="flex items-center px-2 py-1 rounded-full 
                    text-white text-sm font-semibold gap-1" 
                    href="` + url + `" 
                    style=" background-color: hsla(0,0%,50.2%,.4588235294117647);
                        color: #fff;
                        box-shadow: 0 0 3px 0 #fff;">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg>
                        Back
                </a>                    
                <div class="grid select-none">
                    ` + title + `
                    <span class="text-xs select-none">
                        ` + subtitle + `
                    </span>
                </div>
            </div>`

        }
        else{
            this.innerHTML = `        
            <div class="text-2xl flex gap-2 items-center uppercase font-semibold p-6 text-white items-center flex gap-3"
            style="background-color: #0093dd;">                                               
                <div class="grid select-none">
                    ` + title + `
                    <span class="text-xs select-none">
                        ` + subtitle + `
                    </span>
                </div>
            </div>`

        }
        

    }
}

customElements.define('block-navbar', Navbar);


class Block1 extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        var url = this.getAttribute('url');
        var title = this.getAttribute('title');

        this.innerHTML = `<a
            href="` + url + `" 
            class="bg-blue-100 hover:bg-blue-200 p-3 h-20 flex items-center rounded-md text-sm font-semibold text-black px-4 hover:shadow-xl 
            border-2 border-gray-300 
            shadow-xl">
            ` + title + `
            </a>
            `
        }
}

customElements.define('block-comp', Block1);




class Download1 extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        var url = this.getAttribute('url');
        var title = this.getAttribute('title');

        this.innerHTML = `
           <a class="flex items-center px-4 py-2  rounded-full w-80  
                    text-white text-sm bg-blue-600  font-semibold gap-2" 
                    href="` + url + `"
                        color: #fff;
                        box-shadow: 0 0 3px 0 #fff;">

                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>

                    ` + title + `
                </a>`
        }
}

customElements.define('block-download1', Download1);
