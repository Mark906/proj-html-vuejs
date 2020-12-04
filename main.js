var app = new Vue(
    {
        el: '#root',
        data: {
            drop: false,
            add: true,
            remove: false,
            indice_citazioni: 0,
            citazioni: [
                {
                    autore: "Steve Jobs - Apple",
                    citazione: " 'That's been one of my mantras - focus and simplicity. Simple can be harder than complex; you have to work hard to get your thinking clean to make it simple.' "
                },
                {
                    autore: "Steve Jobs - Apple",
                    citazione: " 'La cosa più preziosa che puoi fare è un errore: non imparerai nulla dall'essere perfetto.' "
                }
            ],
            brands: ["images/logo_demo_1.png", "images/logo_demo4.png", "images/Vector_Smart_Object-1.png", "images/Vector_Smart_Object-2.png", "images/Vector_Smart_Object-3.png"],
            works: ["images/portfolio1_featured_item-1200x960.jpg","images/portfolio5_featured_item-1200x960.jpg","images/portfolio4_featured_item-1200x960.jpg","images/portfolio3_featured_item-1200x960.jpg","images/portfolio2_featured_item-1200x960.jpg","images/portfolio6_featured_item-1200x960.jpg"],
            news: ["images/blog3-featured-600x400.jpg", "images/blog2-featured-600x400.jpg", "images/blog1-featured-600x400.jpg"],
            copyrights: ["copyright 2012-2020", "Avada Theme by Theme Fusion", "All rights riserved", "Powered by WordPress"],
            input_name:'',
            input_email:'',
            input_phone:''
        },
        methods: {
            next_image() {
                // incremento l'indice della citazione corrente
                this.indice_citazioni += 1;
                // verifico l'indice è uscito dal range delle posizioni dell'array
                // ossia se ho superato il limite superiore
                if(this.indice_citazioni > this.citazioni.length - 1) {
                    this.indice_citazioni = 0;
                }
            },
            prev_image() {
                // decremento l'indice della citazione corrente
                this.indice_citazioni -= 1;
                // verifico se l'indice è uscito dal range delle posizioni dell'array
                // ossia se ho superato il limite inferiore
                if(this.indice_citazioni < 0) {
                    this.indice_citazioni = this.citazioni.length - 1;
                }
            },
            change(index){
                this.indice_citazioni = index;
            },
            addworks(){
                this.add = false;
                this.remove = true;
                let n = 0;
                let work = "images/portfolio";
                for(let i = 0; i < 4; i++){
                    n = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
                    this.works.push(work + n + "_featured_item-1200x960.jpg");
                }
            },
            removeworks(){
                this.remove = false;
                this.add = true;
                this.works.splice(6, 4);
            },
            dropdown(){
                this.drop = true;
            },
            close_dropdown(){
                this.drop = false;
            },
            loginput(){
                console.log(this.input_name);
                console.log(this.input_email);
                console.log(this.input_phone);
            }
        }
    }
);
