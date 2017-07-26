(function () {
  'use strict';

  angular
    .module('app')
    .controller('ProdutoFormController', ProdutoFormController);

  ProdutoFormController.$inject = ['ProdutoService', '$location', '$routeParams'];
  function ProdutoFormController(ProdutoService, $location, $routeParams) {
    var vm = this;
    vm.produto = {};
    vm.titulo = 'Novo Produto';

    vm.salvar = salvar;

    activate();

    ////////////////

    function activate() {
      if ($routeParams.id) {
        ProdutoService.findById($routeParams.id)
          .success(function (data) {
            vm.produto = data;
            vm.titulo = 'Editando Produto'
          });
      }
    }

    function salvar() {
      ProdutoService.save(vm.produto)
        .success(function () {
          $location.path('/produtos')
        })
    }
  }
})();