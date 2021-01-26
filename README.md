# 👨‍💻 Compilerless Vue component dev 🛠️
Just testing out how I could potentially build with fully contained components (structure + logic + style) without needing to use a compiler.

#### [Check out the beautiful test frontend](https://zackakil.github.io/compilerless-vue-component-dev/)

### Why I don't like compiling frontend stuff
- I want to build with Vue without needed to set up loads of stuff on my local machine and have all different kinds of tool running. 
- I want to be able to rip the source code directly from where ever it's hosted and make changes and save the code back.
- I want simple.

### Why I don't just write it all in one html page
- I do prefer to do that for small apps
- But for bigger apps separate fully contained files would be nice
- Also I build similar functionality alot so component reuse would be ideal without having to copy over massive CSS files (that's why I've went a bit over board trying to get CSS in the js files.)

### What my compilerless components look like
```js
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
        <button v-on:click="count++">You clicked me {{ count }} times. {{title}}</button>
        <p v-for="item in items">{{item}}</p>
    </div>
    `
})

```
