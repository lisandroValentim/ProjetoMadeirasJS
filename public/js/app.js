(function() {
  'use strict';

  angular.module('app', [
    'ngRoute',
    'ui.bootstrap'
  ]).config(AppConfig);

  AppConfig.$inject = ['$routeProvider'];

  function AppConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .when('/clientes', {
        templateUrl: 'partials/cliente-list.html',
        controller: 'ClienteListController',
        controllerAs: 'vm'
      })
      .when('/clientes/new', {
        templateUrl: 'partials/cliente-form.html',
        controller: 'ClienteFormController',
        controllerAs: 'vm'
      })
      .when('/clientes/:id', {
        templateUrl: 'partials/cliente-form.html',
        controller: 'ClienteFormController',
        controllerAs: 'vm'
      })
      .when('/produtos', {
        templateUrl: 'partials/produto-list.html',
        controller: 'ProdutoListController',
        controllerAs: 'vm'
      })
      .when('/produtos/new', {
        templateUrl: 'partials/produto-form.html',
        controller: 'ProdutoFormController',
        controllerAs: 'vm'
      })
      .when('/produtos/:id', {
        templateUrl: 'partials/produto-form.html',
        controller: 'ProdutoFormController',
        controllerAs: 'vm'
      })
      .when('/pedidos', {
        templateUrl: 'partials/pedido-list.html',
        controller: 'PedidoListController',
        controllerAs: 'vm'
      })
      .when('/pedidos/new', {
        templateUrl: 'partials/pedido-form.html',
        controller: 'PedidoFormController',
        controllerAs: 'vm'
      })
      .when('/pedidos/:id', {
        templateUrl: 'partials/pedido-form.html',
        controller: 'PedidoFormController',
        controllerAs: 'vm'
      })
      .otherwise('/');
  }  
})();