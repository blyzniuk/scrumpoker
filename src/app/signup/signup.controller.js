const name = 'SignupController';

class  Controller {
  constructor ($http) {
      this.$http = $http;
      this.email = '';
      this.password = '';
      this.name = '';
  }
    onSubmit() {
        this.$http.post('http://localhost:3000/signup', {
          name: this.name,
          email : this.email,
          password: this.password
        });
    }
}

export default {name, Controller};
