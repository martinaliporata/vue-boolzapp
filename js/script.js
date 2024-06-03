const {createApp} = Vue

createApp ({
    data(){
        return {
            contatti: [
                {
                    name: 'Michele',
                    image: './imgs/avatar_1.jpg'
                },
                {
                    name: 'Fabio',
                    image: './imgs/avatar_2.jpg'
                },
                {
                    name: 'Samuele',
                    image: './imgs/avatar_3.jpg'
                },
                {
                    name: 'Alessandro B.',
                    image: './imgs/avatar_4.jpg'
                },
                {
                    name: 'Alessandro L.',
                    imageUrl: './imgs/avatar_5.jpg',
                },
                {
                    name: 'Claudia',
                    image: './imgs/avatar_6.jpg'
                },
                {
                    name: 'Federico',
                    image: './imgs/avatar_7.jpg'
                },
                {
                    name: 'Davide',
                    image: './imgs/avatar_8.jpg'
                },
            ],
            message: '',
        }
    },
    methods
}).mount('#app')