// define style rules to be programtically loaded
var style = document.createElement('style');
style.innerHTML = `

.red { 
    color: #F00; 
    font-size: 30px; 
    border: blue dashed 2px;
}

`;
document.getElementsByTagName('head')[0].appendChild(style);


// define component
Vue.component('button-counter', {
    props: ['title', 'items'],
    data: function () {
        return {
            count: 0
        }
    },
    template: `
    <div class="red">
        <h3>My button component</h3>
        <button v-on:click="count++">You clicked me {{ count }} times. {{title}}</button>
        <p v-for="item in items">{{item}}</p>
    </div>
    `
})


