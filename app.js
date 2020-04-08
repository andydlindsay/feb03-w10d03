const app = new Vue({
  el: '#root',
  data: {
    message: 'Welcome to my application',
    posts: [
      { title: 'lorem ipsum', nickname: 1 },
      { title: 'i love vue!', nickname: 2 },
      { title: 'i am not creative', nickname: 3 }
    ],
    tooltip: 'you are hovering over the title',
    visible: true,
    counter: 0,
    loginForm: {
      username: '',
      password: ''
    }
  },
  created() {
    fetch('https://andydlindsay-pinterest-clone.herokuapp.com/api/public/posts')
      .then(res => res.json())
      .then(posts => this.posts = posts.posts.slice(0, 5));
  },
  methods: {
    onClick() {
      alert('hello from the other side');
    },
    incrementCounter() {
      this.counter++;
    },
    onSubmitLoginForm() {
      console.log(this.loginForm);
    }
  },
  computed: {
    reverseUsername() {
      return this.loginForm.username.split('').reverse().join('');
    }
  },
  watch: {
    counter: function() {
      console.log('updates!');
    }
  }
});
