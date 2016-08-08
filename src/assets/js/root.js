/* Common Style Modules */
require("./styles.js");

/* Index.html File Copy */
require("file?name=[name].[ext]!../../index.html");

/* Main React Component */
require("./app");

/* Bootstrap Without jQuery */ /* Must be loaded after main react component! */
require("./bootstrap/bootstrap-without-jquery.min.js");
