const name = 'LoginController';

class  Controller {
  constructor ($http, $state) {
      this.$http = $http;
      this.$state = $state;
      this.email = '';
      this.password = '';
  }
    onSubmit() {
        console.log({email : this.email, password: this.password});
        this.$http.post('http://localhost\:3000/login', {email : this.email, password: this.password})
            .then(response => {
                console.log(response);
                response.data.success && this.$state.go('projectsList')});
    }
}

export default {name, Controller};
