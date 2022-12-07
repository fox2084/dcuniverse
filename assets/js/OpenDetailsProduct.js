// Angular js
app.controller("openDetailsProduct", function ($scope, $window, $location) {
    // Set quantity default
    $scope.quantityOnFormDetails = 1;

    // Get current url
    $scope.Products.forEach(element => {
        if ($location.absUrl().indexOf(element.keyword) != -1) {
            $scope.productDetail = element;
        }
    });

    // Check quantity <=0 or = undefined --> set value = 1
    $scope.changeQuantityOnDetails = function() {
        if($scope.quantityOnFormDetails <= 0 || $scope.quantityOnFormDetails == undefined) {
            $scope.quantityOnFormDetails = 1;
        }
        return $scope.quantityOnFormDetails;
    }

    // Add to cart from Details product
    // Get product and add product to cart when click add to cart
    $scope.addToCartFromDetailsProduct = function (index) {
        $scope.product = index.productDetail;
        $scope.productCart = {
            name: $scope.product.name,
            price: $scope.product.price,
            oldPrice: $scope.product.oldPrice,
            img: $scope.product.img,
            quantity: $scope.changeQuantityOnDetails()
        }

        $scope.ProductOnLocalStorage = ($window.localStorage.getItem("carts") != null) ? JSON.parse($window.localStorage.getItem("carts")) : [];
        $scope.ProductOnLocalStorage.push($scope.productCart);
        $window.localStorage.setItem("carts", JSON.stringify($scope.ProductOnLocalStorage));
        $scope.refreshCart();

        // Show notification add success
        const toastLiveExample = document.getElementById('liveToast');
        const toast = new bootstrap.Toast(toastLiveExample);
        toast.show();

    }
});