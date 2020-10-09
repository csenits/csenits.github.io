/*
	Please do not directly change anything here.
	To do any change in this file. 
	--> Do changes in  navBar.html file.
	--> Run the command
		sed 's/\\/\\\\/g;s/^.*$/&\\/g;s/'\''/\\'\''/g' navBar.html > navBar2.html

	--> copy paste the content of navBar2.html in the below fashion.


		document.write('\
		\
			$(content of navBar2.html)
		\
		');

	--> that is your navBar.js file

*/


document.write('\
\
<nav class="navbar navbar-expand-lg navbar-light bg-light">\
  <a class="navbar-brand" href="#">CSE NITS</a>\
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
    <span class="navbar-toggler-icon"></span>\
  </button>\
\
  <div class="collapse navbar-collapse" id="navbarSupportedContent">\
    <ul class="navbar-nav mr-auto">\
      <li class="nav-item active">\
        <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>\
      </li>\
      <li class="nav-item">\
        <a class="nav-link" href="#">Link</a>\
      </li>\
      <li class="nav-item dropdown">\
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
          Resources\
        </a>\
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">\
          <a class="dropdown-item" href="labs.html">Labs</a>\
          <a class="dropdown-item" href="books.html">Books</a>\
          <a class="dropdown-item" href="question-papers.html">Question Papers</a>\
        </div>\
      </li>\
      <a class="nav-link" href="about_us.html">About Us</a>\
      <li class="nav-item">\
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>\
      </li>\
    </ul>\
    <form class="form-inline my-2 my-lg-0">\
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">\
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>\
    </form>\
  </div>\
</nav>\
\
');