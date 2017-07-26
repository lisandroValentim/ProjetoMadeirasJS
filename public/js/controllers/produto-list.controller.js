(function () {
  'use strict';

  angular
    .module('app')
    .controller('ProdutoListController', ProdutoListController);

  ProdutoListController.$inject = ['ProdutoService']
  function ProdutoListController(ProdutoService) {
    var vm = this;
    vm.produtos = [];
    vm.busca = ''

    vm.remover = remover;
    vm.buscar = activate;

    activate();

    ////////////////

    function activate() {
      var query = vm.busca ? { $text: { $search: vm.busca } } : {}
      ProdutoService.find(query)
        .success(function (data) {
          vm.produtos = data;
        });
    }

    function remover(produto) {
      confirmBox('Deseja realmente remover o produto "' + produto.descricao + '"', function () {
        ProdutoService.remove(produto._id)
          .success(function () {
            activate();
          });
      });

     
    }

  }
})();