import app from 'app.config';

import './login.scss';

// 登陆
app.config(($stateProvider) => {
    $stateProvider.state('login', {
        url: '/login',
        template: require('./login.html')
    });
}).controller('loginCtrl', ($scope) => {
    $scope.needCheckCode = false;
    $scope.errorMessage = '';

    $scope.loginData = {
        username: '',
        password: '',
        code: ''
    };

    const errorMessage = {
        needAccount: '请填写用户名',
        needPassword: '请填写密码',
        needCheckcode: '请填写验证码',
        accoutOrPasswordErreor: '账户名或密码错误'
    };

    $scope.onInputChange = function() {
        $scope.errorMessage = '';
    };

    $scope.onLoginIn = function() {
        $scope.errorMessage = errorMessage.accoutOrPasswordErreor;
        $scope.needCheckCode = true;
    };
});
