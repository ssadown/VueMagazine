var app = new Vue({
    el: '#block',
    data: {
      counter: 0,
    },
    mounted() {
      setInterval(() => {
        this.counter++
      }, 1000)
    },
  });
  const app2 = new Vue ({
    el: '#block2',
    data: {
      time: 'Страница загружена ' + new Date().toLocaleString()
    }
  });


