
function init(){
  new Vue({
    el:'#app',
    data:{
      newTodo:'',
      greeting:true,
      ok:true,
      message:'Hello World!',
      todos:[
        {text:'Learn JavaScript'},
        {text:'Learn Vue.js'},
        {text:'Build Something Awesome'}
      ],
      todoss:[
        {text:'Add some todoss01'},
        {text:'Add some todoss02'}
      ],
      items:[
        {message:'Foo'},
        {message:'Bar'}
      ]
    },
    methods:{
      reverseMessage:function(){
        this.message = this.message.split('').reverse().join('')
      },
      addTodo:function(){
        var text = this.newTodo.trim()
        if(text){
          this.todos.push({text:text})
          this.newTodo = ''
        }
      },
      removeTodo:function(index){
        this.todoss.splice(index,1)
      }
    }
  })

}