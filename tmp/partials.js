angular.module('templates-dist', ['../public/app/partials/account/alerts.html', '../public/app/partials/account/breadcrumb.html', '../public/app/partials/account/footer.html', '../public/app/partials/account/header.html', '../public/app/partials/account/index.html', '../public/app/partials/account/login-widget.html', '../public/app/partials/account/login.html', '../public/app/partials/account/register.html', '../public/app/partials/account/side-menu.html', '../public/app/partials/account/verify.html', '../public/app/partials/account/widget.html', '../public/app/partials/expenses/categories/index.html', '../public/app/partials/expenses/categories/list.html', '../public/app/partials/expenses/categories/new.html', '../public/app/partials/expenses/index.html', '../public/app/partials/expenses/new.html', '../public/app/partials/home/index.html', '../public/app/partials/public/about.html', '../public/app/partials/public/banner.html', '../public/app/partials/public/footer.html', '../public/app/partials/public/header.html', '../public/app/partials/public/index.html', '../public/app/partials/public/start.html', '../public/app/partials/users/index.html', '../public/app/partials/users/list.html']);

angular.module("../public/app/partials/account/alerts.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/alerts.html",
    "<div ng-show=\"showError\" class=\"animated fadeIn alert alert-{{error.type}}\">\n" +
    "      <span class=\"{{error.icon}}\"></span>\n" +
    "      <span ng-bind=\"error.message\"></span>\n" +
    "  </div>\n" +
    "  <div ng-show=\"showSuccess\" class=\"animated fadeIn alert alert-{{success.type}}\">\n" +
    "      <span class=\"{{success.icon}}\"></span>\n" +
    "      <span ng-bind=\"success.message\"></span>\n" +
    "  </div>\n" +
    "");
}]);

angular.module("../public/app/partials/account/breadcrumb.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/breadcrumb.html",
    "<nav class=\"breadcrumb-wrapper\">\n" +
    "  <ol class=\"breadcrumb\">\n" +
    "    <li><a href=\"#\">Home</a></li>\n" +
    "    <li><a href=\"#\">Library</a></li>\n" +
    "    <li class=\"active\">Data</li>\n" +
    "  </ol>\n" +
    "</nav>\n" +
    "");
}]);

angular.module("../public/app/partials/account/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/footer.html",
    "<footer id=\"account\">\n" +
    "    Powered By <a href=\"#\">Senshi</a>\n" +
    "</footer>");
}]);

angular.module("../public/app/partials/account/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/header.html",
    "<nav id=\"account\">\n" +
    "  <div class=\"navbar-header\">\n" +
    "    <!-- <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n" +
    "    <span class=\"sr-only\">Toggle navigation</span>\n" +
    "    <span class=\"icon-bar\"></span>\n" +
    "    <span class=\"icon-bar\"></span>\n" +
    "    <span class=\"icon-bar\"></span>\n" +
    "  </button> -->\n" +
    "\n" +
    "  <div class=\"navbar-brand\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-xs-10\">\n" +
    "        <a class=\"btn btn-dark menu-btn\"><i class=\"ion-navicon\"></i></a>\n" +
    "        HELA\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "  <ul style=\"margin-left:200px;text-align:center\" class=\"nav navbar-nav\">\n" +
    "    <li><a is-active-nav ui-sref=\"account.home\" href=\"#\"><i class=\"ion-home\"></i></a></li>\n" +
    "    <li style=\"padding-top:15px\">\n" +
    "      <span class=\"dropdown\" dropdown>\n" +
    "        <a href=\"\" class=\"dropdown-toggle\" dropdown-toggle>\n" +
    "          <i class=\"ion-plus-round\"></i>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu\" dropdown-menu>\n" +
    "          <li>\n" +
    "            <div class=\"row\" style=\"width: 700px;\">\n" +
    "              <ul class=\"nav col-md-4\">\n" +
    "                <li class=\"expense\">\n" +
    "                  <h5>Expense</h5>\n" +
    "                </li>\n" +
    "                <li role=\"separator\" class=\"divider\"></li>\n" +
    "                <li>\n" +
    "                  <a href=\"#\">One Time Expense</a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                  <a href=\"#\">Recurring Expense</a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                  <a ui-sref=\"account.expenses.categories.new\">New Category</a>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "              <ul class=\"nav col-md-4\">\n" +
    "                <li class=\"income\">\n" +
    "                  <h5>Income</h5>\n" +
    "                </li>\n" +
    "                <li role=\"separator\" class=\"divider\"></li>\n" +
    "                <li><a href=\"#\">One Time Income</a></li>\n" +
    "                <li><a href=\"#\">Recurring Income</a></li>\n" +
    "              </ul>\n" +
    "              <ul class=\"nav col-md-4\">\n" +
    "                <li class=\"accounts\">\n" +
    "                  <h5>Bank Accounts</h5>\n" +
    "                </li>\n" +
    "                <li role=\"separator\" class=\"divider\"></li>\n" +
    "                <li><a href=\"#\">New Account</a></li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </li>\n" +
    "\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "\n" +
    "    </ul>\n" +
    "    <ul class=\"nav navbar-nav navbar-right\" role=\"user\">\n" +
    "      <li>\n" +
    "        <a ui-sref=\"account.account\">\n" +
    "          <div class=\"row\" style=\"width:200px\">\n" +
    "            <img ng-src=\"{{user.avatar}}\" alt=\"\" class=\"col-xs-1\" style=\"border-radius:15px;padding:0\">\n" +
    "            <div class=\"col-xs-11\">\n" +
    "              <span class=\"user\" ng-bind=\"user.first_name\"></span> <span class=\"user\" ng-bind=\"user.last_name\"></span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "        </a></li>\n" +
    "        <li style=\"padding-top:15px\">\n" +
    "          <span class=\"dropdown\" dropdown>\n" +
    "            <a href=\"\" class=\"dropdown-toggle\" dropdown-toggle>\n" +
    "              <i class=\"ion-gear-a\"></i>\n" +
    "            </a>\n" +
    "            <ul class=\"dropdown-menu\" dropdown-menu style=\"left:-400px\">\n" +
    "              <li>\n" +
    "                <div class=\"row\" style=\"width: 400px;\">\n" +
    "                  <ul class=\"nav col-md-6\">\n" +
    "                    <li class=\"expense\">\n" +
    "                      <h5>System Account</h5>\n" +
    "                    </li>\n" +
    "                    <li role=\"separator\" class=\"divider\"></li>\n" +
    "                    <li>\n" +
    "                      <a href=\"#\">Profile</a>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                      <a href=\"#\">Recurring Expense</a>\n" +
    "                    </li>\n" +
    "                  </ul>\n" +
    "                  <ul class=\"nav col-md-6\">\n" +
    "                    <li class=\"income\">\n" +
    "                      <h5>System Settings</h5>\n" +
    "                    </li>\n" +
    "                    <li role=\"separator\" class=\"divider\"></li>\n" +
    "                    <li><a href=\"#\">Preferences</a></li>\n" +
    "                  </ul>\n" +
    "\n" +
    "                </div>\n" +
    "              </li>\n" +
    "\n" +
    "            </ul>\n" +
    "          </li>\n" +
    "        <li ng-controller=\"usersCtrl\" ><a href=\"#\" ng-click=\"logout()\"><i class=\"ion-log-out\"></i></a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </nav>\n" +
    "");
}]);

angular.module("../public/app/partials/account/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/index.html",
    "<div ui-view=\"header\"></div>\n" +
    "<div id=\"container\">\n" +
    "  <!-- <nav ui-view=\"side-menu\"></nav> -->\n" +
    "  <div ui-view=\"alerts\" class=\"alerts\"></div>\n" +
    "  <div id=\"main\" style=\"position:relative;min-height:90%\">\n" +
    "    <!-- <div ui-view=\"breadcrumb\"></div> -->\n" +
    "    <div ui-view=\"\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<!-- <div ui-view=\"footer\"></div> -->\n" +
    "");
}]);

angular.module("../public/app/partials/account/login-widget.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/login-widget.html",
    "<form class=\"navbar-form navbar-left pull-right\" ng-submit=\"login()\">\n" +
    "    <div class=\"form-group\">\n" +
    "        <input required=\"required\" type=\"email\" ng-model=\"user.email\" class=\"form-control\" placeholder=\"Email Address\">\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <input required=\"required\" type=\"password\" ng-model=\"user.password\" class=\"form-control\" placeholder=\"Password\">\n" +
    "    </div>\n" +
    "    <button type=\"submit\" class=\"btn btn-primary no-margin\">Login</button>\n" +
    "    <button type=\"button\" ui-sref=\"register\" class=\"btn btn-success no-margin\">Register</button>\n" +
    "</form>\n" +
    "");
}]);

angular.module("../public/app/partials/account/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/login.html",
    "<img class=\"bg\" class=\"img-responsive\" src=\"assets/images/background-secondary.jpeg\" alt=\"\" />\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12\">\n" +
    "  <a class=\"logo\" href=\"\" ui-sref=\"public\">HELA</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"content small\" style=\"min-height:75%\">\n" +
    "  <form class=\"row\" style=\"opacity:0.95\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"form-group col-md-12\" ui-view=\"alerts\"></div>\n" +
    "      <div class=\"col-md-12\">\n" +
    "        <h4 class=\" title\">Login as Existing User</h4>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "      <div class=\"inner\">\n" +
    "      <div class=\"form-group col-md-12\">\n" +
    "        <label for=\"\">Email Address</label>\n" +
    "        <input required ng-model=\"user.email\" type=\"email\" class=\"form-control\" placeholder=\"Geoffrey\">\n" +
    "      </div>\n" +
    "      <div class=\"form-group col-md-12\">\n" +
    "        <label for=\"\">Password</label>\n" +
    "        <input required ng-model=\"user.password\" type=\"password\" class=\"form-control\" placeholder=\"Cers3i\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"btn-group col-md-12\">\n" +
    "        <a ui-sref=\"account.home\" type=\"submit\" class=\"col-md-6 btn btn-primary\" type=\"submit\">Login</a>\n" +
    "        <button type=\"button\" ui-sref=\"register\" class=\"col-md-6 btn btn-success\">Register</button>\n" +
    "      </div>\n" +
    "      </div>\n" +
    "        <a ui-sref=\"public\" class=\"col-md-12 btn btn-danger\"><i style=\"padding-right:10px\" class=\"ion-earth\"></i>Back to Website</a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</form>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/account/register.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/register.html",
    "<a href=\"\" ui-sref=\"public\"><img src=\"images/kescrow.logo.png\" class=\"img-responsive\" style=\"width:100px;margin:20px;\" alt=\"\"></a>\n" +
    "<div class=\"content register\">\n" +
    "    <form ng-submit=\"register()\">\n" +
    "        <h4 class=\"title\">Register New User</h4>\n" +
    "        <div class=\"inner\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group col-md-12\" ui-view=\"alerts\"></div>\n" +
    "            <h5 class=\"subtitle col-md-12\"><i class=\"ion-person\"></i>User Information</h5>\n" +
    "            <div class=\"form-group col-md-6\">\n" +
    "                <label for=\"\">First Name</label>\n" +
    "                <input ng-model=\"user.first_name\" type=\"text\" class=\"form-control\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group col-md-6\">\n" +
    "                <label for=\"\">Last Name</label>\n" +
    "                <input ng-model=\"user.last_name\" type=\"text\" class=\"form-control\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group col-md-12\">\n" +
    "                <label for=\"\">Email Address</label>\n" +
    "                <input ng-model=\"user.email\" type=\"email\" class=\"form-control\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group col-md-12\">\n" +
    "                <label for=\"\">Mobile Number</label>\n" +
    "                <input ng-model=\"user.phone\" type=\"text\" class=\"form-control\">\n" +
    "            </div>\n" +
    "            <h5 class=\"subtitle col-md-12\"><i class=\"ion-key\"></i>Account Information</h5>\n" +
    "            <div class=\"form-group col-md-12\">\n" +
    "                <label for=\"\">Username</label>\n" +
    "                <input ng-model=\"user.username\" type=\"text\" class=\"form-control\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group col-md-12\">\n" +
    "                <label for=\"\">Password</label>\n" +
    "                <input ng-model=\"user.password\" type=\"password\" class=\"form-control\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group col-md-12\">\n" +
    "                <label for=\"\">Confirm Password</label>\n" +
    "                <input ng-model=\"user.confirm_password\" type=\"password\" class=\"form-control\">\n" +
    "            </div>\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <button type=\"submit\" class=\"col-md-6 btn btn-success\">Register</button>\n" +
    "                <button ui-sref=\"login\" class=\"col-md-6 btn btn-primary\">Login</button>\n" +
    "            </div>\n" +
    "</div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<!--{{user}}\n" +
    "<div ui-view=\"footer\"></div>-->\n" +
    "<div class=\"ng-scope\" style=\"position:absolute;bottom:20;left:20;color:black;border-radius:100px;padding:10px;opacity:0.7;background:white\">\n" +
    "  <p style=\"margin:0\">\n" +
    "    Powered by <b>Senshi Group</b> © 2016\n" +
    "  </p>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/account/side-menu.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/side-menu.html",
    "<div push-menu>\n" +
    "  <!-- <h5 class=\"title\"><i class=\"ion-android-list\"></i>Menu</h5> -->\n" +
    "    <accordion>\n" +
    "      <accordion-group>\n" +
    "        <accordion-heading>\n" +
    "          <i class=\"ion-card\"></i>Transactions\n" +
    "        </accordion-heading>\n" +
    "        <ul class=\"nav nav-pills nav-stacked\">\n" +
    "          <li><a href=\"\">Overview</a></li>\n" +
    "          <li><a is-active-nav ui-sref=\"account.transaction.list\">List</a></li>\n" +
    "          <li><a is-active-nav ui-sref=\"account.transaction.new\">New</a></li>\n" +
    "        </ul>\n" +
    "      </accordion-group>\n" +
    "      <accordion-group>\n" +
    "        <accordion-heading>\n" +
    "          <i class=\"ion-gear-a\"></i>User Management\n" +
    "        </accordion-heading>\n" +
    "        <ul class=\"nav nav-pills nav-stacked\">\n" +
    "          <li><a href=\"\">Profile</a></li>\n" +
    "          <li><a ui-sref=\"account.users.list\">Settings</a></li>\n" +
    "        </ul>\n" +
    "      </accordion-group>\n" +
    "    </accordion>\n" +
    "  </ul>\n" +
    "");
}]);

angular.module("../public/app/partials/account/verify.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/verify.html",
    "<a href=\"\" ui-sref=\"public\"><img src=\"images/kescrow.logo.png\" class=\"img-responsive\" style=\"width:100px;margin:20px;\" alt=\"\"></a>\n" +
    "<div class=\"content register\">\n" +
    "    <form ng-submit=\"verify()\">\n" +
    "        <h4 class=\"title\">Verify User</h4>\n" +
    "        <div class=\"inner\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"form-group col-md-12\" ui-view=\"alerts\"></div>\n" +
    "            <div class=\"form-group col-md-4\">\n" +
    "                <label for=\"\">Email</label>\n" +
    "                <input ng-model=\"user.email\" type=\"email\" class=\"form-control\" placeholder=\"Enter Email\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group col-md-4\">\n" +
    "                <label for=\"\">Code</label>\n" +
    "                <input ng-model=\"user.code\" type=\"text\" class=\"form-control\" placeholder=\"Enter verification code\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <button type=\"submit\" class=\"col-md-6 btn btn-success\">Verify</button>\n" +
    "            </div>\n" +
    "</div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<!--{{user}}\n" +
    "<div ui-view=\"footer\"></div>-->\n" +
    "<div class=\"ng-scope\" style=\"position:absolute;bottom:20;left:20;color:black;border-radius:100px;padding:10px;opacity:0.7;background:white\">\n" +
    "  <p style=\"margin:0\">\n" +
    "    Powered by <b>Senshi Group</b> © 2016\n" +
    "  </p>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/account/widget.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/widget.html",
    "<div class=\"inner card-sm\">\n" +
    "    <h5 class=\"header\"><i class=\"ion-gear-a\"></i>Account</h5>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"actual\">\n" +
    "            <div class=\"stats\">\n" +
    "                <div class=\"stat\">\n" +
    "                    <div class=\"value\">1000</div>\n" +
    "                    <div class=\"description\">\n" +
    "                        Money Owed\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"stat\">\n" +
    "                    <div class=\"value\">9000</div>\n" +
    "                    <div class=\"description\">\n" +
    "                        Money Paid\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"stat\">\n" +
    "                    <div class=\"description\"></div>\n" +
    "                    <div class=\"value\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/expenses/categories/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/expenses/categories/index.html",
    "<div ui-view=\"\"></div>\n" +
    "");
}]);

angular.module("../public/app/partials/expenses/categories/list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/expenses/categories/list.html",
    "<div class=\"col-md-12 padded content\">\n" +
    "  <div class=\"inner\">\n" +
    "    <div class=\"row\">\n" +
    "<table class=\"table table-bordered\">\n" +
    "  <thead>\n" +
    "    <th>\n" +
    "      Name\n" +
    "    </th>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr ng-repeat=\"expense_category in expense_categories\">\n" +
    "      <td ng-bind=\"expense_category.name\" ng-if=\"expense_category.name\"></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "  <thead>\n" +
    "    <th>\n" +
    "      Name\n" +
    "    </th>\n" +
    "  </thead>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/expenses/categories/new.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/expenses/categories/new.html",
    "<form class=\"col-md-12 padded content\" ng-submit=\"add_category()\">\n" +
    "  <div class=\"inner\">\n" +
    "    <div class=\"row\">\n" +
    "      <h4>New Category</h4>\n" +
    "      <div class=\"form-group col-md-12\">\n" +
    "        <label for=\"\">Name</label>\n" +
    "        <input required ng-model=\"expense_category.name\" type=\"text\" class=\"form-control\" placeholder=\"Books\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group col-md-12\">\n" +
    "        <button type=\"submit\" name=\"button\" class=\"btn btn-success\">Add Category</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("../public/app/partials/expenses/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/expenses/index.html",
    "<div ui-view=\"\"></div>\n" +
    "");
}]);

angular.module("../public/app/partials/expenses/new.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/expenses/new.html",
    "<form class=\"col-md-12\">\n" +
    "  <div class=\"inner\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"form-group col-md-12\">\n" +
    "        <label for=\"\">Email Address</label>\n" +
    "        <input required ng-model=\"user.email\" type=\"email\" class=\"form-control\" placeholder=\"Geoffrey\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("../public/app/partials/home/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/home/index.html",
    "<div class=\"row\" style=\"padding:1% 10%\">\n" +
    "    <div ui-view=\"tracking\" class=\"col-md-8\"></div>\n" +
    "    <div ui-view=\"account\" class=\"col-md-4\"></div>\n" +
    "    <div ui-view=\"transactions\" class=\"col-md-4\"></div>\n" +
    "    <div ui-view=\"profile\" class=\"col-md-4\"></div>\n" +
    "    <div ui-view=\"\"></div>\n" +
    "</div>\n" +
    "<div class=\"\" style=\"position:absolute;bottom:20;left:20;color:black;border-radius:100px;padding:10px;opacity:0.7;background:white\">\n" +
    "  <p style=\"margin:0\">\n" +
    "    Powered by <b>Senshi Group</b> &copy 2016\n" +
    "  </p>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/public/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/about.html",
    "<div class=\"padded content\">\n" +
    "  <h3 class=\"center\">Why Use Hela</h3>\n" +
    "  <p>\n" +
    "    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
    "  </p>\n" +
    "  <p>\n" +
    "    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
    "  </p>\n" +
    "  <p>\n" +
    "    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
    "  </p>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/public/banner.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/banner.html",
    "<div class=\"banner\">\n" +
    "  <div class=\"mask\"></div>\n" +
    "  <img src=\"assets/images/background-main.jpeg\" alt=\"\" />\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/public/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/footer.html",
    "<nav>\n" +
    "    <div class=\"col-md-6\">\n" +
    "        <a href=\"\">\n" +
    "            <i class=\"ion-email\"></i>  Contact Us\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6\">\n" +
    "        Follow Us\n" +
    "        <a href=\"\">\n" +
    "            <i class=\"ion-social-twitter\"></i></a>\n" +
    "        <a href=\"\">\n" +
    "            <i class=\"ion-social-facebook\"></i>\n" +
    "        </a>\n" +
    "        <a href=\"\">\n" +
    "            <i class=\"ion-social-googleplus\"></i>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</nav>");
}]);

angular.module("../public/app/partials/public/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/header.html",
    "<nav id=\"main\" class=\"header\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "        </button>\n" +
    "        <a class=\"navbar-brand\" href=\"#\">\n" +
    "            HELA\n" +
    "        </a>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "        <ul style=\"margin-left:20px\" class=\"nav navbar-nav\">\n" +
    "            <li is-active-nav><a ui-sref=\"public.home\" href=\"#\">HOME</a></li>\n" +
    "            <li is-active-nav><a ui-sref=\"public.about\" href=\"#\">ABOUT</a></li>\n" +
    "        </ul>\n" +
    "        <ul style=\"margin-left:20px\" class=\"nav navbar-nav navbar-right\">\n" +
    "            <li is-active-nav><a ui-sref=\"login\" href=\"#\"><i class=\"fa fa-sign-in\"></i>LOGIN</a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "");
}]);

angular.module("../public/app/partials/public/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/index.html",
    "<div ui-view=\"header\"></div>\n" +
    "<div ui-view=\"banner\"></div>\n" +
    "<div ui-view=\"about\"></div>\n" +
    "<!-- <div ui-view=\"start\"></div> -->\n" +
    "<div ui-view=\"\"></div>\n" +
    "<!-- <footer ui-view=\"footer\"></footer> -->\n" +
    "");
}]);

angular.module("../public/app/partials/public/start.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/start.html",
    "<div class=\"content main start\">\n" +
    "    <h3>Start Using <img src=\"images/KE.scrow.png\" alt=\"\"></h1>\n" +
    "    <div class=\"row\">\n" +
    "        <button type=\"submit\" class=\"col-md-4 btn btn-dark btn-blue\" ui-sref=\"login\">Login</button>\n" +
    "        <button type=\"submit\" class=\"col-md-4 btn btn-dark btn-green\" ui-sref=\"register\">Register</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/users/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/users/index.html",
    "<div ui-view=\"\"></div>\n" +
    "");
}]);

angular.module("../public/app/partials/users/list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/users/list.html",
    "<div class=\"content padded\" sen-table>\n" +
    "    <table class=\"table bordered\">\n" +
    "        <thead>\n" +
    "        <tr>\n" +
    "            <th>Name</th>\n" +
    "            <th>Role</th>\n" +
    "            <th>Last Logged In</th>\n" +
    "            <th>Action</th>\n" +
    "        </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "        <tr ng-repeat=\"user in users\">\n" +
    "            <td ng-bind=\"user.first_name+ ' '+ user.last_name\"></td>\n" +
    "            <td >\n" +
    "                <span ng-if=\"user.role\" ng-bind=\"user.role\"></span>\n" +
    "                <span ng-if=\"!user.role\">\n" +
    "                    <i class=\"ion-android-alert\"></i> No Role Assigned\n" +
    "                </span>\n" +
    "            </td>\n" +
    "            <td ng-bind=\"user.last_login\"></td>\n" +
    "            <td>\n" +
    "                <button class=\"btn btn-primary\" ng-click=\"view(user)\">\n" +
    "                    <i class=\"ion-eye\"></i> View Profile\n" +
    "                </button>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "        </tbody>\n" +
    "        <tfoot>\n" +
    "        <tr>\n" +
    "            <th>Name</th>\n" +
    "            <th>Role</th>\n" +
    "            <th>Last Logged In</th>\n" +
    "            <th>Action</th>\n" +
    "        </tr>\n" +
    "        </tfoot>\n" +
    "    </table>\n" +
    "    <div class=\"form-group\">\n" +
    "        <button ng-click=\"new()\" class=\"btn btn-sm btn-success\"><i class=\"ion-plus-round\"></i>Add New User</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
