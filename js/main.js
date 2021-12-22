const app = new Vue({
    el: "#app",
    data: {
        info: {},
        actor: '',
        cantidad: '',
        fondo: 'bg-black'
    },
    created() {
        this.fetchData('https://breakingbadapi.com/api/characters')
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.info = data
                })
                .catch(err => {
                    console.error(err);
                })
            
        },
        quitarActor(actor){
             console.log(this.actor);
            console.log(2);
            this.actor='';

        },
        cambiarColor(fondo){
            console.log(this.fondo);
            if(this.fondo === 'bg-success'){
             this.fondo = 'bg-danger'
            }
            else{
                this.fondo = 'bg-success'
            }
            

       }

    }
})