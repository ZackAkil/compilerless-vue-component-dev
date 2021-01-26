// define style rules to be programtically loaded
var style = document.createElement('style');
style.innerHTML = `

.list { 
    color: blue; 
    font-size: 20px; 
    border: red solid 2px;
}

`;
document.getElementsByTagName('head')[0].appendChild(style);


// define component
Vue.component('counter-list', {
    props: ['items'],
    data: function () {
        return {
            
        }
    },
    template: `
    <div class="list">
        <h3>My list component</h3>
        <p v-for="item in items">This is my item : {{item}}</p>
    </div>
    `
})


